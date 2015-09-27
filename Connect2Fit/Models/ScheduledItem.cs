using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Connect2Fit.Models
{
    public class ScheduleItem
    {
        public int id { get; set; }

        public ApplicationUser instructor { get; set; }

        public DateTime ClassDateTime { get; set; }

    }
}