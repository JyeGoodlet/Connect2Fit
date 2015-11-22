using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Owin;
using System.Configuration;

[assembly: OwinStartupAttribute(typeof(Connect2Fit.Startup))]
namespace Connect2Fit
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            string connectionString = "Endpoint=sb://connect2fit.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=WPxH/8w8B2Mqx47PfU6H2h8dhQeLwXWzb7L1E6CHZDU=";


            //remove me to disable signalr scaleout
            var config = new ServiceBusScaleoutConfiguration(connectionString, "Scaleout")
            {
                TopicCount = 3,
                MaxQueueLength = 50
            };
            GlobalHost.DependencyResolver.UseServiceBus(config);
            app.MapSignalR();
            //end here
        }
    }
}
