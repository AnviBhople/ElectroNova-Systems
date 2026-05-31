import React, { useState, useEffect, useRef } from "react";
import bgImg from "./images/background_img.jpg";

function Achievements() {
	const [showCertModal, setShowCertModal] = useState(false);
	const [activeMilestone, setActiveMilestone] = useState(0);
	const carouselRef = useRef(null);

	// Auto-scroll carousel
	useEffect(() => {
		const el = carouselRef.current;
		if (!el) return;
		const interval = setInterval(() => {
			el.scrollLeft += 1;
			if (el.scrollLeft >= el.scrollWidth / 2) {
				el.scrollLeft = 0;
			}
		}, 20);
		return () => clearInterval(interval);
	}, []);

	/* ─── STYLES matching MainApp.js / Services.js ─── */
	const sectionStyle = {
		background: `radial-gradient(circle at top right, rgba(30,58,138,0.9), rgba(2,6,23,0.95)), url(${bgImg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed",
		color: "white",
		minHeight: "100vh",
		paddingTop: "120px",
		paddingBottom: "80px",
	};

	const orbitron = { fontFamily: "Orbitron" };
	const inter = { fontFamily: "Inter" };

	const sectionLabel = {
		...inter,
		fontSize: "14px",
		letterSpacing: "4px",
		color: "#60a5fa",
		textTransform: "uppercase",
		marginBottom: "10px",
	};

	const sectionTitle = {
		...orbitron,
		fontSize: "44px",
		fontWeight: "bold",
		color: "#FFD51E",
		marginBottom: "14px",
	};

	const subText = {
		...inter,
		fontSize: "16px",
		lineHeight: "1.7",
		color: "#94a3b8",
		maxWidth: "580px",
		margin: "0 auto",
	};

	const divider = {
		width: "70px",
		height: "3px",
		background: "#3b82f6",
		borderRadius: "2px",
		margin: "18px auto 0",
	};

	/* stat box */
	const statBox = {
		background: "rgba(255,255,255,0.05)",
		border: "1px solid rgba(59,130,246,0.3)",
		borderRadius: "16px",
		padding: "28px 16px",
		textAlign: "center",
		backdropFilter: "blur(10px)",
		transition: "all 0.3s ease",
		cursor: "default",
	};

	/* highlight box */
	const hlBox = {
		background: "rgba(255,255,255,0.05)",
		border: "1px solid rgba(59,130,246,0.2)",
		borderRadius: "16px",
		padding: "24px 20px",
		backdropFilter: "blur(10px)",
		height: "100%",
	};

	/* timeline dot */
	const tlDot = {
		width: "14px",
		height: "14px",
		borderRadius: "50%",
		background: "#3b82f6",
		border: "3px solid #1e3a8a",
		boxShadow: "0 0 10px rgba(59,130,246,0.7)",
		flexShrink: 0,
		marginTop: "4px",
	};

	const tlDotActive = {
		...tlDot,
		width: "18px",
		height: "18px",
		background: "#60a5fa",
		boxShadow: "0 0 16px rgba(96,165,250,0.9)",
	};

	/* cert card */
	const certCard = {
		background: "rgba(255,255,255,0.04)",
		border: "1px solid rgba(255,255,255,0.1)",
		borderRadius: "14px",
		padding: "20px",
		display: "flex",
		gap: "14px",
		alignItems: "flex-start",
		transition: "all 0.3s ease",
		cursor: "default",
		backdropFilter: "blur(8px)",
	};

	/* founder box */
	const founderBox = {
		background: "rgba(255,255,255,0.05)",
		border: "1px solid rgba(59,130,246,0.25)",
		borderRadius: "20px",
		padding: "32px",
		backdropFilter: "blur(10px)",
	};

	const badge = {
		...inter,
		background: "rgba(59,130,246,0.15)",
		border: "1px solid rgba(59,130,246,0.35)",
		borderRadius: "30px",
		padding: "5px 14px",
		fontSize: "12px",
		color: "#93c5fd",
		display: "inline-flex",
		alignItems: "center",
		gap: "6px",
	};

	/* modal overlay */
	const modalOverlay = {
		position: "fixed",
		inset: 0,
		background: "rgba(2,6,23,0.92)",
		zIndex: 9999,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "20px",
	};

	const modalBox = {
		background: "rgba(15,30,80,0.98)",
		border: "1px solid rgba(59,130,246,0.3)",
		borderRadius: "20px",
		padding: "36px",
		maxWidth: "820px",
		width: "100%",
		maxHeight: "85vh",
		overflowY: "auto",
	};

	/* ─── DATA ─── */
	const schools = [
		"Wizz Kid's English Convent",
		"M.N.P. Primary Semi-English School (Namuna)",
		"Amravati Municipal Corporation Schools",
		"Mahanagar Palika Urdu Middle School No. 8",
		"AMC Upper Primary Hindi School No. 7",
		"MNP Hindi Boys High School, Talab Pura",
		"AMC Urdu Middle School No. 9",
		"Municipal Corp. Urdu Middle School No. 8",
		"AMC Marathi School No. 13",
		"AMC Marathi School No. 3",
		"MNP Hindi Primary School No. 8",
		"Amravati Mahanagar Parishad Marathi School No. 2",
	];

	const stats = [
		{ num: "3,000+", label: "Students Reached", icon: "bi-people-fill" },
		{ num: "100+", label: "Workshops Done", icon: "bi-tools" },
		{ num: "50+", label: "Schools Covered", icon: "bi-building" },
		{ num: "2", label: "Patents Granted", icon: "bi-award-fill" },
	];

	const highlights = [
  {
    icon: "bi-building-check",
    title: "School Workshop Impact",
    value: "3,000+ Students Reached",
    points: [
      "Robotics, AI & IoT sessions",
      "Hands-on technology learning",
      "School-level STEM exposure",
    ],
  },
  {
    icon: "bi-lightbulb-fill",
    title: "ATL & Innovation Learning",
    value: "Atal Tinkering Lab Support",
    points: [
      "Project-building activities",
      "Innovation-focused sessions",
      "Practical experiments",
    ],
  },
  {
    icon: "bi-tools",
    title: "Practical Skill Building",
    value: "Learning by Doing",
    points: [
      "Problem solving",
      "Hands-on assembly",
      "Team collaboration",
    ],
  },
  {
    icon: "bi-globe2",
    title: "Accessible STEM Education",
    value: "Affordable Learning Model",
    points: [
      "Low-cost kits",
      "Community workshops",
      "Guided trainer support",
    ],
  },
];

	const milestones = [
		{
			date: "Feb 3, 2026",
			title: "AI Basics Workshops Begin",
			sub: "Introduced Students to AI fundamentals sessions across multiple Amravati schools",
		},
		{
			date: "Feb 16, 2026",
			title: "Low-Cost Robotics Program",
			sub: "Delivered affordable robotics training to 500+ students in municipal schools",
		},
		{
			date: "Feb 18–21, 2026",
			title: "Drone Tech & ATL Sessions",
			sub: "Drone basics, ATL-focused activities, and student innovation learning.",
		},
		{
			date: "Feb 24–26, 2026",
			title: "Mass School Certification Drive",
			sub: "Recognized multiple schools for successful participation in STEM workshops.",
		},
		{
			date: "Mar 2–3, 2026",
			title: "IIT Kanpur — Boeing Workshops",
			sub: "Participated in advanced aeromodelling and innovation-focused workshop exposure.",
		},
		{
			date: "Ongoing",
			title: "2 National Patents Granted",
			sub: "1. Load Carrying Device_ 2· Food Feeding Machine for Differently-Abled",
		},
	];

	const allCertificates = [
		{ school: "M.N.P. Hindi Primary School No. 8 — Bajrang Plot", date: "21 Feb 2026", desc: "Appreciation for Robotics & Electronics workshop via Electronova System Pvt. Ltd." },
		{ school: "M.N.P. Upper Primary School No. 20 (Scholarship)", date: "26 Feb 2026", desc: "Recognized for Robotics & AI workshop with hands-on ATL activities." },
		{ school: "M.N.P. Urdu Pratha Marathi School — Budhwara", date: "18 Feb 2026", desc: "Certificate for IoT & Robotics program covering emerging technologies." },
		{ school: "A.M.C. Upper Primary Hindi School No. 7 — Vilas Nagar", date: "18 Feb 2026", desc: "Robotics & Electronics activity workshop appreciated by the headmaster." },
		{ school: "M.N.P. Hindi Urdu Primary School No. 2 — Gajanan Nagar", date: "18 Feb 2026", desc: "ATL Robotics & Drone workshops across 2 municipal schools." },
		{ school: "AMC Urdu Middle School No. 9 — Noor Nagar", date: "24 Feb 2026", desc: "Recognized for Robotics training and AI workshop sessions." },
		{ school: "MNP Hindi Boys High School — Talab Pura", date: "02 Mar 2026", desc: "Certificate for Robotics & AI sessions — fully English letter issued." },
		{ school: "M.N. Pa. Upper Primary English Convent No. 9", date: "03 Feb 2026", desc: "Appreciation for AI & Robotics workshop with ATL integration." },
		{ school: "Municipal Corp. Urdu Middle School No. 8 — Jamil Colony", date: "23 Feb 2026", desc: "Certificate recognizing Electronova's Robotics & STEM sessions." },
		{ school: "AMC Marathi School No. 13", date: "25 Feb 2026", desc: "Letter of appreciation for IoT, AI & Robotics workshop sessions." },
		{ school: "AMC Marathi School No. 3", date: "21 Feb 2026", desc: "Recognized for hands-on Robotics & Electronics education sessions." },
		{ school: "Amravati Mahanagar Parishad Marathi School No. 2", date: "16 Feb 2026", desc: "Appreciation for Robotics, AI & ATL-based workshop activities." },
		{ school: "11 Vara Ganesh Vidyalay (CEO Recognition)", date: "20 Feb 2026", desc: "Special recognition letter addressed to CEO Arjun Mahore." },
		{ school: "Amravati Nagarpalika Marathi School No. 3", date: "03 Mar 2026", desc: "Appreciation for conducting STEM and Robotics activities." },
		{ school: "MNP Primary Semi-English School (Namuna), Talabpura", date: "07 Feb 2026", desc: "English-language certificate for Robotics & AI workshop — covering all fundamentals and hands-on training." },
	];

	const arjunBadges = [
		{ icon: "bi-award-fill", text: "2 Patents" },
		{ icon: "bi-trophy-fill", text: "State Athlete" },
		{ icon: "bi-shield-fill", text: "NCC B Certificate" },
		{ icon: "bi-mortarboard-fill", text: "IIT Kanpur Mentor" },
		{ icon: "bi-star-fill", text: "Avishkar Winner" },
		{ icon: "bi-flag-fill", text: "Army Attachment Camp" },
	];

	const shreyashBadges = [
		{ icon: "bi-people-fill", text: "7,000+ Students" },
		{ icon: "bi-building", text: "100+ Schools" },
		{ icon: "bi-mortarboard-fill", text: "50+ College Workshops" },
		{ icon: "bi-airplane-fill", text: "IIT Kanpur Atal Trainer" },
		{ icon: "bi-cpu-fill", text: "IoT & Embedded Expert" },
	];

	// Duplicate schools for infinite scroll
	const scrollSchools = [...schools, ...schools];

	return (
		<div style={sectionStyle}>
			<div className="container">

				{/* ── HERO ── */}
				<div className="text-center mb-5" style={{ paddingTop: "40px" }}>
					<p style={sectionLabel}>Our Impact</p>
					<h1 style={sectionTitle}>ACHIEVEMENTS</h1>
					<p style={subText}>
						Milestones, recognitions, and certifications reflecting our
						commitment to transforming education through technology.
					</p>
					<div style={divider}></div>
				</div>

				{/* ── PARTNERING SCHOOLS CAROUSEL ── */}
				<div className="mb-5">
					<p className="text-center mb-3" style={{ ...sectionLabel, letterSpacing: "4px" }}>
						Partnering Schools
					</p>
					<div style={{ position: "relative", overflow: "hidden" }}>
						{/* fade edges */}
						<div style={{
							position: "absolute", left: 0, top: 0, bottom: 0, width: "60px",
							background: "linear-gradient(to right, rgba(2,6,23,0.9), transparent)",
							zIndex: 2, pointerEvents: "none",
						}} />
						<div style={{
							position: "absolute", right: 0, top: 0, bottom: 0, width: "60px",
							background: "linear-gradient(to left, rgba(2,6,23,0.9), transparent)",
							zIndex: 2, pointerEvents: "none",
						}} />
						<div
							ref={carouselRef}
							style={{
								display: "flex",
								gap: "16px",
								overflowX: "hidden",
								padding: "8px 0",
								scrollBehavior: "smooth",
							}}>
							{scrollSchools.map((school, i) => (
								<div
									key={i}
									style={{
										flexShrink: 0,
										background: "rgba(255,255,255,0.05)",
										border: "1px solid rgba(59,130,246,0.2)",
										borderRadius: "10px",
										padding: "10px 20px",
										...inter,
										fontSize: "13px",
										color: "#cbd5e1",
										whiteSpace: "nowrap",
										backdropFilter: "blur(8px)",
									}}>
									<i className="bi bi-building" style={{ color: "#60a5fa", marginRight: "8px" }}></i>
									{school}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* ── KEY HIGHLIGHTS ── */}
				<div className="text-center mb-4">
					<p style={sectionLabel}>What We've Accomplished</p>
					<h2 style={{ ...orbitron, fontSize: "26px",fontWeight: "800", color: "#FFD51E", marginBottom: "30px" }}>
						KEY HIGHLIGHTS
					</h2>
				</div>
				<div className="row g-4 mb-5">
					{highlights.map((h, i) => (
						<div className="col-12 col-md-6 col-lg-3" key={i}>
							<div style={hlBox}>
								<i className={`bi ${h.icon}`} style={{ fontSize: "26px", color: "#60a5fa", marginBottom: "12px", display: "block" }}></i>
								<div style={{ ...inter, fontSize: "14px", color: "#60a5fa", textTransform: "uppercase",fontWeight: "bold", marginBottom: "6px" }}>{h.title}</div>
								<div style={{ ...inter, fontSize: "15px", color: "#e2e8f0", marginBottom: "12px", fontWeight: "bold" }}>{h.value}</div>
								<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
									{h.points.map((p, j) => (
										<li key={j} style={{ ...inter, fontSize: "14px", color: "#e9da0f", marginBottom: "4px" }}>
											<i className="bi bi-check2" style={{ color: "#3b82f6", marginRight: "6px" }}></i>{p}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				{/* ── STATS ── */}
				<div className="row g-3 mb-5">
					{stats.map((s, i) => (
						<div className="col-6 col-md-4 col-lg" key={i}>
							<div
								style={statBox}
								onMouseEnter={e => {
									e.currentTarget.style.transform = "translateY(-6px)";
									e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)";
									e.currentTarget.style.boxShadow = "0 12px 32px rgba(59,130,246,0.18)";
								}}
								onMouseLeave={e => {
									e.currentTarget.style.transform = "translateY(0)";
									e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
									e.currentTarget.style.boxShadow = "none";
								}}>
								<i className={`bi ${s.icon}`} style={{ fontSize: "26px", color: "#60a5fa", marginBottom: "10px", display: "block" }}></i>
								<div style={{ ...orbitron, fontSize: "28px", color: "#60a5fa", fontWeight: "bold", lineHeight: 1, marginBottom: "8px" }}>{s.num}</div>
								<div style={{ ...inter, fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1.5px" }}>{s.label}</div>
							</div>
						</div>
					))}
				</div>

				{/* ── ACHIEVEMENT TIMELINE ── */}
				<div className="text-center mb-4">
					<p style={sectionLabel}>Our Journey</p>
					<h2 style={{ ...orbitron, fontSize: "26px", fontWeight: "800", color: "#FFD51E", marginBottom: "36px" }}>
						ACHIEVEMENT TIMELINE
					</h2>
				</div>

				{/* Horizontal scroll timeline */}
				<div style={{ overflowX: "auto", paddingBottom: "20px", marginBottom: "60px" }}>
					<div style={{ display: "flex", alignItems: "flex-start", minWidth: "max-content", gap: "0", position: "relative" }}>
						{/* connector line */}
						<div style={{ position: "absolute", top: "20px", left: "20px", right: "20px", height: "2px", background: "rgba(59,130,246,0.3)", zIndex: 0 }} />
						{milestones.map((m, i) => (
							<div
								key={i}
								style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "200px", cursor: "pointer", position: "relative", zIndex: 1 }}
								onClick={() => setActiveMilestone(i)}>
								<div style={i === activeMilestone ? tlDotActive : tlDot} />
								<div style={{
									marginTop: "16px",
									background: i === activeMilestone ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.04)",
									border: `1px solid ${i === activeMilestone ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.08)"}`,
									borderRadius: "12px",
									padding: "14px",
									width: "180px",
									transition: "all 0.3s ease",
								}}>
									<div style={{ ...inter, fontSize: "12px", color: "#3b82f6", marginBottom: "5px" }}>{m.date}</div>
									<div style={{ ...inter, fontSize: "14px", fontWeight: "600", color: "#e2e8f0", marginBottom: "5px", lineHeight: "1.4" }}>{m.title}</div>
									{i === activeMilestone && (
										<div style={{ ...inter, fontSize: "12px", color: "#e1ecfa", lineHeight: "1.5", marginTop: "6px", borderTop: "1px solid rgba(59,130,246,0.2)", paddingTop: "6px" }}>{m.sub}</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* ── SCHOOL CERTIFICATIONS ── */}
				<div className="text-center mb-4">
					<p style={sectionLabel}>Verified By</p>
					<h2 style={{ ...orbitron, fontSize: "26px",fontWeight: "800", color: "#FFD51E", marginBottom: "10px" }}>
						SCHOOL CERTIFICATIONS
					</h2>
					<p style={{ ...inter, fontSize: "14px", color: "#64748b", marginBottom: "30px" }}>
						Formally recognized by 15 schools across Amravati
					</p>
				</div>

				{/* Featured English Certificate */}
				<div
					style={{
						background: "rgba(59,130,246,0.08)",
						border: "1px solid rgba(59,130,246,0.4)",
						borderRadius: "18px",
						padding: "28px 32px",
						marginBottom: "24px",
						display: "flex",
						alignItems: "center",
						gap: "24px",
						flexWrap: "wrap",
						backdropFilter: "blur(10px)",
					}}>
					<div style={{
						width: "56px", height: "56px", borderRadius: "14px",
						background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.4)",
						display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
					}}>
						<i className="bi bi-patch-check-fill" style={{ fontSize: "24px", color: "#60a5fa" }}></i>
					</div>
					<div style={{ flex: 1 }}>
						<div style={{ ...inter, fontSize: "11px", color: "#60a5fa", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "6px" }}>Featured Certificate</div>
						<div style={{ ...orbitron, fontSize: "16px", color: "#e2e8f0", marginBottom: "6px" }}>MNP Primary Semi-English School, Talabpura — Amravati</div>
						<div style={{ ...inter, fontSize: "13px", color: "#94a3b8", lineHeight: "1.6" }}>
							Formal certificate for a successfully held Robotics & AI workshop covering all fundamentals, emerging technologies, and hands-on training. All trainers demonstrated practical skills and enthusiastic involvement.
						</div>
						<div style={{ ...inter, fontSize: "11px", color: "#3b82f6", marginTop: "8px" }}>
							<i className="bi bi-calendar3" style={{ marginRight: "5px" }}></i>07 Feb 2026
						</div>
					</div>
					<div style={{ ...inter, fontSize: "13px", color: "#64748b", textAlign: "center", flexShrink: 0 }}>
						<div style={{ ...orbitron, fontSize: "28px", color: "#60a5fa", fontWeight: "bold" }}>15</div>
						<div style={{ fontSize: "11px", letterSpacing: "1px" }}>TOTAL<br />CERTIFICATES</div>
					</div>
				</div>

				{/* 4 sample cert cards */}
				<div className="row g-3 mb-3">
					{allCertificates.slice(0, 4).map((c, i) => (
						<div className="col-12 col-md-6" key={i}>
							<div
								style={certCard}
								onMouseEnter={e => {
									e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
									e.currentTarget.style.background = "rgba(59,130,246,0.07)";
									e.currentTarget.style.transform = "translateY(-3px)";
								}}
								onMouseLeave={e => {
									e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
									e.currentTarget.style.background = "rgba(255,255,255,0.04)";
									e.currentTarget.style.transform = "translateY(0)";
								}}>
								<div style={{
									width: "40px", height: "40px", borderRadius: "10px",
									background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.3)",
									display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#60a5fa",
								}}>
									<i className="bi bi-patch-check-fill" style={{ fontSize: "16px" }}></i>
								</div>
								<div>
									<div style={{ ...inter, fontSize: "13px", fontWeight: "600", color: "#cbd5e1", marginBottom: "3px" }}>{c.school}</div>
									<div style={{ ...inter, fontSize: "12px", color: "#475569", lineHeight: "1.5" }}>{c.desc}</div>
									<div style={{ ...inter, fontSize: "11px", color: "#3b82f6", marginTop: "5px" }}>
										<i className="bi bi-calendar3" style={{ marginRight: "4px" }}></i>{c.date}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View all button */}
				<div className="text-center mb-5">
					<p style={{ ...inter, fontSize: "13px", color: "#475569", marginBottom: "14px" }}>
						+ {allCertificates.length - 4} more schools have issued formal appreciation letters
					</p>
					<button
						onClick={() => setShowCertModal(true)}
						style={{
							background: "transparent",
							border: "1px solid #3b82f6",
							borderRadius: "10px",
							padding: "11px 28px",
							color: "#60a5fa",
							...inter,
							fontSize: "14px",
							cursor: "pointer",
							transition: "all 0.3s ease",
						}}
						onMouseEnter={e => {
							e.currentTarget.style.background = "rgba(59,130,246,0.15)";
							e.currentTarget.style.color = "#fff";
						}}
						onMouseLeave={e => {
							e.currentTarget.style.background = "transparent";
							e.currentTarget.style.color = "#60a5fa";
						}}>
						<i className="bi bi-grid-3x3-gap-fill" style={{ marginRight: "8px" }}></i>
						View All Certificates
					</button>
				</div>

				{/* ── FOUNDER RECOGNITION ── */}
				<div className="text-center mb-4">
					<p style={sectionLabel}>Our Leaders</p>
					<h2 style={{ ...orbitron, fontSize: "26px",fontWeight: "800", color: "#FFD51E", marginBottom: "30px" }}>
						FOUNDER RECOGNITION
					</h2>
				</div>
				<div className="row g-4 mb-5">
					{/* Arjun */}
					<div className="col-12 col-lg-6">
						<div style={founderBox}>
							<div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
								<div style={{
									width: "50px", height: "50px", borderRadius: "50%",
									background: "rgba(59,130,246,0.2)", border: "2px solid #3b82f6",
									display: "flex", alignItems: "center", justifyContent: "center",
									...orbitron, fontSize: "14px", fontWeight: "bold", color: "#93c5fd",
								}}>AM</div>
								<div>
									<div style={{ ...inter, fontSize: "16px", fontWeight: "800", color: "#FFD51E" }}>Arjun Panditrao Mahore</div>
									<div style={{ ...inter, fontSize: "12px", color: "#3b82f6" }}>CEO & Founder</div>
									<div style={{ ...inter, fontSize: "11px", color: "#d2dae4" }}>BA in Yog Shastra · Pursuing MBA in IT</div>
								</div>
							</div>
							<p style={{ ...inter, fontSize: "13px", color: "#f2f1eb", lineHeight: "1.8", marginBottom: "16px" }}>
								Two-time University Colour Coat holder at Avishkar Competition, winner of 21 science project competitions, holder of 2 national patents, NCC B Certificate holder, Army Attachment Camp alumnus, and mentor at IIT Kanpur for Boeing Workshops.
							</p>
							<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
								{arjunBadges.map((b, i) => (
									<span key={i} style={badge}><i className={`bi ${b.icon}`}></i>{b.text}</span>
								))}
							</div>
						</div>
					</div>
					{/* Shreyash */}
					<div className="col-12 col-lg-6">
						<div style={founderBox}>
							<div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
								<div style={{
									width: "50px", height: "50px", borderRadius: "50%",
									background: "rgba(59,130,246,0.2)", border: "2px solid #3b82f6",
									display: "flex", alignItems: "center", justifyContent: "center",
									...orbitron, fontSize: "14px", fontWeight: "bold", color: "#93c5fd",
								}}>SG</div>
								<div>
									<div style={{ ...inter, fontSize: "16px", fontWeight: "800", color: "#FFD51E" }}>Shreyash Gawande</div>
									<div style={{ ...inter, fontSize: "12px", color: "#3b82f6" }}>Co-Founder & Director</div>
									<div style={{ ...inter, fontSize: "11px", color: "#d2dae4" }}>Expert in Embedded Systems, IoT & Robotics</div>
								</div>
							</div>
							<p style={{ ...inter, fontSize: "13px", color: "#f2f1eb", lineHeight: "1.8", marginBottom: "16px" }}>
								Conducted workshops in over 100 schools reaching more than 7,000 students, and 50+ workshops across engineering colleges. Atal Trainer with experience at IIT Kanpur during the Aero Modeling Festival. Designed multiple projects in electronics and telecommunication.
							</p>
							<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
								{shreyashBadges.map((b, i) => (
									<span key={i} style={badge}><i className={`bi ${b.icon}`}></i>{b.text}</span>
								))}
							</div>
						</div>
					</div>
				</div>

			</div>{/* /container */}

			{/* ── CERTIFICATES MODAL ── */}
			{showCertModal && (
				<div style={modalOverlay} onClick={() => setShowCertModal(false)}>
					<div style={modalBox} onClick={e => e.stopPropagation()}>
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
							<div>
								<h3 style={{ ...orbitron, fontSize: "20px", color: "#fff", marginBottom: "4px" }}>All Certificates</h3>
							</div>
							<button
								onClick={() => setShowCertModal(false)}
								style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "8px", color: "#94a3b8", width: "36px", height: "36px", cursor: "pointer", fontSize: "16px" }}>
								✕
							</button>
						</div>
						<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
							{allCertificates.map((c, i) => (
								<div key={i} style={{ ...certCard, background: "rgba(255,255,255,0.03)" }}>
									<div style={{
										width: "34px", height: "34px", borderRadius: "8px", flexShrink: 0,
										background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.3)",
										display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa",
									}}>
										<i className="bi bi-patch-check-fill" style={{ fontSize: "14px" }}></i>
									</div>
									<div>
										<div style={{ ...inter, fontSize: "12px", fontWeight: "600", color: "#cbd5e1", marginBottom: "2px" }}>{c.school}</div>
										<div style={{ ...inter, fontSize: "11px", color: "#3b82f6" }}>
											<i className="bi bi-calendar3" style={{ marginRight: "4px" }}></i>{c.date}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Achievements;