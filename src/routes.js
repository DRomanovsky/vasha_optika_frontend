import Adminpage from "./pages/admin/Adminpage";
import Adminloginpage from './pages/admin/Adminloginpage'
import Onas from './pages/Onas'
import Contacts from './pages/Contacts'
import Catalog from "./pages/Catalog";
import Homepage from "./pages/Homepage"
import Services from "./pages/Services";
import { ABOUT, ADMIN_ROUTE, CATALOG, CONTACTS, LOGIN_ROUTE, SERVICES, HOMEPAGE } from "./util/consts";

export const authRoutes =[
  {
    path: ADMIN_ROUTE,
    Component: Adminpage
  }
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Adminloginpage
  },
  {
    path: CATALOG,
    Component: Catalog
  },
  {
    path: SERVICES,
    Component: Services
  },
  {
    path: ABOUT,
    Component: Onas
  },
  {
    path: CONTACTS,
    Component: Contacts
  },
  {
    path: HOMEPAGE,
    Component: Homepage
  }
]