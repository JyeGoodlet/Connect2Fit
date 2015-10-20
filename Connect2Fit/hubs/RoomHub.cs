using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;
using Connect2Fit.Models;
using Microsoft.AspNet.Identity;

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

        public void Sendpoint(string roomId, Dictionary<String, ClientPoint3D> point)
        {
            var clientId = Context.User.Identity.GetUserId();
            Clients.OthersInGroup(roomId).recievePoint(point, clientId);
        }
    }
}