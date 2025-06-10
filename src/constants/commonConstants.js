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
  SERVICES: {
    name: "services",
    label: "navbar.routes.services",
  },
  CONTACT: {
    name: "contact",
    label: "navbar.routes.contact",
  },
};

export const SERVICE_ITEMS = [
  {
    index: 1,
    value: "item_one",
  },
  {
    index: 2,
    value: "item_two",
  },
  {
    index: 3,
    value: "item_three",
  },
  {
    index: 4,
    value: "item_four",
  },
];

export const CRITICS_ITEMS = [
  {
    value: "critic_one",
  },
  {
    value: "critic_two",
  },
  {
    value: "critic_three",
  },
];

export const LOCATIONS_ITEMS = [
  {
    value: "location_one",
  },
  // {
  //   value: "location_two",
  // },
];

export const FAQlength = 6;
