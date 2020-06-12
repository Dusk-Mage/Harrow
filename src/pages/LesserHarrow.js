import React from 'react';
import HarrowSelector from '../components/HarrowSpell/HarrowSelector'
function LesserHarrow() {
	return (
		<div>
			<p>The Lesser Harrowing spell is a Homebrew spell developed for a friend in my Carrion Crown campaign.  This spell works as per the Harrowing spell, with the following changes.</p>
			<ul>
				<li>You draw four cards instead of Nine.</li>
				<li>Duration: 30 minutes per Caster Level</li>
			</ul>
			<HarrowSelector Draw="4"></HarrowSelector>
		</div>
	);
}

export default LesserHarrow;
