﻿using Connect2Fit.hubs;
using Connect2Fit.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
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
        public ActionResult Index()
        {
            return RedirectToAction("Calendar", "Scheduler");
        }


        public ActionResult Calendar()
        {
            return View();
        }

        //changing from calendar based system to a 7 day list system
        public ActionResult Schedule()
        {
            return View();
        }



        //instead of having seperate functions for instructor and client i an instead going to have one controller and return a 
        //different view bad on if they are a client or instructor
        [Authorize(Roles = "Instructor,Client")]
        public ActionResult MyClasses()
        {
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
            var items = (from item in db.scheduleItems
                        where (item.instructor.Id == instructorId)
                        select item).ToList();


            Dictionary<string, CalendarEvent> calEventItems = new Dictionary<string, CalendarEvent>();
            foreach (var item in items)
            {
                calEventItems.Add(item.id.ToString(), new CalendarEvent
                {
                    id = item.id,
                    time = item.ClassDateTime.ToShortTimeString(),
                    duration = item.sessionTime,
                    maxAttendies = item.maxAttendies,
                    title = item.ClassName,
                    instructor = item.instructor.Name,
                    attendiesCount = item.ApplicationUsers.Count(),
                    attendies = (from email in item.ApplicationUsers
                                 select  email.Email ).ToArray()
                   
                });

            }

            //return them as a json object.
            return Json(calEventItems, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult ClientsClasses()
        {
            var clientId = User.Identity.GetUserId();
            /* var items = (from item in db.scheduleItems
                         where item.ApplicationUsers.Contains(ClientId) == true
                         select item).ToList(); */
            var items = db.scheduleItems.Where(x => x.ApplicationUsers.Select(c => c.Id).Contains(clientId)).ToList();

            Dictionary<string, CalendarEvent> calEventItems = new Dictionary<string, CalendarEvent>();
            foreach (var item in items)
            {
                calEventItems.Add(item.id.ToString(), new CalendarEvent
                {
                    id = item.id,
                    time = item.ClassDateTime.ToShortTimeString(),
                    duration = item.sessionTime,
                    maxAttendies = item.maxAttendies,
                    title = item.ClassName,
                    instructor = item.instructor.Name,
                    attendiesCount = item.ApplicationUsers.Count(),
                    LoggedInUserAttending = item.ApplicationUsers.Contains(db.Users.Find(User.Identity.GetUserId()))
                });

            }

            //return them as a json object.
            return Json(calEventItems, JsonRequestBehavior.AllowGet);
        }



        [HttpGet]
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
                calEventItems.Add(item.id.ToString(), new CalendarEvent{ id = item.id, time = item.ClassDateTime.ToShortTimeString(), duration = item.sessionTime, maxAttendies = item.maxAttendies,
                    title = item.ClassName, instructor = item.instructor.Name, attendiesCount = item.ApplicationUsers.Count(), LoggedInUserAttending = item.ApplicationUsers.Contains(db.Users.Find(User.Identity.GetUserId())) });

            }



            //return them as a json object.
            return Json(calEventItems, JsonRequestBehavior.AllowGet);

        }

        //book a class
        [HttpPost]
        public JsonResult classEvent(CalendarEvent classEvent)
        {
            //check if user is logged in
            if (!User.Identity.IsAuthenticated)
            {
                return Json(new {message = "Error: User Not Logged In" });
            }

            //get class from database
            var classX = db.scheduleItems.Find(classEvent.id);


            //check if user is already in class
            if (classX.ApplicationUsers.Any(x => x.Id == User.Identity.GetUserId() ))
            {
                return Json(new { message = "Error: Already Attending Class" });
            }

            //check if class is full
            if (classX.ApplicationUsers.Count == classX.maxAttendies)
            {
                return Json(new { message = "Error: Class Full" });

            }


            //TODO: check if instructor didnt try to book the class
            

            //if everything is ok book the the class
            classX.ApplicationUsers.Add(db.Users.Find(User.Identity.GetUserId()));
            db.Entry(classX).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();



            return Json(new { message = "success" });
        }


       
        [HttpPost]
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
            if (classX.ApplicationUsers.Any(x => x.Id == User.Identity.GetUserId()))
            {
                //delete user
                classX.ApplicationUsers.Remove(db.Users.Find(User.Identity.GetUserId()));
                db.Entry(classX).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();

                return Json(new { message = "success" });
            }
            else
            {

                return Json(new { message = "Error: User not in class" });
            }


           


            
        }



    }
}