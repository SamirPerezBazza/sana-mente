import Welcome from "../../screens/Welcome/Welcome";
import Login from "../../screens/Login/Login";
import Register from "../../screens/Register/Register";

export const routes = [
  {
    name: 'WelcomeScreen',
    component: Welcome,
  },
  {
    name: 'LoginScreen',
    component: Login,
  },
  {
    name: 'RegisterScreen',
    component: Register,
  },
];