import React from "react";
import PropTypes from "prop-types";

export function Home(props) {
	return (
		<div className="black">
			<div className="container d-flex justify-content-center">
				<div className="number">
					<i className="far fa-clock"></i>
				</div>
				<div className="number">{props.sCuatro % 10}</div>
				<div className="number">{props.sTres % 10}</div>
				<div className="number">{props.sDos % 10}</div>
				<div className="number">{props.sUno % 10}</div>
			</div>
		</div>
	);
}
Home.propTypes = {
	sUno: PropTypes.number,
	sDos: PropTypes.number,
	sTres: PropTypes.number,
	sCuatro: PropTypes.number
};
