angular.module('schedule.commonFunctions', []).
   service('commonFunctions', function () {


       this.progressbarColor = function (classItem) {

           if (classItem.attendiesCount / classItem.maxAttendies * 100 <= 50) {
               return "progress-bar-success";
           }
           else if (classItem.attendiesCount / classItem.maxAttendies * 100 > 50 && classItem.attendiesCount / classItem.maxAttendies * 100 < 80) {
               return "progress-bar-warning";
           }
           else if (classItem.attendiesCount / classItem.maxAttendies * 100 >= 80) {
               return "progress-bar-danger";
           }
       }


       this.nearTime = function (date, time) {
           moment.locale('en-AU');
           classDateTime = moment(date + " " + time, "DD-MM-YYYY HH:mm A");
           if (classDateTime.isBetween(moment().subtract(1, 'hours'), moment().add(1, 'hours'))) {
               return true;
           }
           else {
               return false;
           }

       }



   })
