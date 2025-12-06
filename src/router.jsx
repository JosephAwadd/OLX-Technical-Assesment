import { createBrowserRouter } from "react-router";
import Homepage from "./pages/HomePage";
import PublicLayout from "./layouts/PublicLayout";

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
    }
]);

export default router