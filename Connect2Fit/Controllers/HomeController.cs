using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Connect2Fit.Models;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Connect2Fit.Controllers
{
    public class HomeController : Controller
    {
        [Authorize(Roles = "Instructor,Client")]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Sent()
        {
            return View();
        }



        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if (ModelState.IsValid)
            {

                var body = "Email From:<br /> {0} ({1})<br /><br />Message:<br />{2}";

                EmailModel email = new EmailModel();
                email.FromEmail = "contactus@connect2fit.com.au";
                email.FromName = "Contact Us - Connect2Fit";
                email.ToEmail = "justin.k.hart@gmail.com";
                email.Subject = "Connect2Fit - Contact Us Notification";
                email.Message = string.Format(body, model.FromName, model.FromEmail, model.Message);
                Notification notification = new EmailNotification(email);

                notification.send();

                return RedirectToAction("Sent");

            }
            return View(model);
        }
    }
}