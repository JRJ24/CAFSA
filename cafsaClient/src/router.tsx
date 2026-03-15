import { createBrowserRouter } from "react-router";
import RootLayout from '@/layouts/rootLayout';
import HomePage from './pages/home';
import NotFound from "./layouts/notFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />},
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router;