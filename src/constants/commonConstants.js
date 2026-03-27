export const ROUTES = {
  HOME: {
    name: "home",
    path: "/",
  },
  ABOUT: {
    name: "about",
    path: "/about",
  },
  SERVICES: {
    name: "services",
    path: "/services",
  },
  CONTACT: {
    name: "contact",
    path: "/contact",
  },
  SERVICES_CONTACT: {
    name: "services-contact",
    path: "/services-contact",
  },
  NOT_FOUND: {
    path: "/:pathMatch(.*)*",
  },
};

export const NAVIGATION_ITEMS = {
  HOME: {
    name: "home",
    label: "navbar.routes.home",
  },
  ABOUT: {
    name: "about",
    label: "navbar.routes.about",
  },
  // SERVICES: {
  //   name: "services",
  //   label: "navbar.routes.services",
  // },
  // CONTACT: {
  //   name: "contact",
  //   label: "navbar.routes.contact",
  // },
  SERVICES_CONTACT: {
    name: "services-contact",
    label: "navbar.routes.servicesAndContact",
  },
};
