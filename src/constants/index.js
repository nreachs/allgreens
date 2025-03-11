import hero1 from "../assets/hero1.webp";
import sample1 from "../assets/sample1.webp";

import shop from "../assets/shop.webp";
import orderphone from "../assets/orderphone.webp";
import car from "../assets/car.webp";

export const LINKS = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Services",
    link: "services",
  },

  {
    name: "Contact",
    link: "contact",
  },
];

export const HERO_CONTENT = {
  title: "Allgreens",
  subtitle: "Bringing Local Freshness To Your Doorstep",
  image: hero1,
};

export const QUICK_MESSAGE =
  " Fruits, Vegetables, Herbs-Spices-Chilies, Animal Products, Local Fresh Food , ";

export const ABOUT_CONTENT = [
  {
    title: "Welcome at ",
    title2: "allgreens",
    description:
      "We are a socially conscious e-commerce platform that empowers rural and smallholder farmers by providing them with a stable market for their agricultural produce. Our mission is to bridge the gap between rural and smallholder farmers and consumers in cities, helping to promote sustainable agriculture and ensure food security and poverty reduction across Sub-Saharan Africa.",
    image: sample1,
    alt: "allgreens delivery team",
  },
];

export const SERVICES = [
  {
    id: 1,
    name: "In house",
    description:
      "We deliver only the best and consistent fresh produce at your doorstep. It is simple and convenient by only placing your order. We will source, clean, pack and deliver to your doorstep",
    image: shop,
    link: "#",
  },
  {
    id: 2,
    name: "Place order",
    description:
      "We deliver only the best and consistent fresh produce at your doorstep. It is simple and convenient by only placing your order. We will source, clean, pack and deliver to your doorstep",
    image: orderphone,
    link: "#",
  },
  {
    id: 3,
    name: "Home delivery",
    description:
      "We are the best choice for B2B Fresh produce marketplace because we are reliable and consistent. Connect with us, let's communicate and we deliver on one simple platform.",
    image: car,
    link: "#",
  },
];

export const CONTACT_INFO = {
  text: "If you have any inquiries or suggestions regarding the allgreens brand or our products, please don’t hesitate to contact us. We value and appreciate hearing from our customers.",
  phone: {
    label: "Phone",
    value: "0780 931 251",
  },
  email: {
    label: "Email",
    value: "info@allgreens.com",
  },
  address: {
    label: "Address",
    value: "KK St28 Kicukiro",
  },
};
