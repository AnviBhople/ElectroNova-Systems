import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImg from "./images/background_img.jpg";
import teamImg from "./images/teamImg.png";

function About() {
	const [active, setActive] = useState(0);

	const yellow = "#FFD51E";
	const cyan = "#38bdf8";
	const blue = "#3b82f6";
	const text = "#c1c8d2";

	const learnData = [
		{
			title: "Robotics",
			text: "Build, test, and understand robotic systems through hands-on kits and practical learning.",
		},
		{
			title: "Artificial Intelligence & ML",
			text: "Learn the basics of intelligent systems, automation, and machine learning applications.",
		},
		{
			title: "IoT & Smart Technologies",
			text: "Explore sensors, smart devices, connectivity, and real-world IoT-based solutions.",
		},
		{
			title: "Innovation & Project Building",
			text: "Convert ideas into working models through guided project-based learning.",
		},
	];

	const whatWeDo = [
		[
			"fa-solid fa-robot",
			"Robotics Kits & Tools",
			"Hands-on kits that help students understand electronics, robotics, and automation practically.",
		],
		[
			"fa-solid fa-chalkboard-user",
			"Training Programs & Workshops",
			"Interactive STEM programs designed for schools, institutions, and young innovators.",
		],
		[
			"fa-solid fa-screwdriver-wrench",
			"Lab Setup Services",
			"Support for setting up innovation labs, robotics labs, and Atal Tinkering Labs.",
		],
		[
			"fa-solid fa-briefcase",
			"Internship & Project-Based Learning",
			"Guided learning experiences that connect students with real-world technology projects.",
		],
	];

	const whyChoose = [
		[
			"STEM Programs for Ages 5+",
			"Learning experiences designed for young students as well as budding engineers.",
		],
		[
			"Hands-On Practical Learning",
			"Students learn by building, testing, experimenting, and improving real projects.",
		],
		[
			"21st-Century Skill Building",
			"We focus on teamwork, creativity, critical thinking, and problem-solving.",
		],
		[
			"Professional Trainer Network",
			"Our trainers and teachers guide students with practical and industry-relevant knowledge.",
		],
		[
			"Real-World Technology Exposure",
			"Students explore robotics, coding, IoT, embedded systems, and project-based innovation.",
		],
	];

	const page = {
		background: `radial-gradient(circle at top right, rgba(30,58,138,0.9), rgba(2,6,23,0.95)), url(${bgImg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		color: "white",
		minHeight: "100vh",
		paddingTop: "120px",
		fontFamily: "Inter",
	};

	const heading = {
		fontFamily: "Orbitron",
		color: yellow,
		fontWeight: "bold",
		fontSize: "clamp(1.75rem, 3.2vw, 2.55rem)",
		letterSpacing: "3px",
		marginBottom: "18px",
	};

	const para = {
		color: text,
		fontSize: "17px",
		lineHeight: "1.7",
		fontFamily: "Inter",
	};

	const card = {
		background: "rgba(255,255,255,0.06)",
		border: "1px solid rgba(255,255,255,0.14)",
		borderRadius: "18px",
		padding: "28px",
		height: "100%",
		backdropFilter: "blur(10px)",
		boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
		transition: "all 0.35s ease",
	};

	const iconCircle = {
		width: "55px",
		height: "55px",
		borderRadius: "50%",
		display: "grid",
		placeItems: "center",
		margin: "0 auto 18px",
		background: "rgba(59,130,246,0.18)",
		border: "1px solid rgba(56,189,248,0.35)",
		color: "#67e8f9",
		fontSize: "22px",
	};

	const glowEnter = (e) => {
		e.currentTarget.style.transform = "translateY(-8px)";
		e.currentTarget.style.borderColor = "rgba(56,189,248,0.75)";
		e.currentTarget.style.boxShadow =
			"0 0 28px rgba(56,189,248,0.35), 0 18px 40px rgba(59,130,246,0.25)";
	};

	const glowLeave = (e) => {
		e.currentTarget.style.transform = "translateY(0)";
		e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
		e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.25)";
	};

	const learnBtn = (index) => ({
		padding: "12px 24px",
		borderRadius: "50px",
		border: "1px solid rgba(56,189,248,0.75)",
		background:
			active === index
				? "linear-gradient(135deg, #06b6d4, #38bdf8)"
				: "rgba(255,255,255,0.035)",
		color: active === index ? "#06172f" : "white",
		fontWeight: "bold",
		minWidth: "190px",
		cursor: "pointer",
		transition: "all 0.35s ease",
		boxShadow:
			active === index
				? "0 0 24px rgba(56,189,248,0.45), 0 12px 26px rgba(56,189,248,0.25)"
				: "0 0 10px rgba(56,189,248,0.08)",
	});

	return (
		<div style={page}>
			<div className="container py-5">
				<section className="row align-items-center my-5">
					<div className="col-12 col-md-6 text-center text-md-start">
						<h1
							style={{
								...heading,
								fontSize: "clamp(3rem, 6vw, 5.2rem)",
								marginBottom: "22px",
							}}>
							About Us
						</h1>

						<h3
							style={{
								color: "#e5e7eb",
								fontSize: "20px",
								fontWeight: "bold",
								lineHeight: "1.5",
								marginBottom: "20px",
							}}>
							Empowering Tomorrow’s Innovators Through Hands-On STEM Education
						</h3>

						<p style={para}>
							ElectroNova Systems is an organization offering STEM programs for
							ages 5 and above. We prepare students to build essential
							21st-century skills through teamwork, creativity, and critical
							thinking using robotics, coding, and embedded systems
							technologies. Our professional network of trainers and teachers
							provides support to budding engineers and students, fostering
							real-world connections and endless possibilities in STEM.
						</p>

						<div
							style={{
								width: "90px",
								height: "3px",
								background: "linear-gradient(90deg, #06b6d4, transparent)",
								marginTop: "26px",
							}}
						/>
					</div>

					<div className="col-12 col-md-6 text-center mt-4 mt-md-0">
						<div
							style={{
								background: "rgba(255,255,255,0.05)",
								padding: "14px",
								borderRadius: "20px",
								backdropFilter: "blur(10px)",
								display: "inline-block",
								maxWidth: "620px",
								width: "100%",
								border: "1px solid rgba(255,255,255,0.14)",
								boxShadow: "0 0 28px rgba(56,189,248,0.12)",
							}}>
							<img
								src={teamImg}
								alt="Students learning robotics"
								className="img-fluid"
								style={{
									width: "100%",
									height: "300px",
									objectFit: "cover",
									objectPosition: "center",
									borderRadius: "14px",
									display: "block",
								}}
							/>
						</div>
					</div>
				</section>

				<section className="my-5 py-4 text-center">
					<h2 style={heading}>What We Do</h2>

					<p style={{ ...para, maxWidth: "850px", margin: "0 auto" }}>
						We design and deliver innovative learning solutions that bring
						technology and creativity together through advanced tools, training,
						and infrastructure.
					</p>

					<div className="row g-4 mt-4">
						{whatWeDo.map(([icon, title, desc], index) => (
							<div className="col-12 col-md-6 col-lg-3" key={index}>
								<div
									style={card}
									onMouseEnter={glowEnter}
									onMouseLeave={glowLeave}>
									<div style={iconCircle}>
										<i className={icon}></i>
									</div>

									<h5 style={{ color: "white", fontWeight: "bold" }}>
										{title}
									</h5>

									<p style={{ ...para, fontSize: "14px" }}>{desc}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="my-5 py-4">
					<h2 className="text-center" style={heading}>
						Our Mission & Vision
					</h2>

					<div className="row g-4 mt-4">
						<div className="col-12 col-md-6">
							<div style={{ ...card, borderLeft: `5px solid ${yellow}` }}>
								<h3
									style={{
										color: yellow,
										fontFamily: "Orbitron",
										fontSize: "1.35rem",
										marginBottom: "18px",
									}}>
									Our Mission
								</h3>

								<p style={para}>
									To empower students and institutions with hands-on STEM
									education that builds teamwork, creativity, critical thinking,
									and real-world problem-solving skills. Through robotics,
									coding, and embedded systems, we aim to prepare young
									innovators for the technologies of tomorrow.
								</p>
							</div>
						</div>

						<div className="col-12 col-md-6">
							<div style={{ ...card, borderLeft: `5px solid ${yellow}` }}>
								<h3
									style={{
										color: yellow,
										fontFamily: "Orbitron",
										fontSize: "1.35rem",
										marginBottom: "18px",
									}}>
									Our Vision
								</h3>

								<p style={para}>
									To inspire every student to explore, create, and succeed as a
									future innovator. We envision a generation actively involved
									in science, technology, engineering, and creativity, with the
									confidence to turn ideas into real-world solutions.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="my-5 py-4 text-center">
					<h2 style={heading}>What You Will Learn</h2>

					<p style={{ ...para, maxWidth: "850px", margin: "0 auto" }}>
						Students explore practical technologies through guided learning,
						experiments, and project-based activities.
					</p>

					<div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
						{learnData.map((item, index) => (
							<button
								key={index}
								onClick={() => setActive(index)}
								style={learnBtn(index)}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "translateY(-4px)";
									e.currentTarget.style.boxShadow =
										"0 0 22px rgba(56,189,248,0.35), 0 10px 22px rgba(56,189,248,0.2)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "translateY(0)";
									e.currentTarget.style.boxShadow =
										active === index
											? "0 0 24px rgba(56,189,248,0.45), 0 12px 26px rgba(56,189,248,0.25)"
											: "0 0 10px rgba(56,189,248,0.08)";
								}}>
								{item.title}
							</button>
						))}
					</div>

					<p
						style={{
							...para,
							maxWidth: "800px",
							margin: "28px auto 0",
							padding: "22px 0",
							borderTop: "1px solid rgba(56,189,248,0.4)",
							borderBottom: "1px solid rgba(56,189,248,0.18)",
							color: "#e0f2fe",
						}}>
						{learnData[active].text}
					</p>
				</section>

				<section className="my-5 py-4">
					<h2 className="text-center" style={heading}>
						Why Choose Us?
					</h2>

					<div className="row align-items-start mt-4">
						<div className="col-12 col-md-5 mb-4 mb-md-0">
							<p
								style={{
									color: cyan,
									letterSpacing: "4px",
									fontSize: "13px",
									fontWeight: "bold",
									textTransform: "uppercase",
								}}>
								Why Electronova
							</p>

							<h3
								style={{
									color: "white",
									fontFamily: "Orbitron",
									fontSize: "clamp(1.4rem, 2.7vw, 2rem)",
									lineHeight: "1.4",
									marginBottom: "18px",
								}}>
								Learning that connects imagination with real technology.
							</h3>

							<p style={para}>
								Our programs make technology simple, practical, and exciting for
								students. We focus on meaningful learning instead of just
								theoretical understanding.
							</p>
						</div>

						<div className="col-12 col-md-7">
							{whyChoose.map(([title, desc], index) => (
								<div
									key={index}
									className="d-flex gap-3 pb-3 mb-3"
									style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
									<div
										style={{
											minWidth: "42px",
											height: "42px",
											borderRadius: "50%",
											background: yellow,
											color: "#06172f",
											display: "grid",
											placeItems: "center",
											fontWeight: "bold",
										}}>
										{String(index + 1).padStart(2, "0")}
									</div>

									<div>
										<h5
											style={{
												color: "white",
												fontWeight: "bold",
												marginBottom: "6px",
											}}>
											{title}
										</h5>

										<p style={{ ...para, fontSize: "14px", marginBottom: 0 }}>
											{desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section
					className="my-5 text-center"
					style={{
						...card,
						padding: "46px 30px",
					}}>
					<h2 style={heading}>Let’s Build the Future Together</h2>

					<p style={{ ...para, textAlign: "center" }}>
						Partner with us to create practical, future-ready learning
						experiences.
					</p>

					<Link to="/contact-us">
						<button
							style={{
								background: blue,
								border: "none",
								padding: "12px 26px",
								borderRadius: "8px",
								color: "white",
								cursor: "pointer",
								fontWeight: "bold",
								marginTop: "18px",
								transition: "all 0.3s ease",
								boxShadow: "0 0 18px rgba(59,130,246,0.25)",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.boxShadow =
									"0 0 24px rgba(56,189,248,0.45)";
								e.currentTarget.style.transform = "translateY(-3px)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.boxShadow =
									"0 0 18px rgba(59,130,246,0.25)";
								e.currentTarget.style.transform = "translateY(0)";
							}}>
							Contact Us
						</button>
					</Link>
				</section>
			</div>
		</div>
	);
}

export default About;
