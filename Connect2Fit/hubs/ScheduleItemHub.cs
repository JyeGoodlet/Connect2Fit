using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace Connect2Fit.hubs
{
    public class ScheduleItemHub : Hub
    {
        public void HelloServer()
        {
            Clients.All.helloClient();
        }
    }
}