import {createBrowserRouter} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from './pages/Home'
import Logo from "./pages/Logo";
import Video from "./pages/Video";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/logo',
        element: <Logo />,
    },
    {
        path: '/video',
        element: <Video />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;