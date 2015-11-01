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

        public void send()
        {

            //var body = "<p>Email From: {0} ({1})</p><p>Message:</p><p>{2}</p>";
            //message.To.Add(new MailAddress("justinhart10+55f691ce64b0e7bdce586394+562c8ee6c93209d935c9f59d+89bf4c924ea07f3af7b7788263aabc14e1f86b19@boards.trello.com"));
            //message.To.Add(new MailAddress("justin.k.hart@gmail.com"));
            //message.From = new MailAddress("developers@connect2fit.com.au");
            //message.Body = string.Format(body, email.FromName, email.FromEmail, email.Message);


            // Creating the email and populating its details
            var message = new MailMessage();
            message.To.Add(new MailAddress(email.ToEmail));
            message.From = new MailAddress(email.FromEmail);
            message.Subject = email.Subject;
            message.Body = email.Message;
            message.IsBodyHtml = true;


            // SMTP Authentication details
            /*using (var smtp = new SmtpClient())
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
            }*/


            // Justins SMTP details
            using (var smtp = new SmtpClient())
            {
                var credential = new NetworkCredential
                {
                    UserName = "webmaster@connect2fit.com.au",  // replace with valid value
                    Password = "Connect2015"  // replace with valid value
                };
                smtp.Credentials = credential;
                smtp.Host = "mail.rathra.crabdance.com";
                smtp.Port = 25;
                smtp.EnableSsl = false;
                //await smtp.SendMailAsync(message);
                smtp.Send(message);
            }
            
        }
    }
}