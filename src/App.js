import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationBar from './components/Navbar';
import Services from './components/pages/Services';
import ApplicantSpace from './components/pages/ApplicantSpace';
import Homepage from './components/pages/Homepage';

function App() {
	return (
		<div className='App'>
			<Router>
				<NavigationBar />

				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/services' component={Services} />
					<Route path='/applicant-space' component={ApplicantSpace} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
