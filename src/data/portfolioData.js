const portfolioData = {
  personal: {
    name: "Santhosh G R",
    title: "Member Technical Staff @ Zoho Corporation",
    email: "6901santhosh@gmail.com",
    phone: "+91 8680901973",
    linkedin: "https://linkedin.com/in/santhosh-g-r",
    tagline:
      "C++ & Systems Developer with expertise in native desktop applications, embedded software, and IoT solutions.",
  },

  experience: [
    {
      company: "Zoho Corporation",
      role: "Member Technical Staff",
      period: "Aug 2024 – Present",
      location: "Chennai, Tamil Nadu",
      points: [
        "Working as a C++ Windows native developer for the product ManageEngine Endpoint Central.",
        "Developing and maintaining desktop application features for endpoint management solutions.",
        "Occasionally works on Go for developing UI pop-ups in Windows.",
      ],
      techStack: ["C++", "Go", "Windows Native"],
    },
    {
      company: "Mistral Solutions",
      role: "Embedded Software Engineer",
      period: "Aug 2023 – July 2024",
      location: "Bengaluru, Karnataka",
      points: [
        "Worked on a Defence project involving Qt C++ development on a Linux platform.",
        "Implemented communication protocols including UDP and MIL-STD 1553B for defence applications.",
        "Developed platform-specific software applications enhancing software efficiency by 40%.",
      ],
      techStack: ["Qt C++", "Linux", "UDP", "MIL-STD 1553B"],
    },
    {
      company: "Mistral Solutions",
      role: "Software Engineer Intern",
      period: "Jan 2023 – July 2023",
      location: "Bengaluru, Karnataka",
      points: [
        "Worked on IoT projects involving data transmission through MQTT protocol.",
        "Gained hands-on experience with basics of Qt C++ framework.",
        "Tech Stack: Python, MQTT, Java; Database: Firebase.",
      ],
      techStack: ["Python", "MQTT", "Java", "Firebase", "Qt C++"],
    },
  ],

  education: [
    {
      institution: "National Engineering College",
      degree: "B.Tech in Information Technology",
      location: "Kovilpatti, Tamil Nadu",
      period: "2019 – 2023",
      score: "CGPA: 8.24",
    },
    {
      institution: "St. John's Matric Hr Sec School",
      degree: "HSC",
      location: "Madurai, Tamil Nadu",
      period: "2019",
      score: "79.16%",
    },
    {
      institution: "St. John's Matric Hr Sec School",
      degree: "SSLC",
      location: "Madurai, Tamil Nadu",
      period: "2017",
      score: "91%",
    },
  ],

  skills: {
    languages: [
      { name: "C++", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "Go", level: "Intermediate" },
    ],
    frameworks: [{ name: "Qt C++", level: "Advanced" }],
    coursework: ["OOP Concepts", "DBMS", "Desktop Application Development"],
  },

  projects: [
    {
      title: "Release Management System",
      period: "Nov 2022 – Jan 2025",
      description:
        "Desktop application that completely focuses on the releases of the project from start to deployment, leave records and product shipments.",
      techStack: ["C#", ".NET"],
    },
    {
      title: "Neernilai Kankanipu Maiyam",
      period: "2022",
      tag: "IoT Project",
      description:
        "IoT-based water level monitoring system for efficient water management.",
      techStack: ["Python", "MQTT", "IoT Sensors"],
    },
    {
      title: "Smart Fish Tank System",
      period: "2022",
      tag: "IoT Project",
      description:
        "IoT-based smart aquarium system for automated fish tank monitoring and maintenance.",
      techStack: ["Python", "MQTT", "IoT Sensors"],
    },
  ],

  certifications: [
    "Sololearn C",
    "CareerEdge – Knockdown the LockDown (TCS iON)",
    "Developing Soft Skills (NPTEL)",
    "Business English Certificate – Vantage",
  ],

  extracurricular: [
    "NSS Volunteer",
    "Computer Society of India – Student President",
  ],
};

export default portfolioData;
