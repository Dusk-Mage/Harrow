import React from 'react';
import NavButton from "./NavButton";
import styles from './navbar.module.css'
import navButtons from "../../config/buttons";

const NavBarButtons = props => (
	<div>
	  {props.navButtons.map(button => (
		<NavButton
		key={button.path}
		path={button.path}
		label={button.label}
		icon={button.icon}
		/>
	  ))}
	</div>
);

const Navbar =() => (
	<nav className={styles.nav}>
		<div className={styles.logo}>
			<a href="./index">
				<img className={styles.logo} src="/images/pathfinder.png" alt="Pathfinder Roleplaying system logo."></img>
			</a>
		</div>
		<NavBarButtons navButtons={navButtons}></NavBarButtons>
	</nav>
)
export default Navbar;