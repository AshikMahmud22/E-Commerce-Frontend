import { MenuItem } from "./types";

export const menu: MenuItem[] = [
  {
    id: "men",
    title: "Men",
    featured: true,
    children: [
      {
        id: "men-tshirts",
        title: "T-Shirts",
        href: "/products/men/t-shirts",
      },
      {
        id: "men-shirts",
        title: "Shirts",
        href: "/products/men/shirts",
      },
      {
        id: "men-pants",
        title: "Pants",
        href: "/products/men/pants",
      },
      {
        id: "men-jeans",
        title: "Jeans",
        href: "/products/men/jeans",
      },
      {
        id: "men-shoes",
        title: "Shoes",
        href: "/products/men/shoes",
      },
      {
        id: "men-jackets",
        title: "Jackets",
        href: "/products/men/jackets",
      },
      {
        id: "men-hoodies",
        title: "Hoodies",
        href: "/products/men/hoodies",
      },
      {
        id: "men-accessories",
        title: "Accessories",
        href: "/products/men/accessories",
      },
    ],
  },

  {
    id: "women",
    title: "Women",
    featured: true,
    children: [
      {
        id: "women-dresses",
        title: "Dresses",
        href: "/products/women/dresses",
      },
      {
        id: "women-tops",
        title: "Tops",
        href: "/products/women/tops",
      },
      {
        id: "women-jeans",
        title: "Jeans",
        href: "/products/women/jeans",
      },
      {
        id: "women-shoes",
        title: "Shoes",
        href: "/products/women/shoes",
      },
      {
        id: "women-bags",
        title: "Bags",
        href: "/products/women/bags",
      },
      {
        id: "women-accessories",
        title: "Accessories",
        href: "/products/women/accessories",
      },
    ],
  },

  {
    id: "kids",
    title: "Kid's",
    children: [
      {
        id: "kids-boys",
        title: "Boys",
        href: "/products/kids/boys",
      },
      {
        id: "kids-girls",
        title: "Girls",
        href: "/products/kids/girls",
      },
      {
        id: "kids-shoes",
        title: "Shoes",
        href: "/products/kids/shoes",
      },
      {
        id: "kids-toys",
        title: "Toys",
        href: "/products/kids/toys",
      },
    ],
  },

  {
    id: "sports",
    title: "Sports",
    children: [
      {
        id: "sports-football",
        title: "Football",
        href: "/products/sports/football",
      },
      {
        id: "sports-cricket",
        title: "Cricket",
        href: "/products/sports/cricket",
      },
      {
        id: "sports-running",
        title: "Running",
        href: "/products/sports/running",
      },
      {
        id: "sports-gym",
        title: "Gym",
        href: "/products/sports/gym",
      },
    ],
  },
];