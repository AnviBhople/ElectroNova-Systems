import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/ElectroNova_logo_trial.png";

function Navbar() {
	const navbarStyle = {
		backgroundColor: "transparent",
		padding: "20px 30px",
		fontFamily: "Orbitron",
		position: "fixed",
		top: "0",
		left: "0",
		width: "100%",
		zIndex: "1000",
	};

	const logoStyle = {
		height: "110px",
		width: "auto",
		borderRadius: "10px",
	};

	const navLinkStyle = {
		fontSize: "20px",
		margin: "0 15px 0 20px",
		color: "#fff",
		cursor: "pointer",
		textDecoration: "none",
	};

	const iconStyle = {
		fontSize: "24px",
		color: "#fff",
		marginLeft: "15px",
		cursor: "pointer",
	};

	return (
		<nav className="navbar navbar-expand-lg" style={navbarStyle}>
			<div className="container-fluid">
				<Link to="/">
					<img src={logo} alt="Logo" style={logoStyle} />
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarContent"
					aria-controls="navbarContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" style={navLinkStyle} className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about-us" style={navLinkStyle} className="nav-link">
								Our Story
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/products" style={navLinkStyle} className="nav-link">
								Products
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/contact-us" style={navLinkStyle} className="nav-link">
								Contact
							</Link>
						</li>

						<li className="nav-item">
							<Link
								to="/our-achievements"
								style={navLinkStyle}
								className="nav-link">
								Our Achievements
							</Link>
						</li>

						<li className="nav-item">
							<Link
								to="/training-kits"
								style={navLinkStyle}
								className="nav-link">
								Training Kits
							</Link>
						</li>

						<li className="nav-item">
							<Link
								to="/our-services"
								style={navLinkStyle}
								className="nav-link">
								Services
							</Link>
						</li>
					</ul>

					<div className="d-flex">
						<a
							href="mailto:electronovasystemspvtltd@gmail.com"
							target="_blank"
							rel="noreferrer">
							<i className="fa-regular fa-envelope" style={iconStyle}></i>
						</a>

						<a
							href="https://www.linkedin.com/company/electronova-systems-pvt-ltd"
							target="_blank"
							rel="noreferrer">
							<i className="fa-brands fa-linkedin" style={iconStyle}></i>
						</a>

						<a
							href="https://www.instagram.com/electronovasystem/"
							target="_blank"
							rel="noreferrer">
							<i className="fa-brands fa-instagram" style={iconStyle}></i>
						</a>

						<a href="https://twitter.com" target="_blank" rel="noreferrer">
							<i className="fa-brands fa-x-twitter" style={iconStyle}></i>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
