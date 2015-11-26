using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;
using Connect2Fit.Models;
using Microsoft.AspNet.Identity;
using System.Threading;

namespace Connect2Fit.hubs
{
    public class RoomHub : Hub
    {


        public Task JoinRoom(string roomId)
        {
            var test = Context.ConnectionId;
            return Groups.Add(Context.ConnectionId, roomId);
        }
        public Task LeaveRoom(string roomId)
        {
            return Groups.Remove(Context.ConnectionId, roomId);
        }

        public void message(string roomId, Message message)
        {
            Clients.OthersInGroup(roomId).message(message);
            //Clients.Others.message(message);

        }

        public void endClass(string roomId)
        {


          

            //notify about room closing
            Clients.OthersInGroup(roomId).endClassNotify();

            

            //wait 5 minutes then send a end class signal
            Thread.Sleep(5 * 60 * 1000);
            Clients.Group(roomId).endClass();
        }

        public void Sendpoint(string roomId, Dictionary<String, ClientPoint3D> point)
        {
            var clientId = Context.User.Identity.GetUserId();
            Clients.OthersInGroup(roomId).recievePoint(point, clientId);
        }
    }
}