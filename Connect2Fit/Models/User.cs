using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Connect2Fit.Models
{
    public class User
    {

        public int id { get; set; }

        //can use as username
        [Required]
        [Display(Name="Email Address")]
        [DataType(DataType.EmailAddress)]
        public string emailAddress { get; set; }

        [Required]
        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        public string password { get; set; }


        public UserType userType { get; set; }



    }
}