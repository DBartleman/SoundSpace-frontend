import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import ForgotPassword from "./components/forgotPassword";
import Homepage from "./components/homepage";

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
				{/* <Route exact path="/login" component={Login} /> */}
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/forgot" component={ForgotPassword} />
				<PrivateRoute path="/login" component={Homepage} />
			</Switch>
		</>
	);
}

export default App;
