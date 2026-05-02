import { createBrowserRouter } from "react-router";
import RootLayout from '@/layouts/rootLayout';
import HomePage from './pages/home';
import NotFound from "./layouts/notFound";
import Events from "./pages/events";
import Evangelism from "./pages/evangelism";
import Adorations from "./pages/adorations";
import SoundProyection from "./pages/soundProyection";
import Multimedia from "./pages/multimedia";
import YouthNewGeneration from "./pages/youthNewGeneration";
import SundayServices from "./pages/sundayServices";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />},
      { path: '/events', element: <Events />},
      { path: '/evangelism', element: <Evangelism />},
      { path: '/adorations', element: <Adorations />},
      { path: '/soundAndProyection', element: <SoundProyection />},
      { path: '/multimedia', element: <Multimedia />},
      { path: '/youthNewGeneration', element: <YouthNewGeneration />},
      { path: '/sundayServices', element: <SundayServices />}
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router;