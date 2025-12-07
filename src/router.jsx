import { createBrowserRouter } from "react-router";
import Homepage from "./pages/HomePage";
import PublicLayout from "./layouts/PublicLayout";
import PostAddLayout from "./layouts/PostAddLayout";
import PostAdd from "./pages/PostAdd";
import PostAddAttributes from "./pages/PostAddAttributes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: '',
                element: <Homepage />
            },
        ]
    },
    {
        path: "/",
        element: <PostAddLayout />,
        children: [
            {
                path: '/post',
                element: <PostAdd />
            },
            {
                path: '/post/attributes',
                element: <PostAddAttributes />
            }
        ]
    }
]);

export default router