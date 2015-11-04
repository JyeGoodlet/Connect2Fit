using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace Connect2Fit.Models
{
    public class EmailModel
    { 
        [Required (ErrorMessage = "Please enter your name")]
        [Display(Name = "Name")]
        public string FromName { get; set; }

        //[Required, Display(Name = "Email"), EmailAddress]
        [Required (ErrorMessage = "Please enter your email address.")]
        [Display (Name = "Email")]
        [EmailAddress]
        public string FromEmail { get; set; }

        public string ToEmail { get; set; }
        public string Subject { get; set; }

        [Required(ErrorMessage = "Please enter your message.")]
        public string Message { get; set; }
    }
}