import { createBrowserRouter } from "react-router-dom";
import Countainer from "./layouts/Countainer";
import Home from "./pages/Home/Home";
import Explore from "./pages/explore/Explore";
import Notifications from "./pages/notification/Notifications";
import Messages from "./pages/messages/Messges";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Profile from "./pages/profile/Profile";
import { AuthRoute, GuestRoute } from "./layouts/AuthLayout";
import { LoginComponent, RegisterComponent } from "./assets/Helper/MultiComponents";
import NotFound from "./pages/NotFound/NotFound";


const router = createBrowserRouter([
    {
        element : <Countainer />,
        children : [
            {
                path : '/',
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
                path : '/bookmarks',
                element : <AuthRoute element={Bookmarks} />,
            },
            {
                path : '/profile',
                element : <AuthRoute element={Profile} />,
            },
            {
                path : '/login',
                element : <GuestRoute element={LoginComponent} />
            },
            {
                path : '/register',
                element : <GuestRoute element={RegisterComponent} />
            },
            {
                path : '/*',
                element : <NotFound />
            }
        ]
    }
])

export default router;