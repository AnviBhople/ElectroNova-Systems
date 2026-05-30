import React from "react";
import lineRobotImg from "./images/linerobo.png";
import electronicsKitImg from "./images/basicEkit.png";
import thrustMeterImg from "./images/droneThrust.png";
import doseAlertImg from "./images/dosealert.png";
import miniDroneImg from "./images/minidrone.png";
import objectDetectionImg from "./images/objectdetection.png";
import surveillanceBotImg from "./images/survillenceBot.png";
import roboticArmImg from "./images/roboticArm.png";
import interactiveBotImg from "./images/interactiveBot.png";
function Products() {
	const sectionStyle = {
		background:
			"radial-gradient(circle at top right, rgba(30,58,138,0.9), rgba(2,6,23,0.95))",
		color: "white",
		minHeight: "100vh",
		paddingTop: "120px",
		paddingBottom: "60px",
	};
	const products = [
		{
			name: "Line Following Robot",
			img: lineRobotImg,
		},
		{
			name: "Basic Electronics Kit",
			img: electronicsKitImg,
		},
		{
			name: "Dose Alert",
			img: doseAlertImg,
		},
		{
			name: "Drone Thrust Meter",
			img: thrustMeterImg,
		},
		{
			name: "Mini Drone",
			img: miniDroneImg,
		},
		{
			name: "Object Detection Robot",
			img: objectDetectionImg,
		},
		{
			name: "Surveillance Bot",
			img: surveillanceBotImg,
		},
		{
			name: "Robotic Arm Kit",
			img: roboticArmImg,
		},
		{
			name: "Interactive Bot",
			img: interactiveBotImg,
		},
	];

	const productCardStyle = {
		backgroundColor: "#e2eefa",
		// backgroundColor: "#2f3031",
		borderRadius: "20px",
		// border: "1px solid #c4c0c0",
		border: "1px solid #000",
		padding: "30px",
		textAlign: "center",
		transition: "all 0.3s ease-in-out",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		color: "black",
	};

	const productImageStyle = {
		width: "100%",
		height: "180px",
		objectFit: "contain",
		marginBottom: "20px",
		// filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.3))",
		fontFamily: "Inter",
		border: "2px solid #101010b2",
		// border: "1px solid #9b9494b2",
		// backgroundColor: "#003566",
		backgroundColor: "#3d5770",
		borderRadius: "20px",
	};

	const btntyle = {
		height: "auto",
		width: "300px",
		borderRadius: "10px",
		color: "#fff",
		fontFamily: "Inter",
		fontWeight: "bold",
		fontSize: "1.07rem",
		border: "2px solid #ad2831",
	};

	return (
		<div style={sectionStyle}>
			<div className="container py-5">
				<h1
					className="text-center mb-5"
					style={{
						fontFamily: "Orbitron",
						color: "#FFD51E",
						marginTop: "50px",
						fontWeight: "bold",
					}}>
					OUR &ensp;PRODUCTS
				</h1>
				<div className="row g-4">
					{products.map((item, index) => (
						<div className="col-12 col-md-6 col-lg-4" key={index}>
							<div
								style={productCardStyle}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "translateY(-10px)";
									e.currentTarget.style.borderColor = "#fff";
									e.currentTarget.style.boxShadow =
										"0 0 20px rgba(233, 237, 243, 0.7)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "translateY(0)";
									e.currentTarget.style.borderColor =
										"rgba(255, 255, 255, 0.5)";
									e.currentTarget.style.boxShadow = "none";
								}}>
								<img src={item.img} alt="" style={productImageStyle} />
								<h5
									style={{
										fontFamily: "Inter",
										fontSize: "1.5rem",
										color: "black",
										fontWeight: "bolder",
									}}>
									{item.name}
								</h5>
								<div className="d-flex justify-content-center">
									<button
										className="btn btn-outline-white btn-sm mt-3 bg-danger"
										style={btntyle}>
										View Specifications
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Products;
