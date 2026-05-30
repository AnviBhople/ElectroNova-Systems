import React from "react";
import { Link } from "react-router-dom";

function Contact() {
	const sectionStyle = {
		background:
			"radial-gradient(circle at top right, rgba(30,58,138,0.9), rgba(2,6,23,0.95))",
		color: "white",
		minHeight: "100vh",
		paddingTop: "120px",
		paddingBottom: "60px",
	};

	const cardStyle = {
		background: "rgba(255,255,255,0.05)",
		padding: "30px",
		borderRadius: "15px",
		backdropFilter: "blur(10px)",
		fontFamily: "Inter",
		textAlign: "center",
		border: "1px solid #fff",
	};

	const buttonStyle = {
		background: "#3b82f6",
		border: "none",
		padding: "10px 20px",
		borderRadius: "8px",
		color: "white",
		cursor: "pointer",
		fontFamily: "Inter",
		fontSize: "larger",
		marginRight: "10px",
		marginTop: "10px",
	};

	const inputStyle2 = {
		width: "400px",
		padding: "10px",
		marginBottom: "15px",
		borderRadius: "8px",
		border: "none",
		outline: "none",
		fontFamily: "Inter",
	};
	const inputStyle = {
		width: "100%",
		padding: "10px",
		marginBottom: "15px",
		borderRadius: "8px",
		border: "none",
		outline: "none",
		fontFamily: "Inter",
	};
	const para = {
		fontSize: "16px",
		lineHeight: "1.6",
		color: "#bcc4cf",
		fontFamily: "Inter",
	};

	const addStyle = {
		fontFamily: "Inter",
		fontSize: "1.3rem",
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Your message has been sent successfully.");
	};

	return (
		<div style={sectionStyle}>
			<div className="container">
				<div className="text-center mb-5">
					<h1
						style={{
							fontFamily: "Orbitron",
							marginTop: "20px",
							color: "#FFD51E",
							fontWeight: "bold",
							fontSize: "3rem",
						}}>
						Contact Us
					</h1>
					<p style={para}>We’d love to hear from you. Reach out anytime.</p>
				</div>

				<div className="row mb-5">
					<div className="col-12 col-md-6 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = "scale(1.01)";
								e.currentTarget.style.boxShadow =
									"0 5px 5px rgb(140, 135, 135)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = "scale(1)";
								e.currentTarget.style.boxShadow = "none";
							}}>
							<h3
								style={{
									fontFamily: "Orbitron",
									color: "#FFD51E",
									fontWeight: "bold",
								}}>
								Get In Touch
							</h3>
							<br />
							<p style={{ fontSize: "1.3rem" }}>📞 +91 7821826676</p>
							<br />
							<p style={{ fontSize: "1.3rem" }}>📞 +91 7796179037</p>
							<br />
							<p style={{ fontSize: "1.3rem" }}>📧 electronova@gmail.com</p>

							<Link to="tel:+917821826676">
								<button style={buttonStyle}>Call Now</button>
							</Link>

							<Link
								to="https://wa.me/917821826676"
								target="_blank"
								rel="noreferrer">
								<button style={buttonStyle}>WhatsApp</button>
							</Link>

							<Link to="mailto:electronova@gmail.com">
								<button style={buttonStyle}>Email Us</button>
							</Link>
						</div>
					</div>

					<div className="col-12 col-md-6 mb-4">
						<div
							style={cardStyle}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = "scale(1.01)";
								e.currentTarget.style.boxShadow =
									"0 5px 5px rgb(140, 135, 135)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = "scale(1)";
								e.currentTarget.style.boxShadow = "none";
							}}>
							<h3
								style={{
									fontFamily: "Orbitron",
									color: "#FFD51E",
									fontWeight: "bold",
								}}>
								Our Address
							</h3>
							<br />
							<p style={addStyle}>
								📍House No. 45/2, Gajanan Township, Kathora, <br />
								Amravati - 444602, Maharashtra, India
							</p>
							<br />
							<br />
							<h3
								style={{
									fontFamily: "Orbitron",
									color: "#FFD51E",
									fontWeight: "bold",
								}}>
								Opening Hours
							</h3>
							<p style={addStyle}>
								Monday – Saturday <br />
								9:00 AM – 6:00 PM
							</p>
						</div>
					</div>
				</div>

				<div
					className="row align-items-center"
					style={{ minHeight: "80vh", color: "#fff", padding: "20px" }}>
					<div className="col-12 col-md-5 mb-5 mb-md-0 text-center text-md-start">
						<p
							className="mb-4"
							style={{
								fontSize: "1.3rem",
								lineHeight: "1.6",
								fontWeight: "bold",
								color: "#fff",
								fontFamily: "Inter",
							}}>
							Enter your contact information to complete your booking.
						</p>

						<p
							style={{
								fontSize: "1.2rem",
								fontWeight: "500",
								color: "#FFD51E",
							}}>
							Need help? &ensp;
							<br />
							<span style={{ color: "#ff4d6d" }}>☎</span> +91 7796179037
							<br />
							<span style={{ color: "#ff4d6d" }}>☎</span>
							+91 7821826676
						</p>
					</div>

					<div className="col-12 col-md-7">
						<div style={cardStyle}>
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label
										className="form-label d-block text-start mb-1"
										style={{ fontWeight: "600", fontFamily: "inherit" }}>
										Name <span style={{ color: "red" }}>*</span>
									</label>
									<input
										type="text"
										placeholder="Josh Doe"
										className="form-control"
										style={{ ...inputStyle2, borderRadius: "10px" }}
									/>
								</div>

								<div className="mb-3">
									<label
										className="form-label d-block text-start mb-1"
										style={{ fontWeight: "600", fontFamily: "inherit" }}>
										Email <span style={{ color: "red" }}>*</span>
									</label>
									<input
										type="email"
										placeholder="example@gmail.com"
										className="form-control"
										style={{ ...inputStyle2, borderRadius: "10px" }}
									/>
								</div>

								<div className="mb-3">
									<label
										className="form-label d-block text-start mb-1"
										style={{ fontWeight: "600", fontFamily: "inherit" }}>
										City <span style={{ color: "red" }}>*</span>
									</label>
									<input
										type="text"
										placeholder="Mumbai"
										className="form-control"
										style={{ ...inputStyle2, borderRadius: "10px" }}
									/>
								</div>

								<div className="mb-3">
									<label
										className="form-label d-block text-start mb-1"
										style={{ fontWeight: "600", fontFamily: "inherit" }}>
										Phone Number <span style={{ color: "red" }}>*</span>
									</label>
									<input
										type="tel"
										placeholder="+91-1234567890"
										className="form-control"
										style={{ ...inputStyle2, borderRadius: "10px" }}
									/>
								</div>

								<div className="mb-4">
									<label
										className="form-label d-block text-start mb-1"
										style={{ fontWeight: "600", fontFamily: "inherit" }}>
										Additional Query
									</label>
									<textarea
										placeholder="Send us a message..."
										rows="4"
										className="form-control"
										style={{ ...inputStyle, borderRadius: "10px" }}></textarea>
								</div>

								<div className="text-center mt-4">
									<button
										type="submit"
										style={{
											...buttonStyle,
											backgroundColor: "#ffcc00",
											color: "#000",
											fontWeight: "bolder",
											border: "none",
											padding: "15px 50px",
											letterSpacing: "1px",
											fontSize: "1.3rem",
											borderRadius: "10px",
											display: "inline-block",
											fontFamily: "Inter",
										}}>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
