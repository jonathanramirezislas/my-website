import React, { Suspense } from 'react';
import {  Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import  Home  from './components/Home';
import  Main  from './components/Main';
import Intro from './components/Intro';



export const App = () => {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.key}>
					<Route exact path="/" component={Intro} />
      				<Route exact path="/home" component={Home} />
				<Redirect to="/" />
			</Switch>
		</AnimatePresence>
	);
};
