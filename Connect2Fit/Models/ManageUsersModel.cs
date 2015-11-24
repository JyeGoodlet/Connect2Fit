using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


//this modal is here mainly for the testing of signalr groups. 
//this can be removed at later date
namespace Connect2Fit.Models
{
    public class ManageUsersModel
    {
        public ManageUsersModel() { }

        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string RoleName { get; set; }

    }
}