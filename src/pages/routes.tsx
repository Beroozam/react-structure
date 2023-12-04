import {createBrowserRouter} from "react-router-dom";
import useLayoutSelector from 'pages/pages'
import SharedLayout from "pages/sharedLayout";

export default function Routes(){
  const {
    home,
      about
  } = useLayoutSelector()
  return createBrowserRouter([
    {
      element:<SharedLayout />,
      path:'/',
      children:[
        {
          index:true,
          id:"1",
          element:home,
          loader: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
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
              element:about,
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
}
