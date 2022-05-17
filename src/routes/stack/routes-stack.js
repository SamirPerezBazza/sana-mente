import Welcome from "../../screens/Welcome/Welcome";
import Login from "../../screens/Login/Login";
import Register from "../../screens/Register/Register";
import Dashboard from "../../screens/Dashboard/Dashboard";
import Process from "../../screens/Register/Process/Process";

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
  {
    name: 'ProcessScreen',
    component: Process,
  },
  {
    name: 'DashboardScreen',
    component: Dashboard,
  },
];