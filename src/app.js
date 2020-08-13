import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import ForgotPassword from "./components/forgotPassword";
import Homepage from "./components/homepage";
import ArtistPage from "./components/artistPage";
import AlbumPage from "./components/albumPage";
import SearchResultsPage from "./components/searchResultsPage"

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		localStorage.getItem("soundspace/authentication/TOKEN")
			? <Component {...props} />
			: <Redirect to='/login' />
	)} />
)

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/forgot" component={ForgotPassword} />
				<Route exact path="/artist/:id" component={ArtistPage} />
				<Route exact path="/album/:id" component={AlbumPage} />
				<Route exact path="/search" component={SearchResultsPage} />
				<PrivateRoute path="/" component={Homepage} />
			</Switch>
		</>
	);
}

export default App;
