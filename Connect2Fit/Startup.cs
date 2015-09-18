using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Connect2Fit.Startup))]
namespace Connect2Fit
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
