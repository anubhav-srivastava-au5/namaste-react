import {Provider} from "react-redux"
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import store  from "./utils/store";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body />,
  children:[
    {
      path:'/',
      element:<MainContainer />
    },
    {
      path:"/watch",
      element:<WatchPage />
    }
  ]
}])

const App = () => {
  return (
    <Provider store={store}>
    <>
    <Header />
    <RouterProvider router={appRouter} />
    </>
    </Provider>
  )
}

export default App