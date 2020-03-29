import PropTypes from 'prop-types';
import React from 'react';

export default class Home extends React.Component {

	static propTypes = {
		additionalClasses: PropTypes.string,
		children: PropTypes.element.isRequired,
		label: PropTypes.string,
		mapStyle: PropTypes.object
	};

	render() {
		return (
			<div className="Home">
				<div
					className={`Home-map ${this.props.additionalClasses}`}
					style={this.props.mapStyle}
    >
					{React.Children.only(this.props.children)}
				</div>
			</div>
		);
	}

}
