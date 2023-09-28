import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
export const pageLinks = [
  { id: "1", href: "#home", text: "home" },
  { id: "2", href: "#about", text: "about" },
  { id: "3", href: "#services", text: "services" },
  { id: "4", href: "#tours", text: "tours" },
];
export const socialLinks = [
  { id: "1", href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: "2", href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: "3", href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit/.\
           Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-wallet fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit/.\
           Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-wallet fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit/.\
           Asperiores, officia.",
  },
];
export const tours = [
  {
    id: 1,
    src: tour1,
    date: "october 11th 2020",
    tourInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    title: "Tibet Adventure",
    country: "china",
    duration: "6 days",
    cost: "from $2100",
  },
  {
    id: 2,
    src: tour2,
    date: "october 11th 2020",
    tourInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    title: "best of java",
    country: "indonesia",
    duration: "11 days",
    cost: "from $1400",
  },
  {
    id: 3,
    src: tour3,
    date: "october 11th 2020",
    tourInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    title: "hong kong",
    country: "hong kong",
    duration: "8 days",
    cost: "from $1500",
  },
  {
    id: 4,
    src: tour4,
    date: "october 11th 2020",
    tourInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    title: "hong kong",
    country: "kenya",
    duration: "20 days",
    cost: "from $3300",
  },
];
