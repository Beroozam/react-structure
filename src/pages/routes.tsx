import {useRoutes} from "react-router-dom";
import DashboardContainer from "Components/DashboardContainer";
import Datasets from "Components/Dashboard/Datasets";

export default function Routes(){
  const routes = useRoutes([
    {
      id:"1",
      path:'/',
      element:<DashboardContainer><Datasets type={"intent"}/></DashboardContainer>,
      errorElement:<div>Error .......................</div>,
      loader: async () => {
        const delay = await new Promise((resolve) => setTimeout(resolve, 20000))
        return delay
      },

    },
    {
      id:"2",
      path:'/contexts',
      element:<DashboardContainer><Datasets type={"qa_context"}/></DashboardContainer>
    },

  ])
  return routes
}
