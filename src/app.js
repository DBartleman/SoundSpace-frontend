import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login";

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		localStorage.getItem("SoundSpace/authentication/TOKEN")
			? <Component {...props} />
			: <Redirect to='/login' />
	)} />
)

function App() {
	return (
		<>
			<Switch>
                {/* TODO: implement components below */}
				<Route exact path="/login" component={Login} />
				{/* <Route exact path="/signup" component={Signup} /> */}
				{/* <PrivateRoute path="/" component={AlreadyLoggedIn} /> */}
			</Switch>
		</>
	);
}

export default App;
