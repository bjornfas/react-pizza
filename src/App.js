
//Router
import {Routes, Route} from "react-router-dom";

//Components
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ShopCart from "./pages/ShopCart/ShopCart";
import PizzaPage from "./pages/PizzaPage";
import NotFound from "./pages/NotFound/NotFound";

//Styles
import "./scss/style.scss";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route index element={<Home/>}/>
				<Route path="shop-cart" element={<ShopCart/>}/>
				<Route path="pizza/:id" element={<PizzaPage/>}/>
				<Route path="*" element={<NotFound/>}/>
			</Route>
		</Routes>
	)
}

export default App;
