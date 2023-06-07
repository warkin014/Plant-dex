import React, { Fragment, Suspense } from 'react';
import Home from './screens/home';
import Tools from './screens/tools';
import NavigationBar from './components/navigationbar';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ImageUpload } from "./home";
import Updates from './screens/updates';
import Weather from './screens/weather';
import Fertilizer from './components/FertilizerForm';
import Plantlookup from './screens/plantlookup';
import "./app.css"

// function App() {
//   return <ImageUpload/>;
// }

// export default App;
const router =createBrowserRouter([
  {
    element: <NavigationBar/>,
    children:[
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/tools',
        element: <Tools/>
      },
      {
        path: '/updates',
        element: <Updates/>
      },
      {
        path: '/weather',
        element: <Weather/>
      },
      {
        path: '/plant_disease',
        element: <ImageUpload/>
      },
      
      {
        path: '/lookup',
        element: <Plantlookup/>
      },
      {
        path: '/recommender',
        element: <Fertilizer/>
      },
      
    ]
  }
])
const App = () => {
  return (
    // <Fragment>
    //     <Router>
    //       <Suspense fallback={<Loader />}>
    //       </Fragment>
    //       </Suspense
    //     </Router>
    <div className='full-container' >
       <div> 
        <RouterProvider router={router} />
       </div> 
     </div>
  );
};

export default App;
