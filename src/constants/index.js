import {
  locations01,
  locations02,
  locations03,
  locations04,
  tour01,
  package01,
  package02,
  package03,
  review01,
  blogs01,
  blogs02,
} from "../assets/images";

import {
  search,
  sms,
  flash,
  explore,
  facebook,
  instagram,
  twitter,
} from "../assets/icons";

export const statistics = [
  { value: "12M+", label: "Total Customers" },
  { value: "08+", label: "Years Of Experience" },
  { value: "16k", label: "Total Destinations" },
  { value: "5.0", label: "Average Rating" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#locations", label: "Services" },
  { href: "#tour", label: "Tour" },
  { href: "#packages", label: "About" },
  { href: "#reviews", label: "Contact" },
];

export const locations = [
  {
    imgURL: locations01,
    label: "image01",
    location: "Chiang Mai, Thailand",
    tour: "Doi Suthep Temple Tour",
  },
  {
    imgURL: locations02,
    label: "image02",
    location: "Phuket, Thailand",
    tour: "Phuket Island Adventures",
  },
  {
    imgURL: locations03,
    label: "image03",
    location: "Bangkok, Thailand",
    tour: "Grand Palace and Temples Tour",
  },
  {
    imgURL: locations04,
    label: "image04",
    location: "Pattaya, Thailand",
    tour: "Coral Island Excursion",
  },
];

export const tourGuide = [
  {
    iconURL: search,
    label: "icon1",
    text: "Choose Your Trip",
    subtext:
      "Set your sights on the perfect getaway, where excitement and tranquility come together.",
  },
  {
    iconURL: sms,
    label: "icon2",
    text: "Secure a Booking",
    subtext:
      "Lock in your plans for an unforgettable journey filled with captivating experiences.",
  },
  {
    iconURL: flash,
    label: "icon3",
    text: "Finalize Payment",
    subtext:
      "Easily confirm your trip with hassle-free payment, giving you confidence and ease.",
  },
  {
    iconURL: explore,
    label: "icon4",
    text: "Discover Locations",
    subtext:
      "Unveil unique treasures and popular destinations, where relaxation and excitement meet.",
  },
];

export const tourImageDetails = {
  image: tour01,
  label: "Tour Image",
  text: "Start your journey to uncover your dream destination where excitement and serenity meet, crafting lasting memories along the way.",
};

export const packageDetails = [
    {
      image: package01,
      label: "package01",
      rating: "4.8",
      dayCount: "8 Days",
      dateRange: "1 September - 8 September",
      packageName: "Phuket Tour",
      price: "$320",
    },
    {
      image: package02,
      label: "package02",
      rating: "4.7",
      dayCount: "6 Days",
      dateRange: "5 September - 10 September",
      packageName: "Sumatra Tour",
      price: "$250",
    },
    {
      image: package03,
      label: "package03",
      rating: "4.9",
      dayCount: "4 Days",
      dateRange: "12 September - 15 September",
      packageName: "Kuala Lumpur",
      price: "$190",
    },
  ];
  

export const reviews = [
  {
    image: review01,
    label: "review01",
    name: "John Doe",
    position: "Founder Innovate Solutions",
    description:
      "This travel website is very user-friendly and informative. I appreciate how they showcase different destinations and travel packages with clear details. The pictures and descriptions help me decide where to go. Additionally, the option to compare prices and reviews from other users is extremely useful for making a decision.",
  },
];

export const blogs = [
    {
      image: blogs01,
      label: "blogs01",
      date: "Dec 1, 2023",
      text: "Top Travel Destinations to Visit in 2024 for Adventure Seekers",
      subtext:
        "2024 promises exciting travel opportunities. Be open to new experiences, as flexibility is key when planning your journey in the coming year. Embrace the adventure and explore new horizons.",
    },
    {
      image: blogs02,
      label: "blogs02",
      date: "Dec 5, 2023",
      text: "Island Hopping Adventures in the Maldives and Beyond",
      subtext:
        "2024 promises exciting travel opportunities. Be open to new experiences, as flexibility is key when planning your journey in the coming year. Discover hidden gems and make unforgettable memories.",
    },
  ];
  
  



export const footer = {
  about: ["About us", "Blogs", "Careers", "Jobs", "In Press", "Gallery"],
  support: [
    "Contact Us",
    "Online Chat",
    "WhatsApp",
    "Telegram",
    "Ticketing",
    "Call Center",
  ],
  FAQ: [
    "Account",
    "Booking",
    "Payments",
    "Returns",
    "Privacy Policy",
    "Terms and Condition",
  ],
  newsLetter:
    "Don't miss out on the exciting world of travel subscribe now and embark on a journey od discovery with us",
};

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { name: "About us", link: "/" },
      { name: "Blogs", link: "/" },
      { name: "Careers", link: "/" },
      { name: "Jobs", link: "/" },
      { name: "In Press", link: "/" },
      { name: "Gallery", link: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", link: "/" },
      { name: "Online Chat", link: "/" },
      { name: "WhatsApp", link: "/" },
      { name: "Telegram", link: "/" },
      { name: "Ticketing", link: "/" },
      { name: "Call Center", link: "/" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { name: "Account", link: "" },
      { name: "Booking", link: "" },
      { name: "Payments", link: "" },
      { name: "Returns", link: "" },
      { name: "Privacy Policy", link: "" },
      { name: "Terms and Condition", link: "" },
    ],
  },
];
