import BookRoom from "../Apps/BookRoom";
import Charts from "../Apps/Charts";
import CreateRoom from "../Apps/CreateRoom";
import DeshBoard from "../Apps/DeshBoard";
import ListRoom from "../Apps/ListRoom";
import Layoutt from "../layout";

export const Routes = [
    {
        path:"/",
        element:<Layoutt />,
        children :[
            {
                path:"/",
                element:<DeshBoard />
            },
            {
                path:"/bookroom",
                element:<BookRoom />
            },
            {
                path:"/create-room",
                element:<CreateRoom />
            },
            {
                path:"/list-room",
                element:<ListRoom />
            },
            {
                path:"/chart",
                element:<Charts />
            }
        ]
    }
]