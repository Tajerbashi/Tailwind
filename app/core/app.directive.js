console.log("App.Directive.js Run ...", app);
app.directive("appHeader", function () {
  return {
    restrict: "E", // Restrict it to be used as an element
    template: `
          <header class="bg-gray-800 text-white py-4">
            <div class="container mx-auto px-4">
              <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold">My AngularJS App</h1>
                <nav>
                  <ul class="flex space-x-4">
                    <li><a href="#!/" class="text-white hover:underline">Home</a></li>
                    <li><a href="#!/about" class="text-white hover:underline">About</a></li>
                    <li><a href="#!/contact" class="text-white hover:underline">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        `,
  };
});

app.directive("appFooter", function () {
  return {
    restrict: "E", // Restrict it to be used as an element
    template: `
        <footer class="bg-gray-800 text-white py-4 ">
          <div class="container mx-auto px-4 text-center">
            <p class="text-sm">&copy; 2025 My AngularJS App. All rights reserved.</p>
            <nav class="mt-2">
              <ul class="flex justify-center space-x-4">
                <li><a href="#/" class="text-white hover:underline">Home</a></li>
                <li><a href="#/about" class="text-white hover:underline">About</a></li>
                <li><a href="#/contact" class="text-white hover:underline">Contact</a></li>
                <li><a href="#/privacy" class="text-white hover:underline">Privacy Policy</a></li>
              </ul>
            </nav>
          </div>
        </footer>
      `,
  };
});
