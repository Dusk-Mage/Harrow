import React from 'react';
import HarrowSelector from '../components/HarrowSpell/HarrowSelector'
import {Box, Paragraph} from 'grommet';

function LesserHarrow() {
	return (
		<Box>
			<Box>
				<Box background='dark-3'><b>LESSER HARROWING</b></Box>
				<Box background='dark-3'><span><b>Source</b> HomeBrew</span></Box>
				<Box background='dark-3'><span><b>School</b> divination</span><br/></Box>
				<Box background='dark-3' border='bottom top 1px'><span><b>CASTING</b></span></Box>
				<Box background='dark-3'><span><b>Casting Time</b> 10 minutes</span></Box>
				<Box background='dark-3'><span><b>Components</b> V, S, F (a Harrow deck)</span><br/></Box>
				<Box background='dark-3'border='bottom top 1px'><b>EFFECT</b></Box>
				<Box background='dark-3'><span><b>Range</b> touch</span></Box>
				<Box background='dark-3'><span><b>Target</b> one creature</span></Box>
				<Box background='dark-3'><span><b>Duration</b> 30 minutes/level or until fulfilled</span><br/></Box>
				<Box background='dark-3' border='bottom top 1px'><b>DESCRIPTION</b></Box>
				<Box background='dark-3'>
					<Paragraph fill='true' margin='small'>You use a Harrow deck to tell a fortune for yourself or someone else. If you cast harrowing on another creature, you must remain adjacent to the target for the duration of the casting time. A harrowing must describe one set of events or course of action (for example, “hunting down the pirate king,” or “traveling to Viperwall to search for a magic sword”) that the target of the spell intends to undertake at some point during the spell’s duration.</Paragraph>
					
					<Paragraph fill='true' margin='small'>You draw four cards when this spell is cast.  Record the ability score and alignment associated with each card. Each of these cards grants a luck bonus or a penalty on a specific type of d20 check; the magnitude of the penalty or bonus depends upon how closely that particular card’s alignment matches the target creature’s alignment. If the card and target’s alignments are identical, that card provides a +2 luck bonus on the associated suit’s check. If the card and target’s alignments are of the opposite alignment (see below), the card inflicts a –1 penalty on that associated check. If the card has any other alignment, it provides a +1 luck bonus on the associated suit’s check.</Paragraph>

					<Paragraph fill='true' margin='small'>While penalties persist on all associated checks for as long as the harrowing persists, the bonuses are one-use bonuses that the harrowed character can “spend” at any time to modify that card’s associated check. You can spend a bonus to modify an appropriate roll after the die is rolled, but cannot spend the bonus once you know the result of the roll. Since all of the bonuses granted by a harrowing are luck bonuses, they do not stack with each other. Penalties, on the other hand, do stack. Once you spend all of the bonuses granted by a harrowing, or once the spell’s duration ends, the spell ends and the penalties are removed.</Paragraph>

					<Paragraph fill='true' margin='small'>A single creature can only be under the effects of one harrowing at a time. If it is subjected to a second harrowing while a previous harrowing is still in effect, the new harrowing automatically fails.</Paragraph>
				</Box>
			</Box>
			<Box>
				<HarrowSelector Draw="4"></HarrowSelector>
			</Box>
		</Box>
	);
}

export default LesserHarrow;
