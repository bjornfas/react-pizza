
//Router
import { Outlet } from "react-router-dom";

//Components
import Header from "../Header/Header";

const Layout = () => {
    return ( 
        <div className="App">
            <div className="wrapper">
                <div className="container">
                    <Header/>
                    <main>
                        <Outlet/>
                    </main>
                </div>
            </div>
        </div>
    )
}
 
export default Layout;