// config/buttons.js

import React from "react";

const navButtons = [
  {
    label: "Cast Harrow",
    path: "/Harrow",
    icon: <img src="/icons/black-book.svg" alt="Cast Harrow link icon. Depicts a black and white closed book."/>
  },
  {
    label: "Cast Greater Harrow",
    path: "/Greater-harrow",
    icon: <img src="/icons/secret-book.svg" alt="Cast Greater Harrow link icon. Depicts a black and white closed book with key hole on the cover."/>
  },
  {
    label: "Perform Reading",
    path: "/Perform-Reading",
    icon: <img src="/icons/card-draw.svg" alt="Perform Harrow Reading link icon. Depicts a black and white deck of cards with one card rased off the tope and an arrow pointing up."/>
  },
  {
    label: "Resources",
    path: "/Resources",
    icon: <img src="/icons/archive-research.svg" alt="Harrow Resources link icon. Depicts a black and white open book with a magnifying glass on the left page."/>
  },
  {
    label: "Links",
    path: "/Links",
    icon: <img src="/icons/spell-book.svg" alt="External Links icon. Depicts a black and white open book with magic sparkling off the pages."/>
  }
];

export default navButtons;