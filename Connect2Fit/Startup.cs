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
            string sqlConnectionString = "Server=tcp:f5bbrkoevs.database.windows.net,1433;Database=connect2fit;User ID=jye.goodlet@f5bbrkoevs;Password=RandomPassword123;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            GlobalHost.DependencyResolver.UseSqlServer(sqlConnectionString);
            app.MapSignalR();
        }
    }
}
