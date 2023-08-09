import routesConfig from '~/config/routes';

// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import UploadProfile from '~/pages/UploadProfile'
import Search from '~/pages/Search';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.uploadProfile, component: UploadProfile, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes } 