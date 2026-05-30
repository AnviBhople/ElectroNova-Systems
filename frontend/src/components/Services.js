import React, { useState } from "react";
import serviceImg1 from "./images/serviceImg1.png";
import serviceImg2 from "./images/serviceImg2.png";
import serviceImg3 from "./images/serviceImg3.png";
import serviceImg4 from "./images/serviceImg4.png";
import serviceImg5 from "./images/serviceImg5.png";
import serviceImg6 from "./images/serviceImg6.png";
import serviceImg7 from "./images/serviceImg7.png";

function Services() {
	const [openIndex, setOpenIndex] = useState(null);

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
		backgroundColor: "#dcedfd",

		padding: "20px",
		borderRadius: "15px",
		backdropFilter: "blur(10px)",
		fontFamily: "Inter",
		textAlign: "center",
		height: "100%",
		transition: "all 0.3s ease",
		cursor: "pointer",
		border: "1px solid #f8e6e6",
	};

	const para = {
		fontSize: "16px",
		lineHeight: "1.6",
		color: "#bcc4cf",
		fontFamily: "Inter",
		textAlign: "justify",
	};

	const faqStyle = {
		background: "rgba(255,255,255,0.05)",
		padding: "20px",
		borderRadius: "10px",
		marginBottom: "15px",
		fontFamily: "Inter",
		cursor: "pointer",
	};

	const answerStyle = {
		marginTop: "10px",
		color: "#bcc4cf",
		fontSize: "14px",
	};

	const services = [
		{
			title: "Robotics Kits & Training",
			img: serviceImg1,
		},
		{
			title: "AI & IoT Education",
			img: serviceImg2,
		},
		{
			title: "STEM & STEAM Programs",
			img: serviceImg3,
		},
		{
			title: "Lab Setup Solutions",
			img: serviceImg4,
		},
		{
			title: "Internship & Skill Development",
			img: serviceImg5,
		},
		{
			title: "Technical Support & Maintenance",
			img: serviceImg6,
		},
		{
			title: "Workshops & Innovation Events",
			img: serviceImg7,
		},
	];

	const faqs = [
		{
			q: "What services do you offer?",
			a: "We specialize in customized white-label solutions, turning your ideas into fully developed products tailored to your requirements. Alongside this, we work with government schools and private colleges to deliver workshops and training programs and provide B2B services by supplying robotics kits in bulk for industrial and institutional needs.",
		},
		{
			q: "Do you work with schools and institutions?",
			a: "Yes, we collaborate with institutions and schools through tender-based programs. Once a tender is approved by the relevant authorities, we deliver our services in accordance with the specified requirements, ensuring quality and compliance at every stage.",
		},
		{
			q: "Do you offer customized training or products?",
			a: "Absolutely, we design customized kits and training modules based on your needs.",
		},
		{
			q: "How can I contact you?",
			a: "You can reach us via phone, email, or WhatsApp from the contact page.",
		},
		{
			q: "What are your business hours?",
			a: "We operate Monday to Saturday from 9:00 AM to 6:00 PM.",
		},
		{
			q: "What kind of training kits do you offer and are they beginner friendly?",
			a: "We offer beginner to advanced level kits with guided learning modules.",
		},
	];

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
						Services We Provide
					</h1>
					<p
						style={{
							fontWeight: "normal",
							fontSize: "1.2rem",
							fontFamily: "Inter",
						}}>
						Transforming ideas into innovation through technology-driven
						learning.
					</p>
					<br />
					<p style={para}>
						Empowering innovation through robotics, AI, and hands-on learning
						experiences designed to inspire creativity, strengthen
						problem-solving abilities, and equip learners with future-ready
						technical skills. From foundational concepts to advanced
						applications, our programs encourage practical exploration and
						real-world innovation.{" "}
					</p>
				</div>
				<div className="row mb-5">
					{services.map((service, index) => (
						<div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
							<div
								style={cardStyle}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "scale(1.01)";
									e.currentTarget.style.boxShadow =
										"0 5px 5px rgb(243, 239, 239)";
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
										height: "250px",
										width: "400px",
									}}
								/>
								<br />
								<h5
									style={{
										fontFamily: "Inter",
										fontSize: "x-large",
										color: "#000",
										fontWeight: "bold",
									}}>
									{service.title}
								</h5>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mb-4">
					<h1
						style={{
							fontFamily: "Orbitron",
							color: "#FFD51E",
							fontWeight: "bold",
						}}>
						FAQs
					</h1>
				</div>
				<div className="row">
					{faqs.map((faq, index) => (
						<div className="col-12" key={index}>
							<div
								style={faqStyle}
								onClick={() =>
									setOpenIndex(openIndex === index ? null : index)
								}>
								<strong>
									{faq.q}
									{openIndex === index ? "▲" : "▼"}
								</strong>
								{openIndex === index && <p style={answerStyle}>{faq.a}</p>}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;
