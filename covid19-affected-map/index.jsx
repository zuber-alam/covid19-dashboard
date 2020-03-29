import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './home-page';
// import Countrywise from './countrywise';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<HomePage />
				{/* <Countrywise /> */}
			</div>
		);
	}

}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
