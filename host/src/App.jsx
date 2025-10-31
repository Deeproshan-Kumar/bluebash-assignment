import React, { Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Spinner from "./components/Spinner";

const HomePage = React.lazy(() => import("../src/pages/home"));
const ChatApp = React.lazy(() => import("../../chat-app/src/App"));
const EmailApp = React.lazy(() => import("../../email-app/src/App"));
const LearnPage = React.lazy(() => import("../src/pages/learn"));
const ErrorPage = React.lazy(() => import("../src/pages/error"));

const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full" style={{ height: "calc(100vh - 144px)" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/chat",
          element: (
            <Suspense fallback={<Spinner />}>
              <ChatApp />
            </Suspense>
          ),
        },
        {
          path: "/email",
          element: (
            <Suspense fallback={<Spinner />}>
              <EmailApp />
            </Suspense>
          ),
        },
        {
          path: "/learn",
          element: <LearnPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
