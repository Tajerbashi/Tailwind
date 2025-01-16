app.directive("appHeader", function ($location, AuthService) {
  return {
    restrict: "E", // Restrict it to be used as an element
    templateUrl: "app/directives/header/header.template.html",
    link: function (scope) {
      // Check if the CSS file is already added
      const existingLink = document.querySelector(
        'link[href="app/directives/header/header.style.css"]'
      );
      if (!existingLink) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "app/directives/header/header.style.css";
        document.head.appendChild(link);
      }
      signOut = () => {};
      scope.setting = [
        { title: "Profile", link: "#!/profile", icon: "" },
        { title: "Setting", link: "#!/setting", icon: "" },
        { title: "Posts", link: "#!/posts", icon: "" },
        { title: "Messages", link: "#!/messages", icon: "" },
      ];
      scope.menus = [
        { title: "Dashboard", link: "#!/", icon: "" },
        { title: "Company", link: "#!/company", icon: "" },
        { title: "Team", link: "#!/team", icon: "" },
        { title: "Projects", link: "#!/projects", icon: "" },
        { title: "Calendar", link: "#!/calendar", icon: "" },
        { title: "About Me", link: "#!/about-me", icon: "" },
        { title: "Explore", link: "#!/explore", icon: "" },
      ];

      var auth = new AuthService();
      scope.username = "";
      scope.visible = false;
      scope.mobileMenu = true;
      var info = auth.currentUserInfo();

      if (info && info.username) {
        scope.username = info.username;
        scope.visible = true;
      } else {
        scope.username = "کاربر یافت نشده است";
        scope.visible = false;
      }
      scope.logout = () => auth.logout();
      scope.mobileMenuToggle = () => {
        scope.mobileMenu = !scope.mobileMenu;
      };
      scope.changeMenu = () => {
        scope.isMobileMenuOpen = !scope.isMobileMenuOpen;
      };
    },
  };
});
