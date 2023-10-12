import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './navbar/navbar';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './featuress/Login';
import Comment from './featuress/comment';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'',
        element:<Login></Login>
      },
      {
      path: "/vamsi/:id",
      element: <Nav></Nav>,
     children:[{
      path: "/vamsi/:id/maruthi/:s",
      element: <Comment></Comment>
     }]
    },
    // {
    //   path: "/maruthi/:s",
    //   element: <Comment></Comment>,
    // }
  
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();