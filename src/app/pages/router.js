const pagesRouter = [
  {
    path: "/home",
    templateUrl: "home.view.html", // the path to the template
  },
  {
    path: "/about",
    templateUrl: "about.view.html", // the path to the template
  },
  {
    path: "/settings",
    templateUrl: "settings.view.html", // the path to the template
  },
  {
    path: "/logout",
    templateUrl: "logout.view.html", // the path to the template
  },
];

export const Print = () => {
  console.log(pagesRouter);
};

export default pagesRouter;
