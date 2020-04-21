import LanguageSelection from "./pages/LanguageSelection";
import { Route } from "./types";
import Login from "./login/Login";
import LandingPage from "./pages/LandingPage";

export const getUserRoutes = (userId: string): Route<'landingPage' | 'languageSelection'> => ({
  landingPage: {
      name: 'Welcome',
      path:`/${userId}`,
      component: LandingPage,
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
    component: LandingPage,
    exact: false,
  },
};

export default routes;
