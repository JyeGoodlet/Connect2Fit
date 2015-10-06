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

        [Range(1, 5,
            ErrorMessage = "Max Attendies must be between 1 and 5")]
        [Display(Name = "Max Attendies")]
        public int maxAttendies { get; set; }

        //just using a string here for now
        [Display(Name = "Session Time")]
        public string sessionTime { get; set; }

        public virtual ICollection<ApplicationUser> ApplicationUsers { get; set; }

    }
}