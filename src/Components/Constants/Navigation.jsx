import React from "react";
import home from '../../assets/Home.png'
import trending from '../../assets/trending.png'
import suggesttions from '../../assets/suggestions.png'
import category from '../../assets/categories.png'
export const SidebarData = [
  {
    key: "home",
    label: "Home",
    path: "/home",
    icon: <img src={home} alt="home" />,
  },
  {
    key: "trending",
    label: "Trending",
    path: "/trending",
    icon: <img src={trending} alt="trending" />,
  },
  {
    key: "suggestions",
    label: "Suggestions",
    path: "/suggestions",
    icon: (
      <img
        className="h-5 w-5"
        src={suggesttions}
        alt="suggestions"
      />
    ),
  },
  {
    key: "categories",
    label: "Categories",
    path: "/categories",
    icon: <img src={category} alt="categories" />,
  },
];
