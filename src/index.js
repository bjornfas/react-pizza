
//React
import React from "react";
import { createRoot } from "react-dom/client";

//Redux
import store from "./redux/store";
import { Provider } from "react-redux";

//Router
import { BrowserRouter } from "react-router-dom";

//Components
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
);

