app.directive("dynamicCalendar", function ($document) {
  return {
    restrict: "E",
    scope: {},
    templateUrl: "../../app/shared/directives/dynamicCalendar.template.html", // Point to the external HTML file
    link: function (scope, element) {
      // Full Calendar Configuration
      scope.fullCalendar = {
        year: {
          value: 2025, // Default year
          months: [
            { title: "January", value: 1 },
            { title: "February", value: 2 },
            { title: "March", value: 3 },
            { title: "April", value: 4 },
            { title: "May", value: 5 },
            { title: "June", value: 6 },
            { title: "July", value: 7 },
            { title: "August", value: 8 },
            { title: "September", value: 9 },
            { title: "October", value: 10 },
            { title: "November", value: 11 },
            { title: "December", value: 12 },
          ],
          currentMonthIndex: 0, // Track the current month index
          currentMonth: function () {
            return this.months[this.currentMonthIndex];
          },
          // Days in month logic (including leap year handling)
          daysInMonth: function (month) {
            const daysInMonths = [
              31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
            ];
            if (month === 2 && this.isLeapYear()) return 29; // Leap year for February
            return daysInMonths[month - 1];
          },
          isLeapYear: function () {
            const year = this.value;
            return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
          },
        },

        // Render the calendar HTML for the current month
        renderCalendar: function () {
          const calendar = scope.fullCalendar;
          const currentMonth = calendar.year.currentMonth();
          const monthValue = currentMonth.value;
          const monthName = currentMonth.title;
          const daysInMonth = calendar.year.daysInMonth(monthValue);

          // Get the first day of the month (Sunday-Saturday)
          let firstDay = moment(
            `${calendar.year.value}-${monthValue}-01`
          ).day(); // First day of the month
          let dayCounter = 1;

          // Prepare an array to store weeks and days
          let renderedCalendar = [];

          // Create table rows for the days of the month
          for (let i = 0; i < 6; i++) {
            let week = [];

            // Loop through each day of the week
            for (let j = 0; j < 7; j++) {
              if (i === 0 && j < firstDay) {
                week.push(null); // Empty cells before the start of the month
              } else if (dayCounter <= daysInMonth) {
                week.push(dayCounter); // Render day
                dayCounter++;
              } else {
                week.push(null); // Empty cells after the end of the month
              }
            }

            renderedCalendar.push(week);

            if (dayCounter > daysInMonth) break;
          }

          // Assign the rendered calendar to the scope for HTML rendering
          scope.fullCalendar.renderedCalendar = renderedCalendar;
        },

        // Navigation functions for the "Previous" and "Next" buttons
        nextMonth: function () {
          console.log("nextMonth");
          const calendar = scope.fullCalendar;
          if (calendar.currentMonthIndex < calendar.months.length - 1) {
            calendar.currentMonthIndex++;
          } else {
            calendar.currentMonthIndex = 0; // Go to January next year
            calendar.year.value++;
          }
          this.renderCalendar(); // Re-render after updating the month
        },

        previousMonth: function () {
          console.log("previousMonth");
          const calendar = scope.fullCalendar;
          if (calendar.year.currentMonthIndex > 0) {
            calendar.year.currentMonthIndex--;
          } else {
            calendar.year.currentMonthIndex = calendar.months.length - 1; // Go to December previous year
            calendar.year.value--;
          }
          this.renderCalendar(); // Re-render after updating the month
        },

        // Event Click (for individual day click)
        eventClick: function (day, $event) {
          $event.preventDefault();
          $event.stopPropagation();
          console.log("Clicked on day:", $event);
          const td = $event.target;
          if (td.tagName == "TD") {
            angular.element(td).toggleClass("selected");
          }
        },

        // Show custom context menu on right-click
        showContextMenu: function ($event, day) {
          console.log("$event ,", $event);
          $event.preventDefault();
          $event.stopPropagation();
          console.log("$event ,", $event);

          // Set menu position
          scope.menuStyle = {
            top: $event.clientY + "px",
            left: $event.clientX + "px",
          };

          // Show the context menu
          scope.showMenu = true;

          // Store the day data in scope for event handling
          scope.selectedDay = day;
        },

        // Action handlers for context menu options
        newEvent: function () {
          console.log("New Event clicked for day:", scope.selectedDay);
          scope.showMenu = false; // Hide menu after action
        },

        updateEvent: function () {
          console.log("Update Event clicked for day:", scope.selectedDay);
          scope.showMenu = false;
        },

        newAppointment: function () {
          console.log("New Appointment clicked for day:", scope.selectedDay);
          scope.showMenu = false;
        },
      };

      // Initial calendar rendering
      scope.fullCalendar.renderCalendar();

      // Make navigation functions available to the scope
      scope.nextMonth = function () {
        console.log("nextMonth");
        scope.fullCalendar.nextMonth();
      };
      scope.previousMonth = function () {
        console.log("previousMonth");
        scope.fullCalendar.previousMonth();
      };

      scope.eventClick = function (day, $event) {
        console.log("eventClick", day, $event);
        scope.fullCalendar.eventClick(day, $event);
      };

      // Event click handler
      scope.eventClick = function (day, $event) {
        console.log("eventClick", day, $event);
        scope.fullCalendar.eventClick(day, $event);
      };

      // Disable right-click on <td> elements and show the custom context menu
      element.on("contextmenu", "td", function (event) {
        event.preventDefault(); // Prevent default right-click menu
        console.log("event = ", event);

        // Show the custom context menu
        const td = event.target;
        if (td.tagName == "TD") {
          scope.fullCalendar.showContextMenu(event, td.innerText);
        }
        scope.showMenu = true;
        console.log("scope.showMenu = ", scope.showMenu);
      });

      // Hide context menu when clicking outside
      $document.on("click", function () {
        console.log("123");
        scope.$apply(function () {
          scope.showMenu = false;
        });
      });
    },
  };
});
