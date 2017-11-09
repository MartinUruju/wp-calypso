/** @format */

/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import FormattedHeader from 'components/formatted-header';

class PrimaryHeader extends Component {
	render() {
		// TODO: Localize
		return (
			<Card>
				<FormattedHeader
					headerText="WordPress.com Business Site Setup"
					subHeaderText="In this 30 minute session we'll help you get started with your site."
				/>
			</Card>
		);
	}
}

export default PrimaryHeader;
