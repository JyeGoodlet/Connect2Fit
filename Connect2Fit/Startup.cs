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
            string connectionString = "Endpoint=sb://connectfit.servicebus.windows.net/;SharedAccessKeyName=jgoodlet;SharedAccessKey=D4NBMm0zw9xbvDZutj79P3lrS5cQWrx42GsnfoPfgkQ";


            var config = new ServiceBusScaleoutConfiguration(connectionString, "blast")
            {
                TopicCount = 3,
                MaxQueueLength = 50
            };
            GlobalHost.DependencyResolver.UseServiceBus(config);
            app.MapSignalR();
        }
    }
}
