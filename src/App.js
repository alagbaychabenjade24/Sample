import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Services from './components/pages/Services';
import ApplicantSpace from './components/pages/ApplicantSpace';
import Homepage from './components/pages/Homepage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/about-us' component={AboutUs} />
					<Route path='/services' component={Services} />
					<Route path='/applicants-space' component={ApplicantSpace} />
					<Route path='/contact-us' component={ContactUs} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
