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

            GlobalHost.DependencyResolver.UseServiceBus(ConfigurationManager.ConnectionStrings["Connect2FitServiceBus"].ConnectionString, "Chat");
            app.MapSignalR();
        }
    }
}
