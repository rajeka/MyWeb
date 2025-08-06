import { ChakraProvider } from '@chakra-ui/react';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { AlertProvider } from './context/alertContext';
import Construction from './components/Construction';
import NotFound from './components/NotFound';
import Alert from './components/Alert';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LandingSection /> },
      { path: 'projects', element: <ProjectsSection /> },
      { path: 'contact', element: <ContactMeSection /> },
      { path: 'construction', element: <Construction /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
//[

//   { path: '/', element: <Home /> },
//   { path: '/projects', element: <ProjectsSection /> },
//   { path: '/contact', element: <ContactMeSection /> },
//]

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <RouterProvider router={router}>
          <Alert />
        </RouterProvider>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
