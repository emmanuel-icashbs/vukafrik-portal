export interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
   }[];
};

const menu_data: MenuItem[] = [
   {
      id: 1,
      has_dropdown: true,
      title: "Home",
      link: "#",
      sub_menus: [
         { link: "/", title: "Business Forum" },
         { link: "/home-two", title: "Design Conference" },
         { link: "/home-three", title: "Digital Marketing" },
         { link: "/home-four", title: "Education Event" },
         { link: "/home-five", title: "Fashion Event" },
         { link: "/home-six", title: "Tech Conference" },
      ],
   },
   {
      id: 2,
      has_dropdown: true,
      title: "Events",
      link: "#",
      sub_menus: [
         { link: "/events", title: "Events" },
         { link: "/about", title: "About Events" },
         { link: "/events-venue", title: "Events Venue" },
         { link: "/gallery", title: "Events Gallery" },
         { link: "/events-details", title: "Events Details" },
      ],
   },
   {
      id: 3,
      has_dropdown: true,
      title: "Speakers",
      link: "#",
      sub_menus: [
         { link: "/team", title: "Speakers" },
         { link: "/team-details", title: "Speakers Details" },
      ],
   },
   {
      id: 4,
      has_dropdown: true,
      title: "Pages",
      link: "#",
      sub_menus: [
         { link: "/blog", title: "Blog" },
         { link: "https://evente-next.netlify.app/blog-details/1", title: "Blog Details" },
         { link: "/faq", title: "Faq" },
         { link: "/pricing", title: "Pricing" },
         { link: "/product", title: "Product" },
         { link: "https://evente-next.netlify.app/product-details/1", title: "Product Details" },
         { link: "/wishlist", title: "Wishlist" },
         { link: "/cart", title: "Cart" },
         { link: "/checkout", title: "Checkout" },
         { link: "/login", title: "Login" },
         { link: "/register", title: "Register" },
      ],
   },
   {
      id: 5,
      has_dropdown: false,
      title: "Contact",
      link: "/contact",
   },
];

export default menu_data;