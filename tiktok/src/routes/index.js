import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import UploadProfile from '~/pages/UploadProfile'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/uploadProfile', component: UploadProfile, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes } 