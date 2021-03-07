//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let counter = 0;
setInterval(function() {
	const cuatro = Math.floor(counter / 10000);
	const tres = Math.floor(counter / 1000);
	const dos = Math.floor(counter / 100);
	const uno = Math.floor(counter / 10);
	counter++;
	ReactDOM.render(
		<Home sUno={uno} sDos={dos} sTres={tres} sCuatro={cuatro} />,
		document.querySelector("#app")
	);
}, 100);
