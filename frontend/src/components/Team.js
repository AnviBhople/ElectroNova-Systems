import React from "react";
import bgImg from "./images/background_img.jpg";
import arjunImg from "./images/arjunImg.png";
import shreyashImg from "./images/shreyashImg.png";
import mohImg from "./images/mohImg.png";
import komalhr from "./images/komalhr.png";
import komalacc from "./images/komalaccImg.png";
import yuvrajImg from "./images/yuvrajImg.png";
import sanskarImg from "./images/sanskarImg.png";
import suhaniImg from "./images/suhaniImg.png";
import skordeImg from "./images/skordeImg.png";
import akshayImg from "./images/akshayImg.png";
import roshanImg from "./images/roshanImg.png";
import teamImg from "./images/teamImg.png";
function Team() {
	const sectionStyle = {
		background: `radial-gradient(circle at top right, rgba(30,58,138,0.9), rgba(2,6,23,0.95)), url(${bgImg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		color: "white",
		minHeight: "100vh",
		padding: "80px 0",
	};

	const cardStyle = {
		backgroundColor: "rgba(255, 255, 255, 0.05)",
		backdropFilter: "blur(10px)",
		borderRadius: "20px",
		border: "1px solid rgba(255, 255, 255, 0.1)",
		padding: "20px",
		textAlign: "center",
		transition: "all 0.3s ease",
	};

	const imgStyle = {
		width: "200px",
		height: "200px",
		borderRadius: "50%",
		objectFit: "cover",
		marginBottom: "15px",
		border: "3px solid #3b82f6",
		boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
	};

	const teamMembers = [
		{ name: "KOMAL AUJEKAR", role: "HR MANAGER", img: komalhr },
		{ name: "KOMAL SUNE", role: "ACCOUNTANT HEAD", img: komalacc },
		{ name: "YUVRAJ DESHMUKH", role: "R & D HEAD", img: yuvrajImg },
		{ name: "SANSKAR WANVE", role: "GRAPHIC DESIGNER", img: sanskarImg },
		{ name: "SUHANI AUJEKAR", role: "HARDWARE TESTING", img: suhaniImg },
		{ name: "SHREYASH KORDE", role: "EMBEDDED DEVELOPER", img: skordeImg },
		{ name: "AKSHAY THAKARE", role: "MARKETING CO-ORDINATOR", img: akshayImg },
		{ name: "ROSHAN JUMALE", role: "SOCIAL MEDIA SPECIALIST", img: roshanImg },
	];

	const imgsectionStyle = {
		background: `radial-gradient(circle at top right, rgba(30,58,138,0.9), rgba(2,6,23,0.95)), url(${bgImg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		color: "white",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "40px 0",
		width: "100%",
		overflow: "hidden",
	};
	const teamHeroImgStyle = {
		maxWidth: "100%",
		width: "800px",
		height: "auto",
		borderRadius: "20px",
		boxShadow: "0 8px 8px rgba(237, 229, 229, 0.4)",
		border: "2px solid #3b82f6",
		filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.6))",
	};

	return (
		<div style={sectionStyle}>
			<div className="container">
				<div className="text-center mb-5">
					<h1
						style={{
							fontFamily: "Orbitron",
							letterSpacing: "4px",
							fontWeight: "bold",
							marginTop: "100px",
							color: "#FFD51E",
						}}>
						OUR CORE TEAM
					</h1>
				</div>

				<div className="row g-4 justify-content-center mb-5">
					<div className="col-10 col-sm-6 col-lg-3">
						<div style={{ ...cardStyle, border: "2px solid #3b82f6" }}>
							<img
								src={arjunImg}
								alt="Arjun Mahore"
								style={imgStyle}
								className="mx-auto d-block"
							/>{" "}
							<h4
								style={{
									fontFamily: "Orbitron",
									fontSize: "1.1rem",
									color: "#FFD51E",
								}}>
								ARJUN MAHORE
							</h4>
							<p className="text-white fw-bold small">CEO & FOUNDER</p>
						</div>
					</div>
					<div className="col-10 col-sm-6 col-lg-3">
						<div style={{ ...cardStyle, border: "2px solid #3b82f6" }}>
							<img
								src={shreyashImg}
								alt="Shreyash Gawande"
								style={imgStyle}
								className="mx-auto d-block"
							/>{" "}
							<h4
								style={{
									fontFamily: "Orbitron",
									fontSize: "1.1rem",
									color: "#FFD51E",
								}}>
								SHREYASH GAWANDE
							</h4>
							<p className="text-white fw-bold small">CEO & FOUNDER</p>
						</div>
					</div>
				</div>

				<div className="row justify-content-center mb-5">
					<div className="col-10 col-sm-6 col-lg-3 text-center">
						<div style={{ ...cardStyle, border: "2px solid #3b82f6" }}>
							<img
								src={mohImg}
								alt="Moh. Akhtar"
								style={imgStyle}
								className="mx-auto d-block"
							/>
							<h4
								style={{
									fontFamily: "Orbitron",
									fontSize: "1.1rem",
									color: "#FFD51E",
								}}>
								MOH. ATHAR
							</h4>
							<p className="text-white small">MANAGING DIRECTOR</p>
						</div>
					</div>
				</div>

				<div className="row g-3 justify-content-center">
					{teamMembers.map((member, index) => (
						<div className="col-6 col-md-4 col-lg-3" key={index}>
							<div style={{ ...cardStyle, border: "2px solid #3b82f6" }}>
								{/* <div
									style={{ ...imgStyle, width: "100px", height: "100px" }}
									className="mx-auto bg-secondary"></div> */}
								<img
									src={member.img}
									alt={member.name}
									style={{ ...imgStyle, width: "100px", height: "100px" }}
									className="mx-auto bg-secondary"
								/>
								<h6
									style={{
										fontFamily: "Orbitron",
										fontSize: "0.9rem",
										color: "#FFD51E",
									}}
									className="mb-1">
									{member.name}
								</h6>
								<p
									className="text-white small mb-0"
									style={{ fontSize: "0.7rem" }}>
									{member.role}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div style={imgsectionStyle}>
				<img src={teamImg} style={teamHeroImgStyle} alt="Team" />
			</div>
		</div>
	);
}

export default Team;
