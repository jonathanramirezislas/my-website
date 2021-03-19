import React, { useState, useRef, useEffect } from 'react';
import {  Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Main } from './components/Main';
import { Home } from './components/Home';

export const App = () => {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.key}>
				<Route exact path="/" component={Main} />
				<Route exact path="/home" component={Home} />
				<Redirect to="/" />
			</Switch>
		</AnimatePresence>
	);
};
