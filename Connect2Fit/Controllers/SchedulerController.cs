using Connect2Fit.helpers;
using Connect2Fit.hubs;
using Connect2Fit.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace Connect2Fit.Controllers
{
    public class SchedulerController : Controller
    {

        private ApplicationDbContext db;


        public SchedulerController()
        {
            db = new ApplicationDbContext();

        }



        // GET: Scheduler
        [Authorize(Roles = "Instructor,Client")]
        public ActionResult Index()
        {
            return RedirectToAction("Calendar", "Scheduler");
        }

        [Authorize(Roles = "Instructor,Client")]
        public ActionResult Calendar()
        {
            return View();
        }

        //changing from calendar based system to a 7 day list system
        [Authorize(Roles = "Instructor,Client")]
        public ActionResult Schedule()
        {
            return View();
        }



        //instead of having seperate functions for instructor and client i an instead going to have one controller and return a 
        //different view bad on if they are a client or instructor
        [Authorize(Roles = "Instructor,Client")]
        public ActionResult MyClasses(bool roomKick = false)
        {
            
                ViewBag.roomKick = roomKick;
            

            //Instructor role
            if (User.IsInRole("Instructor"))
            {
                return View("InstructorClasses");
            }
            else if (User.IsInRole("Client"))
            {
                return View("ClientClasses");
            }
            else
            {
                throw new HttpException("Role Not Found");
            }

            //client role
        }


        [Authorize(Roles = "Instructor")]
        public ActionResult ScheduleClass()
        {

            return PartialView();

        }


        [HttpPost]
        [Authorize(Roles = "Instructor")]
        public ActionResult ScheduleClass(ScheduleItem item)
        {

            //set instructor to be logged in user
            item.instructor = db.Users.Where(x => x.Email == User.Identity.Name).ToList()[0];
            if (ModelState.IsValid)
            {

                //signalR
                //signalR
                // Get the context for the Pusher hub
                Microsoft.AspNet.SignalR.IHubContext hubContext = Microsoft.AspNet.SignalR.GlobalHost.ConnectionManager.GetHubContext<ScheduleItemHub>();

                // Notify clients in the group
                hubContext.Clients.All.updateDataClient();


                db.scheduleItems.Add(item);
                db.SaveChanges();
            }

            return Redirect(ControllerContext.HttpContext.Request.UrlReferrer.ToString());
        }

        [HttpGet]
        [Authorize(Roles = "Instructor")]
        public JsonResult InstructorsClasses()
        {
            string instructorId = User.Identity.GetUserId();
            var yesterday = DateTime.Today.AddDays(-1);
            var items = (from item in db.scheduleItems
                        where (item.instructor.Id == instructorId && item.ClassDateTime > yesterday) 
                        select item).ToList();


            Dictionary<string, CalendarEvent> calEventItems = new Dictionary<string, CalendarEvent>();
            foreach (var item in items)
            {
                //check if class has ended
                if (item.sessionEnded == false && DateTime.Now.NowServerFix() > item.ClassDateTime.AddHours(1))
                {
                    item.sessionEnded = true;
                    db.Entry(item).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();

                }

                calEventItems.Add(item.id.ToString(), new CalendarEvent
                {
                    id = item.id,
                    orderDate = item.ClassDateTime.ToFileTimeUtc(),
                    date = item.ClassDateTime.ToShortDateString(),
                    time = item.ClassDateTime.ToShortTimeString(),
                    duration = item.sessionTime,
                    maxAttendies = item.maxAttendies,
                    title = item.ClassName,
                    instructor = item.instructor.Name,
                    attendiesCount = item.Clients.Count(),
                    sessionEnded = item.sessionEnded,
                    attendies = (from email in item.Clients
                                 select  email.Email ).ToArray()
                   
                });

            }

            //return them as a json object.
            return Json(calEventItems, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        [Authorize(Roles = "Instructor,Client")]
        public JsonResult ClientsClasses()
        {
            var clientId = User.Identity.GetUserId();
            /* var items = (from item in db.scheduleItems
                         where item.Clients.Contains(ClientId) == true
                         select item).ToList(); */
            var yesterday = DateTime.Today.AddDays(-1);
            var items = db.scheduleItems.Where(x => x.Clients.Select(c => c.Id).Contains(clientId) && x.ClassDateTime > yesterday ).ToList();

            Dictionary<string, CalendarEvent> calEventItems = new Dictionary<string, CalendarEvent>();
            foreach (var item in items)
            {
                //check if class has ended

                if (item.sessionEnded == false && DateTime.Now.NowServerFix() > item.ClassDateTime.AddHours(1))
                {
                    item.sessionEnded = true;
                    db.Entry(item).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();

                }

                calEventItems.Add(item.id.ToString(), new CalendarEvent
                {
                    id = item.id,
                    orderDate = item.ClassDateTime.ToFileTimeUtc(),
                    date = item.ClassDateTime.ToShortDateString(),
                    time = item.ClassDateTime.ToShortTimeString(),
                    duration = item.sessionTime,
                    maxAttendies = item.maxAttendies,
                    title = item.ClassName,
                    instructor = item.instructor.Name,
                    attendiesCount = item.Clients.Count(),
                    sessionEnded = item.sessionEnded,
                    LoggedInUserAttending = item.Clients.Contains(db.Users.Find(User.Identity.GetUserId()))
                });

            }

            //return them as a json object.
            return Json(calEventItems, JsonRequestBehavior.AllowGet);
        }



        [HttpGet]
        [Authorize(Roles = "Instructor,Client")]
        public JsonResult ScheduledClasses(DateTime day)
        {

            //get all scheduled Classes in date range from the database
            var items = (from item in db.scheduleItems
                        where (EntityFunctions.TruncateTime(item.ClassDateTime)  == day.Date)
                        select item).ToList();

            //create CalandarEvent Items
            //List<CalendarEvent> calEventItems = new List<CalendarEvent>();
            Dictionary<string, CalendarEvent> calEventItems = new Dictionary<string, CalendarEvent>();
            foreach (var item in items)
            {
                //check if class has ended
                if (item.sessionEnded == false && DateTime.Now.NowServerFix() > item.ClassDateTime.AddHours(1))
                {
                    item.sessionEnded = true;
                    db.Entry(item).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();

                }
                calEventItems.Add(item.id.ToString(), new CalendarEvent
                {
                    id = item.id,
                    date = item.ClassDateTime.ToShortDateString(),
                    time = item.ClassDateTime.ToShortTimeString(),
                    duration = item.sessionTime,
                    maxAttendies = item.maxAttendies,
                    title = item.ClassName,
                    instructor = item.instructor.Name,
                    sessionEnded = item.sessionEnded,
                    attendiesCount = item.Clients.Count(),
                    LoggedInUserAttending = item.Clients.Contains(db.Users.Find(User.Identity.GetUserId()))
                });

            }



            //return them as a json object.
            return Json(calEventItems, JsonRequestBehavior.AllowGet);

        }

        //book a class
        [HttpPost]
        [Authorize(Roles = "Instructor,Client")]
        public JsonResult classEventJoin(CalendarEvent classEvent)
        {
            //check if user is logged in
            if (!User.Identity.IsAuthenticated)
            {
                return Json(new {message = "Error: User Not Logged In" });
            }

            //get class from database
            var classX = db.scheduleItems.Find(classEvent.id);


            //check if user is already in class
            if (classX.Clients.Any(x => x.Id == User.Identity.GetUserId() ))
            {
                return Json(new { message = "Error: Already Attending Class" });
            }

            //check if class is full
            if (classX.Clients.Count == classX.maxAttendies)
            {
                return Json(new { message = "Error: Class Full" });

            }


            //TODO: check if instructor didnt try to book the class
            

            //if everything is ok book the the class
            classX.Clients.Add(db.Users.Find(User.Identity.GetUserId()));
            db.Entry(classX).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();



            return Json(new { message = "success" });
        }


        [HttpPost]
        [Authorize(Roles = "Instructor")]
        public JsonResult DeleteClass(int id)
        {
            if (!User.Identity.IsAuthenticated)
            {
                return Json(new { message = "Error: User Not Logged In" });
            }
            var classX = db.scheduleItems.Where(x => x.id == id).FirstOrDefault();

            //check if logged in user is owner of class
            if (classX.instructor.Email == User.Identity.Name)
            {

                //TODO send notication (email)
                foreach(var attendee in classX.Clients)
                {
                    EmailModel email = new EmailModel();
                    email.FromEmail = "classes@connect2fit.com.au";
                    email.FromName = "Connect2Fit - Classes";
                    email.ToEmail = "justinhart10+55f691ce64b0e7bdce586394+562c8ee6c93209d935c9f59d+89bf4c924ea07f3af7b7788263aabc14e1f86b19@boards.trello.com";
                    email.Subject = "Connect2Fit - Class Cancelled";
                    email.Message = string.Format("Sorry {0}!<br /> Class <b>{1}</b> on {2} {3} has been Cancelled.", attendee.Name, classX.ClassName, classX.ClassDateTime.ToShortDateString(), classX.ClassDateTime.ToShortTimeString() );

                    Notification notification = new EmailNotification(email);

                    notification.send();
                }

                db.Entry(classX).State = System.Data.Entity.EntityState.Deleted;
                db.SaveChanges();
                return Json(new { message = "Error: Deleted" });

            }

            else
            {
                return Json(new { message = "Error: User Does not have Right to delete this class" });
            }



        }
       
        [HttpPost]
        [Authorize(Roles = "Instructor,Client")]
        public JsonResult classEventLeave(CalendarEvent classEvent)
        {
            //check if user is logged in
            if (!User.Identity.IsAuthenticated)
            {
                return Json(new { message = "Error: User Not Logged In" });
            }

            //get class from database
            var classX = db.scheduleItems.Find(classEvent.id);


            //check if user is in class
            if (classX.Clients.Any(x => x.Id == User.Identity.GetUserId()))
            {
                //delete user
                classX.Clients.Remove(db.Users.Find(User.Identity.GetUserId()));
                db.Entry(classX).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();

                return Json(new { message = "success" });
            }
            else
            {

                return Json(new { message = "Error: User not in class" });
            }
        }


        //
        // GET: /Account/ManageUsers
        [Authorize(Roles = "Administrator")]
        public ActionResult ManageClasses(int pageNumber = 1)
        {
            if (User.IsInRole("Administrator"))
            {
                var classes = db.scheduleItems;

                const int PageSize = 16;
                ViewBag.PageNumber = pageNumber;
                ViewBag.PageSize = PageSize;
                return View(classes);
            }
            else
            {
                return RedirectToAction("Calendar", "Scheduler");

            }
        }

        //
        // GET: /Account/EditClasses
        public ActionResult EditClasses(string ClassId)
        {
            var classX = db.scheduleItems.Find(int.Parse(ClassId));
            var users = db.Users.ToList();
            var roles = db.Roles.ToList();

            var instructorList = new List<ApplicationUser>();
            foreach(var role in roles)
            {
                if(role.Name == "Instructor")
                {
                    foreach(var user in users)
                    {
                        foreach(var r in user.Roles)
                        {
                            if (r.RoleId == role.Id)
                                instructorList.Add(user);
                        }
                    }
                }
            }

            ViewBag.Instructors = instructorList;//new SelectList(instructorList,"value", "text");
            return View(classX);
        }


        //
        // POST: /Account/EditClasses
        [HttpPost]      
        public ActionResult EditClasses(ScheduleItem item)
        {
            if (ModelState.IsValid)
            {
                var classX = db.scheduleItems.Find(item.id);
                classX.id               = item.id;
                classX.ClassDateTime    = item.ClassDateTime;
                classX.instructor       = db.Users.Find(item.instructor.Id);
                classX.ClassName        = item.ClassName;
                classX.maxAttendies     = item.maxAttendies;
                classX.sessionTime      = item.sessionTime;
                classX.sessionEnded     = item.sessionEnded;
                classX.Clients          = item.Clients;

                db.SaveChanges();

                return RedirectToAction("ManageClasses", "Scheduler");
            }
            return RedirectToAction("ManageClasses", "Scheduler");
        }


        //
        // GET: /Account/DeleteClasses
        public ActionResult DeleteClasses(string ClassId)
        {
            var classX = db.scheduleItems.Find(int.Parse(ClassId));
            return View(classX);
        }

        //
        // POST: /Account/DeleteClasses
        [HttpPost]
        public ActionResult DeleteClasses(ScheduleItem item)
        {
            if (ModelState.IsValid)
            {
                var classX = db.scheduleItems.Find(item.id);
                db.scheduleItems.Remove(classX);
                db.SaveChanges();
                return RedirectToAction("ManageClasses", "Scheduler");
            }
            return RedirectToAction("ManageClasses", "Scheduler");
        }


    }
}