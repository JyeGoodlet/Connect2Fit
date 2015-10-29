using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;

namespace Connect2Fit.Models
{
    public class EmailNotification : Notification
    {

        public EmailModel email { get; set; }


        public EmailNotification(EmailModel email)
        {
            this.email = email;
        }


        public  void send()
        {


            var body = "<p>Email From: {0} ({1})</p><p>Message:</p><p>{2}</p>";
            var message = new MailMessage();
            message.To.Add(new MailAddress("justinhart10+55f691ce64b0e7bdce586394+562c8ee6c93209d935c9f59d+89bf4c924ea07f3af7b7788263aabc14e1f86b19@boards.trello.com"));
            message.From = new MailAddress("developers@connect2fit.com.au");
            message.Subject = "Test Notification Email";
            message.Body = string.Format(body, email.FromName, email.FromEmail, email.Message);
            message.IsBodyHtml = true;

            using (var smtp = new SmtpClient())
            {
                var credential = new NetworkCredential
                {
                    UserName = "jye.goodlet@gmail.com",  // replace with valid value
                    Password = "FHmB3iHzFNQ6S8no4HIT3A"  // replace with valid value
                };
                smtp.Credentials = credential;
                smtp.Host = "smtp.mandrillapp.com";
                smtp.Port = 587;
                smtp.EnableSsl = true;
                //smtp.SendMailAsync(message);
                smtp.Send(message);

         
             
            }


        }

    }
}