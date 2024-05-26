import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AdminProducts from "../pages/AdminProducts";
import AdminOrders from "../pages/AdminOrders";

const homeRouter = '/';
const loginRoute = 'login';
const dashboardRoute = 'dashboard';
const dashboardProductsRoute = 'products';
const dashboardOrdersRoute = 'orders';

const routeToDashboard = `/${dashboardRoute}/${dashboardProductsRoute}`; 
const routeToLogin = `/${loginRoute}`; 

/**
 * @routesItems Lista de rutas para el front.
 */
const routesItems = [
    {
      path: homeRouter,
      element: Home,
      redirect: loginRoute,
      protected: false,
      nested: [],
    },
    {
      path: loginRoute,
      element: Login,
      redirect: "",
      protected: false,
      nested: [],
    },
    {
      path: dashboardRoute,
      element: Dashboard,
      redirect: "",
      protected: true,
      nested: [
        {
          path: dashboardProductsRoute,
          element: AdminProducts,
          redirect: "",
          protected: true,
        },
        {
          path: dashboardOrdersRoute,
          element: AdminOrders,
          redirect: "",
          protected: true,
        },
      ],
    },
  ];



export const RoutesList = {
    routesItems,
    homeRouter,
    loginRoute,
    dashboardRoute,
    dashboardProductsRoute,
    dashboardOrdersRoute,
    routeToDashboard,
    routeToLogin,
}
