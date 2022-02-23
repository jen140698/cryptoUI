import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Footer from "./component/Footer"
import Home from "./container/Home"
import Page1 from "./container/Page1"
// import Page2 from "./container/Page2"
// import Page3 from "./container/Page3"

function App() {
	return (
		<>
			<BrowserRouter>
			{/* <Header /> */}
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route exact path='/game' component={Page1}></Route>
					{/* <Route exact path='/map' component={Page2}></Route>
					<Route exact path='/marketplace' component={Page3}></Route> */}
				</Switch>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
