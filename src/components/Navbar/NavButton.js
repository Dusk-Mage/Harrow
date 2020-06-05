// components/NavButton.js

import React from 'react';

import ButtonStyles from "./NavButton.module.scss";

const NavButton = props => (
  <a href={props.path}>
    <div className={props.label === "Resources" || props.label === "Links" ? ButtonStyles.NavButtonRight : ButtonStyles.NavButton}>
      <div className={ButtonStyles.Icon}>{props.icon}</div>
      <span className={ButtonStyles.Label}>{props.label}</span>
    </div>
  </a>
);

export default NavButton; 