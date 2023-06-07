import { createBrowserRouter, useNavigate  } from "react-router-dom";
import Countainer from "./layouts/Countainer";
import Home from "./pages/Home/Home";
import Explore from "./pages/explore/Explore";
import Notifications from "./pages/notification/Notifications"; 
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Profile from "./pages/profile/Profile";
import { AuthRoute, GuestRoute } from "./layouts/AuthLayout";
import { ForgotComponent, LoginComponent, RegisterComponent, } from "./assets/Helper/MultiComponents";
import NotFound from "./pages/NotFound/NotFound";
import Overlay from "./layouts/Overlay/overlay";
import Logout from "./components/Logout/Logout";
import Messages from "./pages/messages/Messges";
import Setting from "./pages/Setting/Setting"; 
import { ProfileFollower } from "./components/ProfileComponent/ProfileFollowe/ProfileFollower";
import { Connect } from "./pages/Connect/Connect";
import Forgot from "./pages/Auth/Forgot/Forgot";
import TrendsList from "./components/Trends/Components/TrendsList/TrendsList";
import Comment from "./pages/Comment/Comment";
import Reply from "./pages/Reply/Reply";


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
                path : '/messages/*',
                element : <AuthRoute element={Messages} />,
            },
            // {
            //     path : '/messages/:pseudo',
            //     element : <AuthRoute element={Messages} />,
            // },
            {
                path : '/bookmarks',
                element : <AuthRoute element={Bookmarks} />,
            },
            {
                path : ':pseudo/i/*',
                element : <AuthRoute element={ProfileFollower} />,
            }, 
            {
                path : ':pseudo/status/:idTweet',
                element : <Comment />,
            },
            {
                path : ':pseudo/reply/:idComment/:idTweet',
                element : <Reply />,
            },  
            {
                path : ':pseudo/*',
                element : <Profile/>,
            }, 
            {
                path : '/search/:hashtag',
                element :<AuthRoute element={Explore}/>,
            },
            {
                path : '/connect',
                element :<AuthRoute element={Connect}/>,
            },
            {
                path : '/i/trends',
                element :<AuthRoute element={TrendsList}/>,
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
            },{
                path : '/i/flow/password_reset',
                element: <GuestRoute element={ForgotComponent} />
            }
        ]
    },
    {
        element: <Overlay />,
        children: [
            {
                path: '/logout',
                element: <AuthRoute element={Logout} />,
                // element: <Logout />
            }
        ]
    }
])

export default router;