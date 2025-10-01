import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Mail,
  ExternalLink,
  Code,
  Gamepad2,
  Languages,
  Laptop,
  Moon,
  Sun,
  Sparkles,
  Star,
  Linkedin,
  Send,
  MapPin,
} from "lucide-react";
import Portfolio from "../assets/horizontal-1.jpg";
import Andre from "../assets/Andre.png";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "pendidikan",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    bg: isDark
      ? "from-slate-900 via-purple-900 to-slate-900"
      : "from-purple-50 via-pink-50 to-blue-50",
    cardBg: isDark ? "bg-slate-800/50" : "bg-white/80",
    text: isDark ? "text-white" : "text-slate-900",
    textSecondary: isDark ? "text-gray-300" : "text-slate-700",
    textMuted: isDark ? "text-gray-400" : "text-slate-500",
    border: isDark ? "border-white/10" : "border-purple-200/50",
    navBg: isDark ? "bg-slate-900/95" : "bg-white/95",
    hoverBg: isDark ? "hover:bg-white/5" : "hover:bg-purple-100/50",
    inputBg: isDark ? "bg-slate-900/50" : "bg-white/70",
    shadow: isDark ? "shadow-purple-500/20" : "shadow-purple-300/30",
  };

  const projects = [
    {
      title: "Website Portofolio Pribadi",
      description: "Website Portofolio pribadi yang saya buat ",
      image: Portfolio,
      tags: ["HTML5", "Tailwind CSS", "Vite.js", "React.js"],
      gradient: "from-red-500 to-pink-500",
      features: ["Portfolio", "Website", "Static Website"],
      link: "https://github.com/AndriannDavaa/Portofolio.git",
    },
  ];

  const skills = [
    {
      category: "Web Development",
      icon: <Code className="w-8 h-8" />,
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "React.js",
        "Vite.js",
      ],
      color: "blue",
      level: "Intermediate",
    },
    {
      category: "Programming & Tools",
      icon: <Laptop className="w-8 h-8" />,
      items: ["Python", "Node.js", "Git & GitHub", "Termux", "Automation"],
      color: "green",
      level: "Beginner to Intermediate",
    },
    {
      category: "Languages",
      icon: <Languages className="w-8 h-8" />,
      items: [
        "Bahasa Indonesia (Native)",
        "English (English - Learning)",
        "日本語 (Japanese - Learning)",
      ],
      color: "pink",
      level: "Multilingual",
    },
  ];

  const pendidikan = [
    "SDN 50 KAUR-BENGKULU SELATAN",
    "MTs AL-IMAN-Unit 2 Tulang Bawang Lampung",
    "SMK AL-IMAN-Unit 2 Tulang Bawang Lampung",
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "andriandavamaulanaaa@gmail.com",
      link: "mailto:your.email@example.com",
      color: "blue",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "https://github.com/AndriannDavaa",
      link: "https://github.com/AndriannDavaa",
      color: "purple",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Indonesia",
      link: null,
      color: "green",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-500 relative overflow-hidden`}
    >
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.1}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? `${theme.navBg} backdrop-blur-lg shadow-2xl` : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Andrian Dava M
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "pendidikan",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize ${
                    activeSection === item
                      ? "bg-purple-500/20 text-purple-300"
                      : `${theme.textSecondary} hover:text-white ${theme.hoverBg}`
                  }`}
                >
                  {item}
                </button>
              ))}

              <button
                onClick={toggleTheme}
                className={`ml-4 p-2 rounded-lg ${theme.hoverBg} transition-all duration-300 hover:scale-110 ${theme.textSecondary}`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${theme.hoverBg} transition-colors ${theme.textSecondary}`}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${theme.text} p-2 rounded-lg ${theme.hoverBg} transition-colors`}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-80" : "max-h-0"}`}
        >
          <div
            className={`px-4 py-4 space-y-2 ${theme.navBg} backdrop-blur-lg border-t ${theme.border}`}
          >
            {[
              "home",
              "about",
              "skills",
              "projects",
              "pendidikan",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-2 rounded-lg ${theme.textSecondary} ${theme.hoverBg} transition-colors capitalize`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 z-40 group"
          aria-label="Scroll to top"
        >
          <Star className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
        </button>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-block p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6 animate-bounce-slow shadow-2xl">
              <div
                className={`w-24 h-24 ${isDark ? "bg-slate-900" : "bg-white"} rounded-full flex items-center justify-center text-5xl transition-colors duration-500`}
              >
                🌟
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Halo, Saya Andrian Dava Maulana
          </h1>

          <p
            className={`text-lg sm:text-xl md:text-2xl ${theme.textSecondary} mb-4`}
          >
            Self-Taught Developer & Creative Learner
          </p>

          <p
            className={`text-base sm:text-lg ${theme.textMuted} mb-8 max-w-2xl mx-auto leading-relaxed`}
          ></p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Lihat Proyek</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
            >
              Hubungi Saya
            </button>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 ${isDark ? "bg-white/5" : "bg-purple-100/50"} rounded-full ${theme.hoverBg} transition-all duration-300 hover:scale-110 ${theme.textMuted} hover:text-purple-400`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className={`p-3 ${isDark ? "bg-white/5" : "bg-purple-100/50"} rounded-full ${theme.hoverBg} transition-all duration-300 hover:scale-110 ${theme.textMuted} hover:text-purple-400`}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tentang Saya
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div
                className={`relative ${theme.cardBg} backdrop-blur-sm rounded-2xl p-8 border ${theme.border} h-96 flex items-center justify-center transition-all duration-500`}
              >
                {/* 🔹 Ganti emoji dengan gambar Andre */}
                <img
                  src={Andre}
                  alt="Foto Andre"
                  className="w-60 h-60 object-cover rounded-2xl shadow-xl border-4 border-purple-400"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className={`text-3xl font-bold ${theme.text} mb-4`}>
                Autodidact & Tech Enthusiast
              </h3>
              <p className={`${theme.textSecondary} leading-relaxed`}>
                Halo! Saya Andre, Saya suka belajar teknologi.
              </p>
              <p className={`${theme.textSecondary} leading-relaxed`}>
                Saya pemula yang suka belajar bahasa Jepang dan pemrograman.
                Saat ini saya fokus mengembangkan kemampuan melalui proyek kecil
                dan eksplorasi teknologi baru.
              </p>

              <div
                className={`${isDark ? "bg-purple-500/10 border-purple-500/30" : "bg-purple-100/50 border-purple-300/50"} border rounded-xl p-4 transition-colors duration-500`}
              >
                <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Focus Areas:
                </h4>
                <ul className={`${theme.textSecondary} space-y-1 text-sm`}>
                  <li>• Web Development (HTML, CSS, JS, React)</li>
                  <li>• Japanese Language Learning</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "JavaScript",
                  "React.js",
                  "Tailwind CSS",
                  "Python",
                  "Node.js",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 ${isDark ? "bg-purple-500/20 border-purple-500/30" : "bg-purple-100 border-purple-300/50"} text-purple-400 rounded-full text-sm font-medium border hover:bg-purple-500/30 transition-all duration-300 hover:scale-105 cursor-default`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className={`${theme.textMuted} mt-4 max-w-2xl mx-auto`}>
              Teknologi dan tools yang saya gunakan dalam development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${theme.cardBg} backdrop-blur-sm rounded-2xl p-8 border ${theme.border} hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${theme.shadow} group`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-4 rounded-xl ${isDark ? `bg-${skill.color}-500/20` : `bg-${skill.color}-100`} text-${skill.color}-400 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${theme.text}`}>
                      {skill.category}
                    </h3>
                    <span className={`text-sm ${theme.textMuted}`}>
                      {skill.level}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {skill.items.map((item) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 ${theme.textSecondary} hover:text-purple-400 transition-all duration-300 hover:translate-x-2`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-${skill.color}-400`}
                      ></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Proyek Saya
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className={`${theme.textMuted} mt-4 max-w-2xl mx-auto`}>
              Koleksi proyek yang telah saya kerjakan, dari web apps hingga game
              edukasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative ${theme.cardBg} backdrop-blur-sm rounded-2xl overflow-hidden border ${theme.border} hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${theme.shadow}`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} z-10`}
                  ></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-slate-900/80 to-transparent" : "from-white/80 to-transparent"} opacity-60`}
                  ></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold ${theme.text} mb-3 group-hover:text-purple-400 transition-colors`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`${theme.textMuted} text-sm mb-4 leading-relaxed`}
                  >
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className={`flex items-center gap-2 text-sm ${theme.textSecondary}`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}
                        ></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs ${isDark ? "bg-white/10" : "bg-purple-100"} ${theme.textMuted} rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2 border ${theme.border} rounded-lg ${theme.textSecondary} ${theme.hoverBg} transition-all duration-300 group-hover:border-purple-500/50 flex items-center justify-center gap-2`}
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="pendidikan" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Pendidikan
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className={`${theme.textMuted} mt-4 max-w-2xl mx-auto`}>
              Riwayat Pendidikan
            </p>
          </div>

          <div
            className={`${theme.cardBg} backdrop-blur-sm rounded-2xl p-8 md:p-12 border ${theme.border} shadow-2xl ${theme.shadow}`}
          >
            <div className="space-y-6">
              {pendidikan.map((goal, index) => (
                <div
                  key={index}
                  className={`flex gap-4 p-4 rounded-xl ${isDark ? "bg-white/5" : "bg-purple-50/50"} hover:bg-purple-500/10 transition-all duration-300 group`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <p
                    className={`${theme.textSecondary} leading-relaxed group-hover:text-purple-400 transition-colors flex-1`}
                  >
                    {goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Contact Section (ganti section contact lama dengan ini) === */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Mari Terhubung
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className={`${theme.textMuted} mt-4 max-w-2xl mx-auto`}>
              Saya terbuka untuk kolaborasi, diskusi proyek, atau sekadar
              berbincang tentang teknologi
            </p>
          </div>

          {/* grid dua kolom: kiri = contact info, kanan = form */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info Cards (kolom kiri) */}
            <div className="space-y-4">
              <h3 className={`text-2xl font-bold ${theme.text} mb-6`}>
                Informasi Kontak
              </h3>
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className={`${theme.cardBg} backdrop-blur-sm rounded-xl p-6 border ${theme.border} hover:border-purple-500/50 transition-all duration-300 group ${contact.link ? "cursor-pointer" : ""}`}
                  onClick={() =>
                    contact.link && window.open(contact.link, "_blank")
                  }
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg ${isDark ? `bg-${contact.color}-500/20` : `bg-${contact.color}-100`} text-${contact.color}-400 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${theme.text} mb-1`}>
                        {contact.label}
                      </h4>
                      <p
                        className={`text-sm ${theme.textMuted} group-hover:text-purple-400 transition-colors break-all`}
                      >
                        {contact.value}
                      </p>
                    </div>
                    {contact.link && (
                      <ExternalLink
                        className={`w-5 h-5 ${theme.textMuted} group-hover:text-purple-400 transition-colors flex-shrink-0`}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form (kolom kanan) */}
            <div
              className={`${theme.cardBg} backdrop-blur-sm rounded-2xl p-8 border ${theme.border} shadow-2xl ${theme.shadow}`}
            >
              <h3 className={`text-2xl font-bold ${theme.text} mb-6`}>
                Kirim Pesan
              </h3>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = (e.target.name.value || "").trim();
                  const email = (e.target.email.value || "").trim();
                  const message = (e.target.message.value || "").trim();

                  if (!name || !email || !message) {
                    alert("Mohon isi semua field sebelum mengirim.");
                    return;
                  }

                  // encode subject & body agar aman di URL
                  const subject = encodeURIComponent(`Pesan dari ${name}`);
                  const body = encodeURIComponent(
                    `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
                  );

                  // ubah ke email kamu di bawah
                  const to = "andriandavamaulanaaa@gmail.com"; // <-- ganti dengan emailmu

                  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
                }}
              >
                <div>
                  <label
                    className={`block text-sm font-medium ${theme.textSecondary} mb-2`}
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nama Anda"
                    className={`w-full px-4 py-3 ${theme.inputBg} ${theme.text} border ${theme.border} rounded-lg focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-sm`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium ${theme.textSecondary} mb-2`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email@example.com"
                    className={`w-full px-4 py-3 ${theme.inputBg} ${theme.text} border ${theme.border} rounded-lg focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-sm`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium ${theme.textSecondary} mb-2`}
                  >
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Tulis pesan Anda di sini..."
                    className={`w-full px-4 py-3 ${theme.inputBg} ${theme.text} border ${theme.border} rounded-lg focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-sm resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Kirim Pesan
                </button>
              </form>

              <p className={`text-xs ${theme.textMuted} mt-4 text-center`}>
                Atau hubungi saya langsung melalui email atau media sosial di
                atas
              </p>
            </div>
          </div>

          {/* Social Links (setelah grid) */}
          <div
            className={`${theme.cardBg} backdrop-blur-sm rounded-2xl p-8 border ${theme.border} text-center`}
          >
            <h3 className={`text-xl font-bold ${theme.text} mb-6`}>
              Temukan Saya di Platform Lain
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://github.com/AndriannDavaa"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 ${isDark ? "bg-white/5" : "bg-purple-100/50"} rounded-xl ${theme.hoverBg} transition-all duration-300 hover:scale-110 group`}
              >
                <Github
                  className={`w-6 h-6 ${theme.textMuted} group-hover:text-purple-400 transition-colors`}
                />
              </a>
              <a
                href="mailto:andriandavamaulanaaa@gmail.com"
                className={`p-4 ${isDark ? "bg-white/5" : "bg-purple-100/50"} rounded-xl ${theme.hoverBg} transition-all duration-300 hover:scale-110 group`}
              >
                <Mail
                  className={`w-6 h-6 ${theme.textMuted} group-hover:text-purple-400 transition-colors`}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 border-t ${theme.border} ${theme.cardBg} backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className={`${theme.textMuted} text-sm`}>
            © 2025 Andrian Dava M. Built with React & Tailwind CSS
          </p>
          <p className={`${theme.textMuted} text-xs mt-2`}>
            Designed with ❤️ and ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
