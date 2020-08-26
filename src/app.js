import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import ForgotPassword from "./components/forgotPassword";
import Homepage from "./components/homepage";


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		localStorage.getItem("soundspace/authentication/TOKEN")
			? <Component {...props} />
			: <Redirect to='/login' />
	)} />
)

const divStyle = {
	backgroundImage: "linear-gradient(to botttom right, #4880EC, #019CAD)"
	//TODO: above does not work. 
	// I know I should put this in a proper CSS file that changes the body, but my CSS file does not currently get recognized by the react app.
}

function App() {
	return (
		<div style={divStyle}>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/forgot" component={ForgotPassword} />
				<Route exact path="/artist/:id" component={Homepage} navbar={true} songPlayer={true} rendered="ArtistPage" />
				<Route exact path="/album/:id" component={Homepage} navbar={true} songPlayer={true} rendered="AlbumPage" />
				<Route exact path="/search" component={Homepage} navbar={true} rendered="SearchResultsPage"/>
				<PrivateRoute path="/" component={Homepage} navbar={true} songPlayer={true} />
			</Switch>
		</div>
	);
}

export default App;
