import React, { useState } from "react";
import trainingkit1 from "./images/trainingkit1.png";
import trainingkit2 from "./images/trainingkit2.png";
import trainingkit3 from "./images/trainingkit3.png";
import robowork1 from "./images/robowork1.png";
import robowork2 from "./images/robowork2.png";
import robowork3 from "./images/robowork3.png";
import threedwork1 from "./images/3dwork1.png";
import threedwork2 from "./images/3dwork2.png";
import threedwork3 from "./images/3dwork3.png";
import androidwork1 from "./images/androidwork1.png";
import androidwork2 from "./images/androidwork2.png";
import androidwork3 from "./images/androidwork3.png";
import aeromodel_work1 from "./images/aeromodel_work1.png";
import aeromodel_work2 from "./images/aeromodel_work2.png";
import aeromodel_work3 from "./images/aeromodel_work3.png";
import drone1 from "./images/drone1.png";
import drone2 from "./images/drone2.png";
import drone3 from "./images/drone3.png";
import drone4 from "./images/drone4.png";

function Training() {
	const workshops = [
		{
			id: "robotics",
			date: "Date 1",
			title: "Robotic Workshop",
			images: [robowork1, robowork2, robowork3],
		},
		{
			id: "3dprinting",
			date: "Date 2",
			title: "3D Printing Workshop",
			images: [threedwork1, threedwork2, threedwork3],
		},
		{
			id: "android",
			date: "Date 3",
			title: "Android Development",
			images: [androidwork1, androidwork2, androidwork3],
		},
		{
			id: "aeromodelling",
			date: "Date 4",
			title: "Aeromodelling (IITK)",
			images: [aeromodel_work1, aeromodel_work2, aeromodel_work3],
		},
		{
			id: "drone",
			date: "Date 5",
			title: "Mini Drone Workshop",
			images: [drone1, drone2, drone3, drone4],
		},
	];

	const [activeWorkshop, setActiveWorkshop] = useState(workshops[0]);

	const trainingkit = [
		{ title: " Arduino Kit", img: trainingkit1 },
		{ title: "IoT Kit", img: trainingkit2 },
		{ title: "Robotic Kit", img: trainingkit3 },
	];

	const sectionStyle = {
		background:
			"radial-gradient(circle at top right, rgba(30,58,138,0.9), rgba(2,6,23,0.95))",
		color: "white",
		minHeight: "100vh",
		paddingTop: "120px",
		paddingBottom: "60px",
	};

	const cardStyle = {
		// background: "rgba(255,255,255,0.05)",
		backgroundColor: "#e9ecef",
		// backgroundColor: "#e1ecf5",
		padding: "20px",
		borderRadius: "10px",
		backdropFilter: "blur(10px)",
		fontFamily: "Inter",
		textAlign: "center",
		height: "100%",
		transition: "all 0.3s ease",
		cursor: "pointer",
		border: "1px solid rgba(246, 240, 240, 0.2)",
	};

	const para = {
		fontSize: "16px",
		lineHeight: "1.6",
		color: "#bcc4cf",
		fontFamily: "Inter",
		textAlign: "center",
	};

	const timelineContainer = {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		position: "relative",
		margin: "40px auto 60px auto",
		maxWidth: "900px",
		padding: "0 20px",
	};

	const timelineLine = {
		position: "absolute",
		top: "30%",
		left: "5%",
		right: "5%",
		height: "4px",
		background: "rgba(255, 255, 255, 0.1)",
		zIndex: 1,
	};

	return (
		<div style={sectionStyle}>
			<div className="container">
				<div className="text-center mb-5">
					<h1
						style={{
							fontFamily: "Orbitron",
							marginTop: "40px",
							color: "#FFD51E",
							fontWeight: "bold",
						}}>
						Our Training Kits
					</h1>
					<p
						style={{
							fontWeight: "normal",
							fontSize: "1.2rem",
							fontFamily: "Inter",
						}}>
						Fueling the Next Generation of Innovators
					</p>
					<p style={para}>
						Ignite curiosity through the power of hands-on creation. Our
						training kits are meticulously designed to transform complex
						subjects into tangible, exciting learning experiences.
					</p>
				</div>

				<div className="row mb-5 justify-content-center">
					{trainingkit.map((service, index) => (
						<div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
							<div
								style={cardStyle}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "scale(1.05)";
									e.currentTarget.style.boxShadow =
										"0 10px 30px rgba(30, 58, 138, 0.5)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "scale(1)";
									e.currentTarget.style.boxShadow = "none";
								}}>
								<img
									src={service.img}
									alt={service.title}
									className="img-fluid mb-3"
									style={{
										borderRadius: "10px",
										width: "100%",
										objectFit: "cover",
									}}
								/>
								<h5
									style={{
										fontFamily: "Inter",
										fontSize: "xx-large",
										color: "black",
										fontWeight: "bold",
									}}>
									{service.title}
								</h5>
							</div>
						</div>
					))}
				</div>

				<hr
					style={{ borderColor: "rgba(255,255,255,0.1)", margin: "60px 0" }}
				/>

				<div className="text-center mb-4">
					<h1
						style={{
							fontFamily: "Orbitron",
							color: "#FFD51E",
							fontWeight: "bold",
						}}>
						Our Workshops
					</h1>
					<p style={para}>
						Click on any timeline milestone to view the workshop gallery.
					</p>
				</div>

				<div style={timelineContainer}>
					<div style={timelineLine} />
					{workshops.map((workshop) => {
						const isActive = activeWorkshop.id === workshop.id;
						return (
							<div
								key={workshop.id}
								onClick={() => setActiveWorkshop(workshop)}
								style={{
									zIndex: 2,
									textAlign: "center",
									cursor: "pointer",
									width: "18%",
								}}>
								<div
									style={{
										width: "50px",
										height: "50px",
										borderRadius: "50%",
										background: isActive ? "#3b82f6" : "rgba(255,255,255,0.1)",
										border: isActive
											? "3px solid #fff"
											: "2px solid rgba(255,255,255,0.4)",
										boxShadow: isActive ? "0 0 20px #3b82f6" : "none",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										margin: "0 auto 10px auto",
										transition: "all 0.3s ease",
									}}>
									<span
										style={{
											fontFamily: "Inter",
											fontWeight: "bold",
											fontSize: "1.5rem",
										}}>
										{workshop.date.split(" ")[1]}
									</span>
								</div>
								<div
									style={{
										fontFamily: "Inter",
										fontSize: "1rem",
										color: isActive ? "#FFD51E" : "#bcc4cf",
										fontWeight: isActive ? "bold" : "normal",
									}}>
									{workshop.title}
								</div>
							</div>
						);
					})}
				</div>

				<div className="row mb-5 justify-content-center text-center">
					<h2
						style={{
							fontFamily: "Orbitron",
							marginBottom: "30px",
							color: "#FFD51E",
							fontWeight: "bold",
						}}>
						{activeWorkshop.title} Gallery
					</h2>

					{activeWorkshop.images.map((imgSrc, imgIdx) => (
						<div
							className={`col-12 col-md-6 ${activeWorkshop.images.length === 4 ? "col-lg-3" : "col-lg-4"} mb-4`}
							key={imgIdx}>
							<div
								style={cardStyle}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "scale(1.03)";
									e.currentTarget.style.boxShadow =
										"0 10px 25px rgba(255,255,255,0.15)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "scale(1)";
									e.currentTarget.style.boxShadow = "none";
								}}>
								<img
									src={imgSrc}
									alt={`${activeWorkshop.title} ${imgIdx + 1}`}
									className="img-fluid"
									style={{
										borderRadius: "10px",
										height: "250px",
										width: "120%",
										objectFit: "cover",
									}}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Training;
