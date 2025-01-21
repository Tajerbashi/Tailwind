app.controller("CalendarController", [
  "$scope",
  function ($scope) {
    // Sample events data
    $scope.enEvents = [
      {
        title: "Meeting",
        start: "2025-01-10T10:00:00",
        end: "2025-01-10T11:00:00",
      },
      {
        title: "Lunch with Sarah",
        start: "2025-01-15T12:00:00",
        end: "2025-01-15T13:00:00",
      },
      {
        title: "Conference Call",
        start: "2025-01-18T14:00:00",
        end: "2025-01-18T15:00:00",
      },
    ];
    // Initialize FullCalendar
    angular.element(document).ready(function () {
      $("#calendarEn").fullCalendar({
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,agendaWeek,agendaDay",
        },
        events: $scope.enEvents,
      });
    });

    // Sample events with Jalali dates
    $scope.events = [
      {
        title: "Meeting",
        start:
          moment("2025-01-10", "YYYY-MM-DD").format("jYYYY-jMM-jDD") +
          "T10:00:00",
        end:
          moment("2025-01-10", "YYYY-MM-DD").format("jYYYY-jMM-jDD") +
          "T11:00:00",
      },
      {
        title: "Lunch with Sarah",
        start:
          moment("2025-01-15", "YYYY-MM-DD").format("jYYYY-jMM-jDD") +
          "T12:00:00",
        end:
          moment("2025-01-15", "YYYY-MM-DD").format("jYYYY-jMM-jDD") +
          "T13:00:00",
      },
      {
        title: "Conference Call",
        start:
          moment("2025-01-18", "YYYY-MM-DD").format("jYYYY-jMM-jDD") +
          "T14:00:00",
        end:
          moment("2025-01-18", "YYYY-MM-DD").format("jYYYY-jMM-jDD") +
          "T15:00:00",
      },
    ];
    // Initialize FullCalendar with Persian Locale
    angular.element(document).ready(function () {
      $("#calendar").fullCalendar({
        locale: "fa", // Set Persian locale
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,agendaWeek,agendaDay",
        },
        events: $scope.events,
        eventRender: function (event, element) {
          // Convert Gregorian to Persian format for display
          var startDate = moment(event.start).format("jYYYY/jMM/jDD");
          var endDate = moment(event.end).format("jYYYY/jMM/jDD");
          element
            .find(".fc-title")
            .prepend("<br>Start: " + startDate + " - End: " + endDate);
        },
      });
    });
    // Initialize the calendar with fetched events
    angular.element(document).ready(function () {
      $("#calendar").fullCalendar("removeEvents"); // Clear previous events
      $("#calendar").fullCalendar("addEventSource", $scope.events); // Add new events
    });
  },
]);
