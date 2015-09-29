using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Connect2Fit.Models
{
    public class ScheduleItem
    {
        public int id { get; set; }

        [Required]
        [Display(Name = "Class Name")]
        public string ClassName { get; set; }

        public virtual ApplicationUser instructor { get; set; }

        [Required]
        [Display(Name = "Class Date and Time")]
        public DateTime ClassDateTime { get; set; }


        public virtual List<ApplicationUser> Attendies { get; set; }

    }
}