import {createBrowserRouter} from "react-router-dom";
import useLayoutSelector from 'pages/pages'
import SharedLayout from "pages/sharedLayout";
import {protectedRoutes} from "helpers/isLoggedInHandler";
import SecondLayout from 'pages/layout'

export default function Routes(){
  const layoutSelector = useLayoutSelector()
  return createBrowserRouter([
    {
      element:<SharedLayout />,
      path:'/',
      loader: protectedRoutes,
      children:[
        {
          index:true,
          element:layoutSelector.home,
        },
      ]
    },
    {
      path:'about',
      element:<SecondLayout />,
      loader: protectedRoutes,
      children:[
        {
          index:true,
          element:layoutSelector.about,
        },
        {
          path:'me',
          element:<div>I AM BEHROUZ MOHAMMADI</div>,
        }
      ]
    },
    {
      path:'/login',
      element:layoutSelector.login
    },
    {
      path:"*",
      element:<>404 not founding</>
    }
  ],{
    basename:process.env.PUBLIC_URL
  })
}
