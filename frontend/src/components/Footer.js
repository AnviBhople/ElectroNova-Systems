import { Link } from "react-router-dom";
import bgImg from "./images/background_img.jpg";

function Footer() {
	const footerStyle = {
		padding: "50px 20px",
		fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
		color: "#fff",
		background: `radial-gradient(circle at top right, rgba(30,58,138,0.85), rgba(2,6,23,0.95)), url(${bgImg})`,
		borderTop: "1px solid rgba(255, 255, 255, 0.1)",
	};

	const copyrightText = {
		textAlign: "center",
		marginBottom: "40px",
		fontSize: "1rem",
		letterSpacing: "1px",
		color: "rgba(255, 255, 255, 0.7)",
	};

	const iconStyle = {
		fontSize: "18px",
		color: "#FFD51E",
		marginRight: "10px",
	};

	const sectionTitle = {
		marginBottom: "20px",
		color: "#FFD51E",
		fontFamily: "Orbitron, sans-serif",
		fontWeight: "bold",
		fontSize: "1.3rem",
		letterSpacing: "1px",
		textTransform: "uppercase",
	};

	const linkListStyle = {
		listStyleType: "none",
		paddingLeft: 0,
		margin: 0,
	};

	const linkItemStyle = {
		borderBottom: "2px solid #FFD51E",
		paddingBottom: "8px",
		marginBottom: "12px",
	};

	const linkTextStyle = {
		color: "rgba(255, 255, 255, 0.95)",
		textDecoration: "none",
		fontSize: "0.95rem",
		fontFamily: "Inter",
		textTransform: "uppercase",
		letterSpacing: "0.5px",
		display: "block",
		transition: "color 0.2s ease-in-out",
	};

	const infoTextStyle = {
		fontSize: "0.95rem",
		lineHeight: "1.6",
		color: "rgba(255, 255, 255, 0.85)",
	};

	const socialIconsContainer = {
		display: "flex",
		gap: "20px",
		marginTop: "15px",
	};

	const socialIconStyle = {
		fontSize: "1.5rem",
		color: "#fff",
		transition: "color 0.3s ease",
		cursor: "pointer",
	};

	return (
		<footer style={footerStyle}>
			<div style={copyrightText}>©2026 Electronova Systems</div>

			<div className="container">
				<div className="row g-4 text-start">
					<div className="col-12 col-md-5 mb-4">
						<h4 style={sectionTitle}>Our Location</h4>
						<p style={infoTextStyle} className="mb-4">
							<i
								className="fa-solid fa-map-pin"
								style={{ ...iconStyle, color: "red" }}></i>
							House No. 45/2, At Post Gajanan Township,
							<br />
							&nbsp;&nbsp;&nbsp;&nbsp;Kathora, Amravati - 444602, Maharashtra
						</p>
						<br />
						<h4 style={sectionTitle}>Opening Hours</h4>
						<p style={infoTextStyle}>
							Monday – Saturday <br />
							9:00 AM – 6:00 PM
						</p>
					</div>

					<div className="col-12 col-md-3 mb-4">
						<h4 style={sectionTitle}>Quick Links</h4>
						<br />
						<ul style={linkListStyle}>
							<li style={linkItemStyle}>
								<Link to="/about-us" style={linkTextStyle}>
									Our Story
								</Link>
							</li>
							<li style={linkItemStyle}>
								<Link to="/products" style={linkTextStyle}>
									Products
								</Link>
							</li>
							<li style={linkItemStyle}>
								<Link to="/our-services" style={linkTextStyle}>
									Services
								</Link>
							</li>
							<li style={linkItemStyle}>
								<Link to="/training-kits" style={linkTextStyle}>
									Training Kits
								</Link>
							</li>
							<li style={linkItemStyle}>
								<Link to="/our-achievements" style={linkTextStyle}>
									Our Achievements
								</Link>
							</li>
							<li style={linkItemStyle}>
								<Link to="/contact-us" style={linkTextStyle}>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className="col-12 col-md-4 mb-4 text-md-end d-flex flex-column align-items-md-end">
						<div>
							<h4 style={sectionTitle}>Reach Us</h4>
							<p
								style={{ ...infoTextStyle, fontSize: "1.1rem" }}
								className="mb-3">
								<i
									className="fa-regular fa-envelope"
									style={{
										fontSize: "1.6rem",
										color: "#fff",
										marginRight: "8px",
									}}></i>
								electronova@gmail.com
							</p>

							<div
								style={socialIconsContainer}
								className="justify-content-start justify-content-md-end">
								<Link
									to="https://www.linkedin.com/company/electronova-systems-pvt-ltd"
									target="_blank"
									rel="noreferrer">
									<i
										className="fa-brands fa-linkedin"
										style={socialIconStyle}></i>
								</Link>
								<Link
									to="https://www.instagram.com/electronovasystem/"
									target="_blank"
									rel="noreferrer">
									<i
										className="fa-brands fa-instagram"
										style={socialIconStyle}></i>
								</Link>
								<Link to="https://twitter.com" target="_blank" rel="noreferrer">
									<i
										className="fa-brands fa-x-twitter"
										style={socialIconStyle}></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
