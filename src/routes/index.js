import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import News from "../pages/News";
export const routePaths = {
  company: "/company",
  projects: "/projects",
  news: "/news",
  about: "/about",
  contact: "/contact"
};

// export const authRoutes = [
//   {
//     title: "Dashboard",
//     path: routePaths.dashboard,
//     url: routePaths.dashboard,
//     exact: true,
//     main: Dashboard
//   },
//   {
//     title: "Home",
//     path: "*",
//     url: "*",
//     exact: true,
//     main: Dashboard
//   } // eslint-disable-line
// ];

export const unAuthRoutes = [
  {
    title: "Company",
    path: routePaths.company,
    url: routePaths.company,
    exact: true,
    main: Dashboard
  },
  {
    title: "Project",
    path: routePaths.projects,
    url: routePaths.projects,
    exact: true,
    main: Projects
  },
  {
    title: "News",
    path: routePaths.news,
    url: routePaths.news,
    exact: true,
    main: News
  },
  {
    title: "About",
    path: routePaths.about,
    url: routePaths.about,
    exact: true,
    main: About
  },
  {
    title: "Contact",
    path: routePaths.contact,
    url: routePaths.contact,
    exact: true,
    main: Contact
  },
  {
    title: "Home",
    path: "*",
    url: "*",
    exact: true,
    main: Dashboard
  }, // eslint-disable-line
];
