import LanguageSelection from "./pages/LanguageSelection";
import { Route } from "./types";
import Login from "./login/Login";
import UserDashboard from "./pages/UserDashboard";

export const getUserRoutes = (userId: string): Route<'userDashboard' | 'languageSelection'> => ({
  userDashboard: {
      name: 'Welcome',
      path:`/${userId}`,
      component: UserDashboard,
      exact: true,
  },
  languageSelection: {
    name: 'Language Selection',
    path: `/${userId}/languages`,
    component: LanguageSelection,
    exact: true,
  },
});

const routes: Route<'login' | 'user'> = {
  login: {
    name: 'Log In',
    path: '/login',
    component: Login,
    exact: true,
  },
  user: {
    name: 'User',
    path: `/:userId`,
    component: UserDashboard,
    exact: false,
  },
};

export default routes;
