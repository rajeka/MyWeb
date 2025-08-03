import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
import { AlertProvider } from './context/alertContext';
import Alert from './components/Alert';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// Create a RootLayout component to wrap shared UI (like Header)
const RootLayout = () => {
  return (
    <Box>
      <Header />
      <main>
        <Outlet />
        {/* This is where the matched child route component will render */}
      </main>
      {/* You can add a Footer component here later if desired */}
    </Box>
  );
};
// Define your routes as an array of objects
const router = createBrowserRouter([
  {
    path: '/', // Root path
    element: <RootLayout />, // Our shared layout component
    children: [
      // Nested routes for each section
      {
        index: true, // This makes Home the default component for the '/' path
        element: <LandingSection />,
      },
      {
        path: 'projects', // Route for the projects section
        element: <ProjectsSection />,
      },
      {
        path: 'contact', // Route for the contact section
        element: <ContactMeSection />,
      },
      // You can add a 404 Not Found page here
      // {
      //   path: '*', // Catch-all route for any undefined path
      //   element: <NotFound />, // A component you'd create for a 404 page
      // },
    ],
  },
]);
function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <RouterProvider router={router} />
        {/* <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main> */}
        {/* </RouterProvider> */}
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
