import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Notfound from "./pages/Notfound.jsx";
import Videos from "./pages/Videos.jsx";
import Root from "./pages/Root.jsx";
import VideoDetail from "./pages/VideoDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Notfound />,
    children: [
      { index: true, element: <Home /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:videoId", element: <VideoDetail /> },
    ],
  },
  {
    path: "/videos",
    element: <Videos />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
