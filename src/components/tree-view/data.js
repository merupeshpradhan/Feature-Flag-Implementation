export const menus = [
  { label: "Home", to: "/" },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Detials",
        to: "/Detials",
        children: [
          {
            label: "Location",
            to: "location",
            children: [{ label: "City", to: "city" }],
          },
        ],
      },
    ],
  },
  {
    label: "Setting",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children: [{ label: "Random data", to: "" }],
          },
        ],
      },
    ],
  },
];

export default menus;
