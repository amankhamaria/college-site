import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("undergraduate");
  const [activeDepartment, setActiveDepartment] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto slide for hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
      title: "Welcome to Sunrise University",
      subtitle: "Shaping Tomorrow's Leaders Since 1985",
      cta: "Explore Programs"
    },
    {
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200",
      title: "World-Class Education",
      subtitle: "Join 15,000+ Students in Their Journey to Excellence",
      cta: "Apply Now"
    },
    {
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
      title: "Research & Innovation",
      subtitle: "Leading Breakthrough Discoveries Across 50+ Labs",
      cta: "Learn More"
    }
  ];

  const departments = [
    {
      name: "Engineering & Technology",
      icon: "⚙️",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
      programs: ["Computer Science & Engineering", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Electronics & Communication"],
      students: "3,200+",
      faculty: "180",
      labs: "45"
    },
    {
      name: "Business & Management",
      icon: "💼",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
      programs: ["MBA", "BBA", "Commerce", "Finance & Accounting", "Marketing Management"],
      students: "2,800+",
      faculty: "120",
      labs: "12"
    },
    {
      name: "Medical Sciences",
      icon: "🏥",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
      programs: ["MBBS", "BDS", "Pharmacy", "Nursing", "Medical Laboratory Technology"],
      students: "1,500+",
      faculty: "200",
      labs: "38"
    },
    {
      name: "Arts & Humanities",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600",
      programs: ["English Literature", "History", "Psychology", "Sociology", "Fine Arts"],
      students: "1,200+",
      faculty: "95",
      labs: "8"
    },
    {
      name: "Science",
      icon: "🔬",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600",
      programs: ["Physics", "Chemistry", "Mathematics", "Biotechnology", "Environmental Science"],
      students: "1,800+",
      faculty: "145",
      labs: "52"
    },
    {
      name: "Law",
      icon: "⚖️",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600",
      programs: ["BA LLB", "LLB", "LLM", "Corporate Law", "Criminal Law"],
      students: "900+",
      faculty: "65",
      labs: "5"
    }
  ];

  const facilities = [
    {
      title: "Smart Classrooms",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500",
      description: "150+ digitally equipped classrooms with interactive boards and high-speed internet"
    },
    {
      title: "Central Library",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500",
      description: "Over 2 lakh books, 500+ journals, and 24/7 digital library access"
    },
    {
      title: "Sports Complex",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500",
      description: "Olympic-sized pool, indoor stadium, cricket ground, and 15+ sports facilities"
    },
    {
      title: "Hostels",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500",
      description: "Separate boys & girls hostels with 4,000+ beds, mess, gym, and recreation rooms"
    },
    {
      title: "Medical Center",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500",
      description: "24/7 medical facility with qualified doctors, ambulance, and emergency services"
    },
    {
      title: "Cafeteria & Food Courts",
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500",
      description: "5 cafeterias offering diverse cuisine options with hygienic food preparation"
    },
    {
      title: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3250a529?w=500",
      description: "State-of-the-art labs for AI, Robotics, IoT, and emerging technologies"
    },
    {
      title: "Auditorium",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500",
      description: "3,000-seater air-conditioned auditorium with modern audio-visual systems"
    }
  ];

  const achievements = [
    { number: "15,000+", label: "Students Enrolled", icon: "👨‍🎓" },
    { number: "850+", label: "Expert Faculty", icon: "👨‍🏫" },
    { number: "180+", label: "Research Labs", icon: "🔬" },
    { number: "95%", label: "Placement Rate", icon: "💼" },
    { number: "500+", label: "Corporate Partners", icon: "🤝" },
    { number: "50+", label: "Countries (Students)", icon: "🌍" },
    { number: "₹12 LPA", label: "Avg. Package", icon: "💰" },
    { number: "A+", label: "NAAC Grade", icon: "🏆" }
  ];

  const studentTestimonials = [
    {
      name: "Priya Sharma",
      course: "B.Tech CSE, 2023",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      company: "Google",
      quote: "The rigorous curriculum and supportive faculty at Sunrise helped me land my dream job at Google. The practical exposure through projects and internships was invaluable.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      course: "MBA, 2022",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      company: "McKinsey & Company",
      quote: "The MBA program transformed my career trajectory. Case studies, industry interactions, and mentorship from experienced professors gave me real-world business acumen.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      course: "MBBS, 2021",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      company: "AIIMS Delhi",
      quote: "The medical program here is exceptional. From well-equipped labs to experienced doctors as teachers, everything prepared me for my medical career perfectly.",
      rating: 5
    },
    {
      name: "Arjun Singh",
      course: "B.Sc Physics, 2023",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      company: "ISRO",
      quote: "Got selected for ISRO right after graduation! The research opportunities and guidance from professors made all the difference in my preparation.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      course: "BA LLB, 2022",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      company: "Supreme Court",
      quote: "The law faculty is outstanding. Moot courts, legal aid clinics, and practical training prepared me for the competitive legal world excellently.",
      rating: 5
    },
    {
      name: "Karthik Iyer",
      course: "B.Tech Mechanical, 2023",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      company: "Tesla",
      quote: "From robotics competitions to industry visits, Sunrise gave me exposure beyond textbooks. Now I'm working on cutting-edge automotive technology!",
      rating: 5
    }
  ];

  const campusLife = [
    {
      title: "Annual Fest - Spectrum",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
      description: "3-day cultural extravaganza with celebrity performances, competitions, and 10,000+ participants"
    },
    {
      title: "Technical Symposium",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600",
      description: "National-level tech fest featuring hackathons, paper presentations, and workshops"
    },
    {
      title: "Sports Meet",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600",
      description: "Inter-college tournaments in cricket, football, basketball, athletics, and more"
    },
    {
      title: "Student Clubs",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
      description: "45+ active clubs including coding, music, dance, drama, photography, and social service"
    },
    {
      title: "International Exchange",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
      description: "Semester exchange programs with partner universities in 15+ countries"
    },
    {
      title: "Industry Visits",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
      description: "Regular visits to top companies and research institutions for practical exposure"
    }
  ];

  const placements = [
    { company: "Google", logo: "https://img.icons8.com/color/96/google-logo.png", offers: 45 },
    { company: "Microsoft", logo: "https://img.icons8.com/color/96/microsoft.png", offers: 38 },
    { company: "Amazon", logo: "https://img.icons8.com/color/96/amazon.png", offers: 52 },
    { company: "Flipkart", logo: "https://img.icons8.com/color/96/flipkart.png", offers: 41 },
    { company: "TCS", logo: "https://img.icons8.com/color/96/tata.png", offers: 180 },
    { company: "Infosys", logo: "https://img.icons8.com/color/96/infosys.png", offers: 165 },
    { company: "Wipro", logo: "https://img.icons8.com/color/96/wipro.png", offers: 142 },
    { company: "Deloitte", logo: "https://img.icons8.com/color/96/deloitte.png", offers: 56 }
  ];

  const programs = {
    undergraduate: [
      { degree: "B.Tech", duration: "4 Years", seats: 1200, departments: ["CSE", "ECE", "Mechanical", "Civil", "Electrical"] },
      { degree: "BBA", duration: "3 Years", seats: 240, departments: ["Finance", "Marketing", "HR", "Operations"] },
      { degree: "B.Sc", duration: "3 Years", seats: 360, departments: ["Physics", "Chemistry", "Mathematics", "Biology"] },
      { degree: "BA", duration: "3 Years", seats: 300, departments: ["English", "History", "Psychology", "Sociology"] },
      { degree: "BCA", duration: "3 Years", seats: 180, departments: ["Computer Applications"] },
      { degree: "B.Com", duration: "3 Years", seats: 240, departments: ["General", "Honors"] },
      { degree: "BA LLB", duration: "5 Years", seats: 120, departments: ["Integrated Law"] },
      { degree: "BDS", duration: "5 Years", seats: 100, departments: ["Dental Surgery"] },
      { degree: "MBBS", duration: "5.5 Years", seats: 150, departments: ["Medicine"] },
      { degree: "B.Pharma", duration: "4 Years", seats: 120, departments: ["Pharmacy"] }
    ],
    postgraduate: [
      { degree: "M.Tech", duration: "2 Years", seats: 300, departments: ["CSE", "VLSI", "Power Systems", "Structural Engg"] },
      { degree: "MBA", duration: "2 Years", seats: 240, departments: ["Finance", "Marketing", "HR", "IT", "Operations"] },
      { degree: "M.Sc", duration: "2 Years", seats: 180, departments: ["Physics", "Chemistry", "Maths", "Biotech"] },
      { degree: "MA", duration: "2 Years", seats: 150, departments: ["English", "History", "Psychology"] },
      { degree: "MCA", duration: "2 Years", seats: 120, departments: ["Computer Applications"] },
      { degree: "M.Com", duration: "2 Years", seats: 100, departments: ["Commerce"] },
      { degree: "LLM", duration: "1 Year", seats: 60, departments: ["Corporate Law", "Criminal Law"] },
      { degree: "MD", duration: "3 Years", seats: 80, departments: ["Various Specializations"] },
      { degree: "M.Pharma", duration: "2 Years", seats: 60, departments: ["Pharmaceutics", "Pharmacology"] }
    ],
    doctoral: [
      { degree: "Ph.D", duration: "3-5 Years", seats: 200, departments: ["All Departments"] },
      { degree: "D.Sc", duration: "3-5 Years", seats: 50, departments: ["Science & Engineering"] }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">SU</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Sunrise University</h1>
                <p className="text-xs text-gray-600">Excellence in Education</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#departments" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Departments</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Programs</a>
              <a href="#facilities" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Facilities</a>
              <a href="#placements" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Placements</a>
              <a href="#campus" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Campus Life</a>
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="relative h-screen mt-20">
        <div className="absolute inset-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            </div>
          ))}
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                  {heroSlides[currentSlide].cta}
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-all">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-8" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.slice(0, 4).map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Sunrise University
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="leading-relaxed">
                  Established in 1985, Sunrise University has been a beacon of academic excellence for over three decades. 
                  Located on a sprawling 250-acre campus, we provide world-class education to over 15,000 students from 
                  India and 50+ countries worldwide.
                </p>
                <p className="leading-relaxed">
                  Our university is recognized by UGC, AICTE, and accredited with A+ grade by NAAC. We offer over 
                  120 programs across undergraduate, postgraduate, and doctoral levels in diverse fields including 
                  Engineering, Medicine, Management, Law, Arts, and Sciences.
                </p>
                <p className="leading-relaxed">
                  With 850+ highly qualified faculty members, 180+ state-of-the-art laboratories, and partnerships 
                  with 500+ leading corporations, we ensure our students receive holistic education combining 
                  theoretical knowledge with practical skills.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-1">38+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-1">50K+</div>
                  <div className="text-sm text-gray-600">Alumni Network</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=400"
                alt="Campus"
                className="rounded-xl shadow-lg h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400"
                alt="Students"
                className="rounded-xl shadow-lg h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400"
                alt="Library"
                className="rounded-xl shadow-lg h-64 object-cover -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400"
                alt="Lab"
                className="rounded-xl shadow-lg h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of departments offering cutting-edge programs designed for the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
                onClick={() => setActiveDepartment(activeDepartment === index ? null : index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-4xl mb-2">{dept.icon}</div>
                    <h3 className="text-xl font-bold">{dept.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{dept.students}</div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{dept.faculty}</div>
                      <div className="text-xs text-gray-600">Faculty</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{dept.labs}</div>
                      <div className="text-xs text-gray-600">Labs</div>
                    </div>
                  </div>
                  {activeDepartment === index && (
                    <div className="mt-4 pt-4 border-t">
                      <h4 className="font-semibold text-gray-900 mb-2">Programs Offered:</h4>
                      <ul className="space-y-1">
                        {dept.programs.map((program, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                            {program}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button className="mt-4 w-full py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                    {activeDepartment === index ? "Show Less" : "View Programs"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Academic Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from 120+ programs across various disciplines
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-xl p-1 shadow-lg">
              <button
                onClick={() => setActiveTab("undergraduate")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "undergraduate"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Undergraduate
              </button>
              <button
                onClick={() => setActiveTab("postgraduate")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "postgraduate"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Postgraduate
              </button>
              <button
                onClick={() => setActiveTab("doctoral")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "doctoral"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Doctoral
              </button>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs[activeTab].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{program.degree}</h3>
                    <p className="text-gray-600">{program.duration}</p>
                  </div>
                  <div className="bg-blue-100 px-3 py-1 rounded-full">
                    <span className="text-blue-700 font-semibold text-sm">{program.seats} seats</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.departments.map((dept, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="mt-4 w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to enhance your learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      <section id="placements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Placement Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our students are recruited by top companies worldwide with excellent packages
            </p>
          </div>

          {/* Placement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.slice(4).map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Top Recruiters */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Top Recruiters</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {placements.map((company, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-50 rounded-xl p-4 mb-3 group-hover:bg-blue-50 transition-colors">
                    <img
                      src={company.logo}
                      alt={company.company}
                      className="w-16 h-16 mx-auto"
                    />
                  </div>
                  <div className="text-xs font-medium text-gray-900">{company.company}</div>
                  <div className="text-xs text-blue-600">{company.offers} offers</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our alumni who are making a difference across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentTestimonials.map((student, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-16 h-16 rounded-full mr-4 ring-4 ring-blue-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{student.name}</h4>
                    <p className="text-sm text-gray-600">{student.course}</p>
                    <p className="text-xs text-blue-600 font-semibold">{student.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(student.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{student.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section id="campus" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vibrant Campus Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond academics - experience a holistic college life filled with activities and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusLife.map((activity, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {activity.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200"
            alt="Campus"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 15,000+ students who are shaping their future at Sunrise University. Applications are now open for 2024-25 academic year.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 rounded-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all">
              Apply Online
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent text-white rounded-xl font-bold border-2 border-white hover:bg-white hover:text-blue-600 transition-all">
              Download Brochure
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-white">
            <div>
              <div className="text-2xl font-bold">June 30, 2024</div>
              <div className="text-sm opacity-90">Application Deadline</div>
            </div>
            <div>
              <div className="text-2xl font-bold">July 15, 2024</div>
              <div className="text-sm opacity-90">Entrance Exam</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Aug 1, 2024</div>
              <div className="text-sm opacity-90">Session Begins</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* About */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SU</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sunrise University</h3>
                  <p className="text-xs text-gray-400">Excellence in Education Since 1985</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Empowering students with quality education, research opportunities, and holistic development 
                to create future leaders and innovators.
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  123 University Road, Education City, State - 110001
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  +91 1800-123-4567
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span>
                  admissions@sunriseuniversity.edu
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Academics</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Campus Life</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Alumni</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Library</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">E-Learning</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Student Portal</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Faculty Portal</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Examination</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Results</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm mb-6">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Media</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Events</a></li>
              </ul>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Sunrise University. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Sitemap</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Grievance Redressal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;