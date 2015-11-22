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
            //remove me to disable signalr scaleout
            string connectionString =  ConfigurationManager.AppSettings["Microsoft.ServiceBus.ConnectionString"]; 
            var config = new ServiceBusScaleoutConfiguration(connectionString, "Scaleout")
            {
                TopicCount = 3,
                MaxQueueLength = 50
            };
            GlobalHost.DependencyResolver.UseServiceBus(config);
            //end here
            app.MapSignalR();
     
        }
    }
}
