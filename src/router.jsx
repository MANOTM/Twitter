import { createBrowserRouter, useNavigate  } from "react-router-dom";
import Countainer from "./layouts/Countainer";
import Home from "./pages/Home/Home";
import Explore from "./pages/explore/Explore";
import Notifications from "./pages/notification/Notifications"; 
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Profile from "./pages/profile/Profile";
import { AuthRoute, GuestRoute } from "./layouts/AuthLayout";
import { LoginComponent, RegisterComponent, } from "./assets/Helper/MultiComponents";
import NotFound from "./pages/NotFound/NotFound";
import Overlay from "./layouts/Overlay/overlay";
import Logout from "./components/Logout/Logout";
import Messages from "./pages/messages/Messges";
import Setting from "./pages/Setting/Setting"; 
import { ProfileFollower } from "./components/ProfileComponent/ProfileFollowe/ProfileFollower";
import { Connect } from "./pages/Connect/Connect";

const router = createBrowserRouter([
    {
        element : <Countainer />,
        children : [
            {
                path : '/',
                exact: true,
                element : <Home />,
            },
            {
                path : '/home',
                element : <Home />,
            },
            {
                path : '/explore',
                element : <Explore />
            },
            {
                path : '/notifications',
                element : <AuthRoute element={Notifications} />,
            },
            {
                path : '/messages',
                element : <AuthRoute element={Messages} />,
            },
            {
                path : '/messages/:idSender',
                element : <AuthRoute element={Messages} />,
            },
            {
                path : '/bookmarks',
                element : <AuthRoute element={Bookmarks} />,
            },
            {
                path : ':pseudo/i/*',
                element : <AuthRoute element={ProfileFollower} />,
            },  
            {
                path : ':pseudo/*',
                element : <Profile/>,
            }, 
            {
                path : '/connect',
                element :<AuthRoute element={Connect}/>,
            },
            {
                path : '/settings/*',
                element : <AuthRoute element={Setting} />,
            },
            {
                path : '/i/flow/login',
                element : <GuestRoute element={LoginComponent} />
            },
            {
                path : '/i/flow/signup',
                element : <GuestRoute element={RegisterComponent} />
            },
            // {
            //     path : '/:pseudo',
            //     element : <ProfileNotFound />
            // },
            {
                path : '/:pseudo/*',
                element : <NotFound />
            }
        ]
    },
    {
        element: <Overlay />,
        children: [
            {
                path: '/logout',
                element : <AuthRoute element={Logout} />,
                // element: <Logout />
            }
        ]
    }
])

export default router;