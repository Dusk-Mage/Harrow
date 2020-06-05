import React from 'react';
import styles from './footer.module.css'

const Footer =() =>(
	<div className={styles.footer}>
		<p>This website uses trademarks and/or copyrights owned by Paizo Inc., which are used under Paizo's Community Use Policy. We are expressly prohibited from charging you to use or access this content. This website is not published, endorsed, or specifically approved by Paizo Inc. For more information about Paizo's Community Use Policy, please visit <a href="//www.paizo.com/communityuse/" target="_blank" rel="noopener noreferrer">paizo.com/communityuse</a>. For more information about Paizo Inc. and Paizo products, please visit <a href="//www.paizo.com/" target="_blank" rel="noopener noreferrer">paizo.com</a>.</p>
		<p>
			SVG icons provided by <a href="https://seiyria.com/gameicons-font/" target="_blank" rel="noopener noreferrer"> Game Icons Font</a>
		</p>
	</div>
)

export default Footer;