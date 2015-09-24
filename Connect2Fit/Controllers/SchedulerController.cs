using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Connect2Fit.Controllers
{
    public class SchedulerController : Controller
    {
        // GET: Scheduler
        public ActionResult Index()
        {
            return RedirectToAction("Calendar", "Scheduler");
        }


        public ActionResult Calendar()
        {
            return View();
        }
    }
}