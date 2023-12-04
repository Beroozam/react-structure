import {Link,createBrowserRouter} from "react-router-dom";
import Home from 'pages/home'
import SharedLayout from "pages/sharedLayout";

export default function Routes(){
  const routes = createBrowserRouter([
    {
      element:<SharedLayout />,
      path:'/',
      children:[
        {
          index:true,
          id:"1",
          element:<Home />,
          loader: async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            return null
          }
        },
        {
          id:"2",
          path:'about',
          children:[
            {
              index:true,
              id:"3",
              element:<Link to='me' className={`underline`}>About Me</Link>,
            },
            {
              id:"4",
              path:'me',
              element:<div>I AM BEHROUZ MOHAMMADI</div>,
            }
          ]
        }
      ]
    }
  ],{
    basename:process.env.PUBLIC_URL
  })
  return routes
}
