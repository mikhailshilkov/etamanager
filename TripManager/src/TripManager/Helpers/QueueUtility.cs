using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.ServiceBus;
using Microsoft.ServiceBus.Messaging;

namespace TripManager.Helpers
{
    public static class QueueUtility
    {
        private static string connectionString = "Endpoint=sb://etamanager.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=WGP6DRSNmtgwC1ZLkqctzo/G5YnSk1ftlgRUsuGj20I=";

        public static void Send(string queueName, object messageBody)
        {
            Ensure(queueName);

            var client = QueueClient.CreateFromConnectionString(connectionString, queueName);
            client.Send(new BrokeredMessage(messageBody));
        }

        public static void Listen<T>(string queueName, Action<T> action)
        {
            Ensure(queueName);

            QueueClient Client = QueueClient.CreateFromConnectionString(connectionString, queueName);

            // Configure the callback options
            OnMessageOptions options = new OnMessageOptions();
            options.AutoComplete = false;
            options.AutoRenewTimeout = TimeSpan.FromMinutes(1);

            // Callback to handle received messages
            Client.OnMessage((message) =>
            {
                try
                {
                    action(message.GetBody<T>());

                    // Remove message from queue
                    message.Complete();
                }
                catch (Exception)
                {
                    // Indicates a problem, unlock message in queue
                    message.Abandon();
                }
            }, options);
        }

        private static void Ensure(string queueName)
        {
            var namespaceManager = NamespaceManager.CreateFromConnectionString(connectionString);
            if (!namespaceManager.QueueExists(queueName))
            {
                namespaceManager.CreateQueue(queueName);
            }
       }
    }
}
