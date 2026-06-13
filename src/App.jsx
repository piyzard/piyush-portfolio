import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

// ==========================================
// 1. DOCK APPS CONFIGURATION
// ==========================================
const DOCK_APPS = [
  {
    id: 'about-me',
    title: 'About Me',
    iconBgColor: 'bg-gradient-to-tr from-slate-200 to-white',
    isImageIcon: true,
    iconContent: <img src="/bitmoji.png" alt="Avatar" className="w-full h-full object-cover rounded-[12px]" />,
    windowContent: (
      <div className="p-6 text-neutral-800 space-y-6 select-text font-sans pb-4">
        {/* Title */}
        <h2 className="text-4xl font-bold tracking-tight text-neutral-900">About me</h2>
        
        {/* Top Profile Section */}
        <div className="flex flex-col sm:flex-row items-stretch sm:space-x-6 space-y-4 sm:space-y-0">
          {/* Your personalized image asset wrapper */}
          <img 
            src="/piyush-prasad.jpg" 
            alt="Piyush Prasad" 
            className="w-32 h-36 rounded-2xl object-cover shadow-sm flex-shrink-0" 
          />
          
          {/* Profile Meta Fields */}
          <div className="flex-1 w-full flex flex-col justify-between py-0.5 space-y-2">
            <div className="flex items-baseline border-b border-neutral-200 pb-2">
              <span className="text-xs font-bold tracking-wider text-neutral-800 uppercase w-24">Name</span>
              <span className="text-base text-neutral-700 font-medium">Piyush Prasad</span>
            </div>
            <div className="flex items-baseline border-b border-neutral-200 pb-2">
              <span className="text-xs font-bold tracking-wider text-neutral-800 uppercase w-24">Position</span>
              <span className="text-base text-neutral-700 font-medium">Software Developer</span>
            </div>
            <div className="flex items-baseline border-b border-neutral-200 pb-2">
              <span className="text-xs font-bold tracking-wider text-neutral-800 uppercase w-24">Mail</span>
              <a href="mailto:piyushprasad121@gmail.com" className="text-base text-blue-600 font-medium hover:underline">
                piyushprasad121@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bio Box Component */}
        <div className="bg-neutral-100 rounded-xl p-5 space-y-4 border border-neutral-200/40">
          <p className="text-base leading-relaxed text-neutral-900 font-bold">
            I'm Piyush Prasad, a Software Developer focused on building scalable web applications and AI-powered solutions.
          </p>
          <p className="text-base leading-relaxed text-neutral-700 font-medium">
            For the past 5 years, I've been developing digital products across web, mobile, and data-driven platforms. 
            I specialize in MERN, Python, and SQL, creating everything from intelligent chatbots and Android applications 
            to e-commerce platforms and modern portfolio experiences.
          </p>
        </div>

        {/* Location Section */}
        <div className="space-y-4 pt-2">
          <h3 className="text-xl font-bold text-neutral-900 tracking-tight">Location</h3>
          
          {/* Wrapper for Interactive Maps Viewport Layer */}
          <div className="relative w-full h-64 bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200 shadow-sm group">
            <iframe
              title="Kolkata Location Map"
              src="https://maps.google.com/maps?q=Kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 z-10 pointer-events-auto"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          
          {/* Action Footer Row */}
          <div className="flex justify-end pt-1">
            <a 
              href="mailto:piyushprasad121@gmail.com"
              className="bg-neutral-200/80 hover:bg-neutral-200 text-neutral-800 text-sm font-bold px-5 py-2.5 rounded-xl border border-neutral-300/40 shadow-sm transition-all pointer-events-auto"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'notes',
    title: 'Notes',
    iconBgColor: 'bg-transparent', // Neutral background for custom image assets
    isImageIcon: true, // Tells the system this is a graphics asset layer
    iconContent: <img src="/notes-icon.png" alt="Notes" className="w-full h-full object-cover rounded-[12px]" />,
    windowContent: React.createElement(() => {
      // 1. ALL ORIGINAL RESUME DATA RESTORED
      const NOTES_DATA = {
        skills: {
          title: "Skills",
          date: "June 12, 2026 at 12:32 PM",
          previewText: "Programming Languages...",
          content: (
            <div className="space-y-5 text-[15px] text-neutral-800 font-normal leading-[1.6]">
              <div>
                <p className="font-bold text-neutral-900 text-lg border-b border-neutral-100 pb-0.5 mb-1.5">Programming Languages</p>
                <p className="text-neutral-700 font-medium">JavaScript (ES6+), TypeScript, Python, SQL, Java, C/C++</p>
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-lg border-b border-neutral-100 pb-0.5 mb-1.5">Frontend Engineering</p>
                <p className="text-neutral-700 font-medium">React.js, Next.js, Vite, HTML5, CSS3, Tailwind CSS, Framer Motion, Responsive Design, Progressive Web Apps (PWA)</p>
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-lg border-b border-neutral-100 pb-0.5 mb-1.5">Backend Engineering</p>
                <p className="text-neutral-700 font-medium">Node.js, Express.js, REST APIs, Authentication & Authorization, Firebase, MongoDB, PostgreSQL, MySQL</p>
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-lg border-b border-neutral-100 pb-0.5 mb-1.5">AI & LLM Development</p>
                <p className="text-neutral-700 font-medium">OpenAI API, Claude, Claude Code, Google AI Studio, Gemini API, Cursor AI, GitHub Copilot, Perplexity AI, LangChain, Prompt Engineering, Retrieval-Augmented Generation (RAG), AI Agents, Workflow Automation</p>
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-lg border-b border-neutral-100 pb-0.5 mb-1.5">Data & Analytics</p>
                <p className="text-neutral-700 font-medium">Python, NumPy, Pandas, SQL Analytics, Data Visualization, ETL Pipelines, Business Intelligence</p>
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-lg border-b border-neutral-100 pb-0.5 mb-1.5">Cloud & DevOps</p>
                <p className="text-neutral-700 font-medium">Git, GitHub, Linux, Docker, Vercel, Netlify, CI/CD, MongoDB Atlas, Postman</p>
              </div>
            </div>
          )
        },
        experience: {
          title: "Experience",
          date: "June 05, 2026 at 11:14 AM",
          previewText: "Customer Support Associate, Software Engineer...",
          content: (
            <div className="space-y-6 text-[15px] text-neutral-800 font-normal leading-[1.6]">
              {/* Role 1: Flipkart */}
              <div className="space-y-1">
                <p className="font-bold text-neutral-900 text-lg">Customer Support Associate</p>
                <p className="font-medium text-base text-neutral-800">Flipkart (Teleperformance)</p>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                  Bangalore (Aug. 2025 – Nov. 2025)
                </p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-700 pt-1.5 font-medium">
                  <li>Resolved 10K+ customer inquiries and escalations weekly across multiple communication channels, maintaining high customer satisfaction through effective communication, active listening, and problem-solving skills.</li>
                  <li>Collaborated with cross-functional operations, logistics, and support teams to streamline issue resolution processes, reducing average turnaround times by 25%.</li>
                  <li>Leveraged AI-powered productivity tools and knowledge management systems to improve response efficiency, while strengthening leadership, negotiation, stakeholder management, and conflict-resolution abilities.</li>
                </ul>
              </div>

              {/* Role 2: The Portrait Gallery */}
              <div className="space-y-1">
                <p className="font-bold text-neutral-900 text-lg">Software Engineer</p>
                <p className="font-medium text-base text-neutral-800">The Portrait Gallery</p>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                  Kolkata (Sep. 2024 – Aug. 2025)
                </p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-700 pt-1.5 font-medium">
                  <li>Designed and developed a high-performance business website that increased user engagement by 30% and contributed to a 25% growth in customer conversions.</li>
                  <li>Built responsive web applications using modern frontend technologies, optimized SEO, and implemented analytics-driven improvements to enhance user experience and website performance.</li>
                  <li>Managed project delivery from concept to deployment while coordinating with stakeholders, strengthening skills in client communication, leadership, project management, and strategic problem-solving.</li>
                </ul>
              </div>

              {/* Role 3: DevRhylme Foundation */}
              <div className="space-y-1">
                <p className="font-bold text-neutral-900 text-lg">Software Engineer Intern</p>
                <p className="font-medium text-base text-neutral-800">DevRhylme Foundation</p>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                  Kolkata (Jan. 2025 – Jun. 2025)
                </p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-700 pt-1.5 font-medium">
                  <li>Developed AI and machine learning solutions using Python, automating data processing workflows and reducing manual effort by over 40% while improving overall system performance.</li>
                  <li>Utilized modern AI development tools, LLM-powered workflows, and data analytics techniques to accelerate prototyping, debugging, and software delivery across multiple projects.</li>
                  <li>Collaborated with multidisciplinary teams to deliver scalable software solutions, demonstrating technical leadership, project ownership, mentoring, and effective cross-functional communication.</li>
                </ul>
              </div>

              {/* Role 4: Social Winter of Code */}
              <div className="space-y-1">
                <p className="font-bold text-neutral-900 text-lg">Open Source Contributor</p>
                <p className="font-medium text-base text-neutral-800">Social Winter of Code</p>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                  Kolkata (Jan. 2025 – Mar. 2025)
                </p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-700 pt-1.5 font-medium">
                  <li>Contributed to multiple open-source software projects, implementing frontend enhancements, API integrations, and performance optimizations that improved project efficiency by 35%.</li>
                  <li>Collaborated with distributed development teams using Git, GitHub, code reviews, and Agile development practices to deliver production-ready features.</li>
                  <li>Leveraged AI-assisted development tools to accelerate debugging, documentation, and feature implementation while enhancing teamwork, technical communication, and software engineering best practices.</li>
                </ul>
              </div>
            </div>
          )
        },
        projects: {
          title: "Projects",
          date: "May 28, 2026 at 03:45 PM",
          previewText: "MERN AI Chatbot, Warranty Vault...",
          content: (
            <div className="space-y-6 text-[15px] text-neutral-800 font-normal leading-[1.6]">
              {/* Project 1 */}
              <div className="space-y-1">
                <p className="font-bold text-neutral-900 text-lg">MERN AI Chatbot</p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-700 pt-1.5 font-medium">
                  <li>Developed a full-stack AI chatbot application using the MERN stack, TypeScript, and OpenAI APIs, featuring JWT authentication, session management, and role-based access control.</li>
                  <li>Designed scalable backend architecture with MongoDB database integration, secure REST APIs, and real-time conversation storage for seamless user interactions.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="space-y-1">
                <p className="font-bold text-neutral-900 text-lg">Warranty Vault</p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-700 pt-1.5 font-medium">
                  <li>Built an AI-powered Android application that automates receipt scanning and extracts billing and warranty information using intelligent document processing techniques.</li>
                  <li>Implemented Room Database for secure local data storage and background notification services to proactively track warranty expiration timelines.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="space-y-1">
                <p className="font-bold text-neutral-900 text-lg">The Portrait Gallery</p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-700 pt-1.5 font-medium">
                  <li>Engineered a visually immersive portfolio platform utilizing HTML, CSS, JavaScript, Framer, and Spline, delivering responsive layouts, interactive 3D experiences, and modern frontend architecture.</li>
                  <li>Optimized website performance, user engagement, and digital presence through SEO best practices, intuitive UI/UX design, and scalable web development methodologies.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="space-y-1">
                <p className="font-bold text-neutral-900 text-lg">Bacola Shopping</p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-700 pt-1.5 font-medium">
                  <li>Engineered a scalable e-commerce application using React, Tailwind CSS, Firebase, and Stripe, enabling secure authentication, payment processing, and product management.</li>
                  <li>Developed responsive user interfaces and optimized application performance through modern frontend architecture, API integration, and state management practices.</li>
                </ul>
              </div>
            </div>
          )
        },
        certifications: {
          title: "Certifications",
          date: "May 14, 2026 at 09:20 AM",
          previewText: "Advanced Prompt Engineering...",
          content: (
            <div className="space-y-4 text-[15px] text-neutral-800 font-normal leading-[1.6]">
              <ul className="list-disc list-outside pl-5 space-y-2 text-neutral-700 font-medium">
                <li>Advanced Prompt Engineering & LLM Applications</li>
                <li>AI Agent Development & Workflow Automation</li>
                <li>Full Stack Web Development</li>
                <li>Cloud Application Architecture</li>
                <li>Modern JavaScript & TypeScript Development</li>
                <li>Database Design & Data Analytics</li>
              </ul>
            </div>
          )
        },
        education: {
          title: "Education",
          date: "April 30, 2026 at 04:10 PM",
          previewText: "Bachelor of Science...",
          content: (
            <div className="space-y-6 text-[15px] text-neutral-800 font-normal leading-[1.6]">
              <div className="space-y-1">
                <p className="font-bold text-neutral-900 text-lg">Bachelor of Science in Computer Science</p>
                <p className="text-neutral-700 font-medium text-base">University of Calcutta</p>
                
                <div className="pt-4">
                  <p className="font-bold text-neutral-900 text-lg border-b border-neutral-100 pb-0.5 mb-1.5">Relevant Areas</p>
                  <p className="text-neutral-700 font-medium">
                    Data Structures & Algorithms • Database Systems • Software Engineering • Operating Systems • Computer Networks • Artificial Intelligence
                  </p>
                </div>
              </div>
            </div>
          )
        }
      };

      const [activeTab, setActiveTab] = useState('skills');
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

      useEffect(() => {
        if (isMobile) setIsSidebarOpen(false);
      }, [isMobile]);

      return (
        <div className="flex h-full bg-white text-neutral-800 font-sans select-text border-t border-neutral-200/40 relative overflow-hidden">
          
          {/* MOBILE TOGGLE OVERLAY FAB FLOATER BUTTON */}
          {isMobile && (
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="absolute bottom-4 right-4 z-50 bg-[#FCE285] hover:bg-[#FADB6A] text-neutral-900 font-bold px-4 py-2.5 rounded-full shadow-lg flex items-center space-x-2 text-xs transition-all active:scale-95 border border-[#E1C24A]/40"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>{isSidebarOpen ? "Hide Index" : "Browse Notes"}</span>
            </button>
          )}

          {/* LEFT SIDEBAR PANEL LAYER */}
          <div 
            className={`bg-[#F9F9F9] border-r border-neutral-200/60 p-2.5 flex flex-col space-y-1 shrink-0 select-none overflow-y-auto transition-all duration-300 ease-in-out z-30 ${
              isMobile 
                ? `absolute inset-y-0 left-0 w-[75%] h-full shadow-2xl transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}` 
                : 'w-[32%] relative transform-none'
            }`}
          >
            {/* Header Area: Collapse Button safely removed */}
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider px-3 pt-2.5 pb-2 border-b border-neutral-200/40 mb-1">
              <span>Categories</span>
            </div>

            {Object.keys(NOTES_DATA).map((key) => {
              const item = NOTES_DATA[key];
              const isSelected = activeTab === key;
              const displayDate = key === 'skills' ? '12/06/2026' : key === 'experience' ? '05/06/2026' : key === 'projects' ? '28/05/2026' : key === 'certifications' ? '14/05/2026' : '30/04/2026';

              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    if (isMobile) setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-150 focus:outline-none ${
                    isSelected ? 'bg-[#FCE285] text-neutral-900 shadow-sm' : 'hover:bg-neutral-200/40 text-neutral-700'
                  }`}
                >
                  <p className="font-bold text-sm tracking-tight truncate">{item.title}</p>
                  <div className={`text-xs mt-0.5 font-medium flex items-baseline space-x-1 ${isSelected ? 'text-neutral-700' : 'text-neutral-500'}`}>
                    <span className="shrink-0">{displayDate}</span>
                    <span className="block font-normal truncate flex-1 opacity-80">{item.previewText}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT VIEWPORT CONTENT CANVAS */}
          <div className="flex-1 bg-white overflow-y-auto px-5 sm:px-10 py-6 space-y-5">
            <div className="text-center select-none pt-1">
              <span className="text-xs font-medium text-neutral-400 tracking-wide">{NOTES_DATA[activeTab].date}</span>
            </div>

            <h1 className="text-2xl sm:text-[32px] font-extrabold tracking-tight text-neutral-900 pt-1">
              {NOTES_DATA[activeTab].title}
            </h1>

            <div className="pb-12">
              {NOTES_DATA[activeTab].content}
            </div>
          </div>
        </div>
      );
    })
  }
];

// ==========================================
// 2. DESKTOP APPS CONFIGURATION
// ==========================================
const INITIAL_DESKTOP_FILES = [
  {
    id: 'file-1',
    title: 'MERN AI Chatbot',
    isImageIcon: true,
    iconPath: '/mern-ai-chatbot.png',
    windowContent: React.createElement(() => {
      // Internal state to track which image is currently popped up/clicked
      const [activeImg, setActiveImg] = useState(null);

      const galleryItems = [
        {
          src: "/mern-ai-chatbot/mern-ai-chatbot-one.png",
          alt: "Modern Landing Experience",
          caption: "Clean, responsive homepage showcasing the AI chatbot platform with intuitive navigation and modern UI design."
        },
        {
          src: "/mern-ai-chatbot/mern-ai-chatbot-two.png",
          alt: "Secure User Authentication",
          caption: "JWT-powered registration and authentication system ensuring secure account creation and protected access."
        },
        {
          src: "/mern-ai-chatbot/mern-ai-chatbot-three.png",
          alt: "AI-Powered Conversations",
          caption: "Real-time chatbot interface powered by OpenAI APIs, delivering intelligent responses with persistent chat history."
        },
        {
          src: "/mern-ai-chatbot/mern-ai-chatbot-four.png",
          alt: "Fully Responsive Design",
          caption: "Optimized user experience across desktop, tablet, and mobile devices with seamless adaptive layouts."
        }
      ];

      return (
        <div className="relative h-full w-full overflow-hidden font-sans select-text text-neutral-800 bg-white">
          <div className="p-8 space-y-8 overflow-y-auto h-full pb-6">
            {/* Title Heading Section */}
            <div className="border-b border-neutral-200 pb-3 select-none">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">MERN AI Chatbot</h2>
              <p className="text-sm font-medium text-neutral-500 mt-1">Full-Stack Intelligent Conversation Platform</p>
            </div>
            
            {/* Project Key Achievements Log */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight select-none">Key Contributions & Features</h3>
              <ul className="list-disc list-outside pl-5 space-y-2.5 text-[15px] text-neutral-700 font-medium leading-relaxed">
                <li>Developed a full-stack AI chatbot application using the MERN stack, TypeScript, and OpenAI APIs, featuring JWT authentication, session management, and role-based access control.</li>
                <li>Designed scalable backend architecture with MongoDB database integration, secure REST APIs, and real-time conversation storage for seamless user interactions.</li>
                <li>Improved user engagement and retention by enabling 24/7 AI-powered assistance, supporting 500+ conversations per month with low-latency responses and consistent user experience.</li>
                <li>Optimized application performance through efficient API handling and database design, reducing response times by 35% and achieving 99.9% conversation data reliability for stored chat sessions.</li>
              </ul>
            </div>

            {/* Pictures Media Gallery Grid Section */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight select-none">Project Architecture & Interface Gallery</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {galleryItems.map((item, index) => (
                  <div 
                    key={index} 
                    onClick={() => setActiveImg(item)}
                    className="border border-neutral-200 p-2.5 rounded-xl bg-neutral-50 shadow-sm flex flex-col space-y-2 cursor-zoom-in hover:border-neutral-400 transition-colors duration-150 group"
                  >
                    <div className="w-full h-40 bg-neutral-200 rounded-lg overflow-hidden relative">
                      <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200" />
                    </div>
                    <span className="text-xs font-medium text-neutral-500 text-center block pt-1 select-none">
                      {item.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Minimalist Pop-up Modal Layer */}
          <AnimatePresence>
            {activeImg && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImg(null)}
                className="absolute inset-0 bg-white/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6 cursor-zoom-out"
              >
                {/* Image Scale Presentation Container */}
                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="max-w-[90%] max-h-[75%] bg-white border border-neutral-200 p-2 rounded-2xl shadow-xl flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()} // Stop bubble closing logic on image click
                >
                  <img 
                    src={activeImg.src} 
                    alt={activeImg.alt} 
                    className="w-full h-full object-contain rounded-xl max-h-[400px]" 
                  />
                </motion.div>

                {/* Caption Field Element */}
                <motion.div
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ delay: 0.05 }}
                  className="mt-4 text-center select-none max-w-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-sm font-bold text-neutral-900 tracking-tight">{activeImg.alt}</p>
                  <p className="text-xs font-medium text-neutral-500 mt-0.5">{activeImg.caption}</p>
                  
                  <button 
                    onClick={() => setActiveImg(null)}
                    className="mt-4 text-xs font-bold text-neutral-500 hover:text-neutral-900 border border-neutral-200 rounded-lg px-3 py-1.5 hover:bg-neutral-50 transition-colors"
                  >
                    Close Preview
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    })
  },
  {
    id: 'file-2',
    title: 'Warranty Vault',
    isImageIcon: true,
    iconPath: '/warranty-vault.png',
    windowContent: React.createElement(() => {
      const [activeImg, setActiveImg] = useState(null);

      const galleryItems = [
        {
          src: "/warranty-vault/warranty-vault-one.png",
          alt: "Secure User Authentication",
          caption: "Fast and secure account access with streamlined user registration and authentication."
        },
        {
          src: "/warranty-vault/warranty-vault-two.png",
          alt: "AI-Powered Receipt Scanning",
          caption: "Upload receipts instantly and extract billing and warranty details through intelligent document processing."
        },
        {
          src: "/warranty-vault/warranty-vault-three.png",
          alt: "Centralized Warranty Dashboard",
          caption: "Manage purchases, monitor warranty status, and access important product information from a single dashboard."
        },
        {
          src: "/warranty-vault/warranty-vault-four.png",
          alt: "Personalized App Controls",
          caption: "Configure notifications, account preferences, and warranty tracking settings for a customized experience."
        }
      ];

      return (
        <div className="relative h-full w-full overflow-hidden font-sans select-text text-neutral-800 bg-white">
          <div className="p-8 space-y-8 overflow-y-auto h-full pb-6">
            {/* Title Heading Section */}
            <div className="border-b border-neutral-200 pb-3 select-none">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Warranty Vault</h2>
              <p className="text-sm font-medium text-neutral-500 mt-1">Intelligent Document Processing & Lifecycle Management</p>
            </div>
            
            {/* Project Achievements Log */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight select-none">Key Contributions & Features</h3>
              <ul className="list-disc list-outside pl-5 space-y-2.5 text-[15px] text-neutral-700 font-medium leading-relaxed">
                <li>Built an AI-powered Android application that automates receipt scanning and extracts billing and warranty information using intelligent document processing techniques.</li>
                <li>Implemented Room Database for secure local data storage and background notification services to proactively track warranty expiration timelines.</li>
                <li>Reduced manual warranty management effort by 80%, enabling users to organize and retrieve 1,000+ purchase records efficiently through automated data extraction.</li>
                <li>Improved warranty claim preparedness with automated reminder notifications, helping users avoid missed warranty deadlines and increasing tracking accuracy by 90%.</li>
              </ul>
            </div>

            {/* Media Gallery Grid Section */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight select-none">Application Interface & Execution Gallery</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {galleryItems.map((item, index) => (
                  <div 
                    key={index} 
                    onClick={() => setActiveImg(item)}
                    className="border border-neutral-200 p-2.5 rounded-xl bg-neutral-50 shadow-sm flex flex-col space-y-2 cursor-zoom-in hover:border-neutral-400 transition-colors duration-150 group"
                  >
                    <div className="w-full h-40 bg-neutral-200 rounded-lg overflow-hidden relative">
                      <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200" />
                    </div>
                    <span className="text-xs font-medium text-neutral-500 text-center block pt-1 select-none">
                      {item.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Minimalist Zoom Pop-up Modal Layer */}
          <AnimatePresence>
            {activeImg && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImg(null)}
                className="absolute inset-0 bg-white/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6 cursor-zoom-out"
              >
                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="max-w-[90%] max-h-[75%] bg-white border border-neutral-200 p-2 rounded-2xl shadow-xl flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={activeImg.src} 
                    alt={activeImg.alt} 
                    className="w-full h-full object-contain rounded-xl max-h-[400px]" 
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ delay: 0.05 }}
                  className="mt-4 text-center select-none max-w-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-sm font-bold text-neutral-900 tracking-tight">{activeImg.alt}</p>
                  <p className="text-xs font-medium text-neutral-500 mt-0.5">{activeImg.caption}</p>
                  
                  <button 
                    onClick={() => setActiveImg(null)}
                    className="mt-4 text-xs font-bold text-neutral-500 hover:text-neutral-900 border border-neutral-200 rounded-lg px-3 py-1.5 hover:bg-neutral-50 transition-colors"
                  >
                    Close Preview
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    })
  },
  {
    id: 'file-3',
    title: 'The Portrait Gallery',
    isImageIcon: true,
    iconPath: '/the-portrait-gallery.png',
    windowContent: React.createElement(() => {
      const [activeImg, setActiveImg] = useState(null);

      const galleryItems = [
        {
          src: "/the-portrait-gallery/the-portrait-gallery-one.png",
          alt: "Immersive Landing Experience",
          caption: "Engaging homepage featuring interactive visuals, modern design, and seamless user navigation."
        },
        {
          src: "/the-portrait-gallery/the-portrait-gallery-two.png",
          alt: "Showcase of Creative Work",
          caption: "Curated portfolio section highlighting projects, achievements, and interactive web experiences."
        },
        {
          src: "/the-portrait-gallery/the-portrait-gallery-three.png",
          alt: "Professional Story & Expertise",
          caption: "Dedicated section presenting background, skills, and creative vision through a compelling user experience."
        },
        {
          src: "/the-portrait-gallery/the-portrait-gallery-four.png",
          alt: "Seamless Communication",
          caption: "Intuitive contact interface designed to facilitate collaboration, inquiries, and professional connections."
        }
      ];

      return (
        <div className="relative h-full w-full overflow-hidden font-sans select-text text-neutral-800 bg-white">
          <div className="p-8 space-y-8 overflow-y-auto h-full pb-6">
            {/* Title Heading Section */}
            <div className="border-b border-neutral-200 pb-3 select-none">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">The Portrait Gallery</h2>
              <p className="text-sm font-medium text-neutral-500 mt-1">Immersive 3D Portfolio Platform & Creative Showcase</p>
            </div>
            
            {/* Project Achievements Log */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight select-none">Key Contributions & Features</h3>
              <ul className="list-disc list-outside pl-5 space-y-2.5 text-[15px] text-neutral-700 font-medium leading-relaxed">
                <li>Engineered a visually immersive portfolio platform utilizing HTML, CSS, JavaScript, Framer, and Spline, delivering responsive layouts, interactive 3D experiences, and modern frontend architecture.</li>
                <li>Optimized website performance, user engagement, and digital presence through SEO best practices, intuitive UI/UX design, and scalable web development methodologies.</li>
                <li>Increased user engagement by 40% through interactive 3D elements, smooth animations, and responsive design, creating an engaging cross-device browsing experience.</li>
                <li>Enhanced website discoverability and performance by implementing SEO optimization and efficient asset management, achieving 95+ Lighthouse performance scores and faster page load times.</li>
              </ul>
            </div>

            {/* Media Gallery Grid Section */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight select-none">Application Interface & Presentation Gallery</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {galleryItems.map((item, index) => (
                  <div 
                    key={index} 
                    onClick={() => setActiveImg(item)}
                    className="border border-neutral-200 p-2.5 rounded-xl bg-neutral-50 shadow-sm flex flex-col space-y-2 cursor-zoom-in hover:border-neutral-400 transition-colors duration-150 group"
                  >
                    <div className="w-full h-40 bg-neutral-200 rounded-lg overflow-hidden relative">
                      <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200" />
                    </div>
                    <span className="text-xs font-medium text-neutral-500 text-center block pt-1 select-none">
                      {item.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Minimalist Zoom Pop-up Modal Layer */}
          <AnimatePresence>
            {activeImg && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImg(null)}
                className="absolute inset-0 bg-white/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6 cursor-zoom-out"
              >
                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="max-w-[90%] max-h-[75%] bg-white border border-neutral-200 p-2 rounded-2xl shadow-xl flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={activeImg.src} 
                    alt={activeImg.alt} 
                    className="w-full h-full object-contain rounded-xl max-h-[400px]" 
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ delay: 0.05 }}
                  className="mt-4 text-center select-none max-w-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-sm font-bold text-neutral-900 tracking-tight">{activeImg.alt}</p>
                  <p className="text-xs font-medium text-neutral-500 mt-0.5">{activeImg.caption}</p>
                  
                  <button 
                    onClick={() => setActiveImg(null)}
                    className="mt-4 text-xs font-bold text-neutral-500 hover:text-neutral-900 border border-neutral-200 rounded-lg px-3 py-1.5 hover:bg-neutral-50 transition-colors"
                  >
                    Close Preview
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    })
  },
  {
    id: 'file-4',
    title: 'Bacola Shopping',
    isImageIcon: true,
    iconPath: '/bacola-shopping.png',
    windowContent: React.createElement(() => {
      const [activeImg, setActiveImg] = useState(null);

      const galleryItems = [
        {
          src: "/bacola-shopping/bacola-shopping-one.png",
          alt: "Modern Shopping Experience",
          caption: "Responsive storefront showcasing products, categories, and a streamlined shopping journey."
        },
        {
          src: "/bacola-shopping/bacola-shopping-two.png",
          alt: "Secure User Authentication",
          caption: "Firebase-powered authentication system enabling secure account registration and user access."
        },
        {
          src: "/bacola-shopping/bacola-shopping-three.png",
          alt: "Dynamic Shopping Cart",
          caption: "Real-time cart management with quantity updates, price calculations, and seamless checkout preparation."
        },
        {
          src: "/bacola-shopping/bacola-shopping-four.png",
          alt: "Secure Checkout & Order Tracking",
          caption: "Complete order summary and billing workflow with integrated payment processing and purchase confirmation."
        }
      ];

      return (
        <div className="relative h-full w-full overflow-hidden font-sans select-text text-neutral-800 bg-white">
          <div className="p-8 space-y-8 overflow-y-auto h-full pb-6">
            {/* Title Heading Section */}
            <div className="border-b border-neutral-200 pb-3 select-none">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Bacola Shopping</h2>
              <p className="text-sm font-medium text-neutral-500 mt-1">Scalable E-Commerce Engine & Secure Transaction Node</p>
            </div>
            
            {/* Project Achievements Log */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight select-none">Key Contributions & Features</h3>
              <ul className="list-disc list-outside pl-5 space-y-2.5 text-[15px] text-neutral-700 font-medium leading-relaxed">
                <li>Engineered a scalable e-commerce application using React, Tailwind CSS, Firebase, and Stripe, enabling secure authentication, payment processing, and product management.</li>
                <li>Developed responsive user interfaces and optimized application performance through modern frontend architecture, API integration, and state management practices.</li>
                <li>Streamlined the online purchasing workflow by implementing secure checkout and real-time product management, supporting 500+ product listings and improving transaction efficiency by 35%.</li>
                <li>Enhanced user experience and platform reliability through optimized rendering, responsive design, and efficient state management, resulting in 40% faster page load times and seamless cross-device accessibility.</li>
              </ul>
            </div>

            {/* Media Gallery Grid Section */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight select-none">Application Interface & Storefront Gallery</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {galleryItems.map((item, index) => (
                  <div 
                    key={index} 
                    onClick={() => setActiveImg(item)}
                    className="border border-neutral-200 p-2.5 rounded-xl bg-neutral-50 shadow-sm flex flex-col space-y-2 cursor-zoom-in hover:border-neutral-400 transition-colors duration-150 group"
                  >
                    <div className="w-full h-40 bg-neutral-200 rounded-lg overflow-hidden relative">
                      <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200" />
                    </div>
                    <span className="text-xs font-medium text-neutral-500 text-center block pt-1 select-none">
                      {item.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Minimalist Zoom Pop-up Modal Layer */}
          <AnimatePresence>
            {activeImg && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImg(null)}
                className="absolute inset-0 bg-white/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6 cursor-zoom-out"
              >
                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="max-w-[90%] max-h-[75%] bg-white border border-neutral-200 p-2 rounded-2xl shadow-xl flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={activeImg.src} 
                    alt={activeImg.alt} 
                    className="w-full h-full object-contain rounded-xl max-h-[400px]" 
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ delay: 0.05 }}
                  className="mt-4 text-center select-none max-w-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-sm font-bold text-neutral-900 tracking-tight">{activeImg.alt}</p>
                  <p className="text-xs font-medium text-neutral-500 mt-0.5">{activeImg.caption}</p>
                  
                  <button 
                    onClick={() => setActiveImg(null)}
                    className="mt-4 text-xs font-bold text-neutral-500 hover:text-neutral-900 border border-neutral-200 rounded-lg px-3 py-1.5 hover:bg-neutral-50 transition-colors"
                  >
                    Close Preview
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    })
  },
  {
    id: 'file-5',
    title: 'Tic-Tac-Toe',
    iconBgColor: 'bg-gradient-to-tr from-neutral-500 to-neutral-700',
    isImageIcon: true,
    iconPath: '/tic-tac-toe.png', // RESTORED
    windowContent: <TicTacToeGame />
  },
];

// RE-ASSEMBLY ARRAYS LAYER
const ALL_APPS = [...DOCK_APPS, ...INITIAL_DESKTOP_FILES];

// ==========================================
// 3. MAIN APP COMPONENT
// ==========================================
function App() {
  const desktopRef = useRef(null);
  
  const [openApps, setOpenApps] = useState({});
  const [minimizedApps, setMinimizedApps] = useState({});
  const [activeApp, setActiveApp] = useState(null);
  const [desktopFiles, setDesktopFiles] = useState([]);
  const [selectedFileId, setSelectedFileId] = useState(null);
  const [spawnOrder, setSpawnOrder] = useState([]);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

    // Grid coordinates updated to accommodate 7 icons neatly on mobile home screen
    const mobileGridSlots = [
      { col: 0, row: 0, jitterX: 0, jitterY: 0 }, // About Me
      { col: 1, row: 0, jitterX: 0, jitterY: 0 }, // Notes
      { col: 2, row: 0, jitterX: 0, jitterY: 0 }, // MERN AI Chatbot
      { col: 3, row: 0, jitterX: 0, jitterY: 0 }, // Warranty Vault
      { col: 0, row: 1, jitterX: 0, jitterY: 0 }, // The Portrait Gallery
      { col: 1, row: 1, jitterX: 0, jitterY: 0 }, // Bacola Shopping
      { col: 2, row: 1, jitterX: 0, jitterY: 0 }, // Tic-Tac-Toe
    ];

    const staticRandomSlots = [
      { col: 1, row: 0, jitterX: 1,  jitterY: -1 },
      { col: 3, row: 1, jitterX: -2, jitterY: 2  },
      { col: 0, row: 2, jitterX: 2,  jitterY: 1  },
      { col: 4, row: 0, jitterX: -1, jitterY: -2 },
      { col: 2, row: 2, jitterX: 0,  jitterY: 2  },
    ];

    // On mobile, prepend the Dock Apps to the desktop list files configuration array
    const mobileFilesList = [
      {
        id: 'about-me',
        title: 'About Me',
        isImageIcon: true,
        iconPath: '/bitmoji.png',
      },
      {
        id: 'notes',
        title: 'Notes',
        isImageIcon: true, // FIXED: Enables clean image rendering loop on the home screen wallpaper matrix
        iconPath: '/notes-icon.png', // FIXED: Maps directly to your public folder icon file asset path
      },
      ...INITIAL_DESKTOP_FILES
    ];

    const targetFiles = isMobile ? mobileFilesList : INITIAL_DESKTOP_FILES;
    const slotsToUse = isMobile ? mobileGridSlots : staticRandomSlots;

    const staticAllocatedFiles = targetFiles.map((file, index) => {
      const slot = slotsToUse[index % slotsToUse.length];
      
      // COMPUTING BALANCED VERTICAL COLUMNS:
      // Breaks down the mobile window bounds symmetrically into 4 columns
      const mobileCenteringFormula = `calc(${((slot.col + 0.5) / 4) * 100}% - 28px)`;
      
      const baseX = isMobile ? 0 : (8 + slot.col * 16); 
      const baseY = isMobile ? (6 + slot.row * 15) : (8 + slot.row * 22); 

      return {
        ...file,
        // FIXED ALIGNMENT LOCK: Strips horizontal jitter completely on mobile viewports so columns stay symmetrical
        initialX: isMobile ? mobileCenteringFormula : `${baseX + slot.jitterX}%`,
        initialY: isMobile ? `${baseY}%` : `${baseY + slot.jitterY}%`,
      };
    });
    
    setDesktopFiles(staticAllocatedFiles);
  }, []);

  const toggleApp = (id) => {
    setOpenApps(prev => {
      const isOpening = !prev[id];
      if (isOpening) {
        setSpawnOrder(old => old.includes(id) ? old : [...old, id]);
      }
      return { ...prev, [id]: true };
    });
    setMinimizedApps(prev => ({ ...prev, [id]: false }));
    setActiveApp(id);
  };

  const handleCloseApp = (id) => {
    setOpenApps(prev => ({ ...prev, [id]: false }));
    setSpawnOrder(old => old.filter(appId => appId !== id));
    setSelectedFileId(null); // FIXED: De-selects and un-highlights the grid icon immediately upon closing the app window
  };

  const handleDesktopClick = (e) => {
    if (e.target === desktopRef.current || e.target.classList.contains('desktop-workspace-layer')) {
      setSelectedFileId(null);
    }
  };

  return (
    <div 
      ref={desktopRef}
      onClick={handleDesktopClick}
      className="relative w-screen h-dvh overflow-hidden bg-cover bg-center select-none"
      style={{ 
        backgroundImage: `url('/desktop-bg.jpg')`, 
      }}
    >
      {/* DESKTOP WORKSPACE LAYER */}
      {typeof window !== 'undefined' && window.innerWidth < 640 ? (
        /* DYNAMIC MOBILE SYMMETRICAL GRID CONTAINER */
        <div className="absolute inset-0 pt-16 pb-32 px-5 grid grid-cols-4 grid-rows-6 gap-y-4 justify-items-center items-start content-start pointer-events-none z-10">
          {desktopFiles.map((file) => (
            <div key={file.id} className="relative w-full flex justify-center pointer-events-auto">
              <DesktopGridIcon
                file={{
                  ...file,
                  // Resets dynamic styles on mobile to let the native CSS Grid track coordinates perfectly
                  initialX: 'auto',
                  initialY: 'auto'
                }}
                isSelected={selectedFileId === file.id}
                onSelect={() => setSelectedFileId(file.id)}
                onDoubleClick={() => toggleApp(file.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        /* STANDARD DESKTOP POSITION ABSOLUTE MAP LAYER */
        <div className="desktop-workspace-layer absolute inset-0 z-10 w-full h-full">
          {desktopFiles.map(file => (
            <DesktopGridIcon 
              key={file.id} 
              file={file} 
              isSelected={selectedFileId === file.id}
              onSelect={() => setSelectedFileId(file.id)}
              onDoubleClick={() => toggleApp(file.id)} 
            />
          ))}
        </div>
      )}

      {/* WINDOWS LAYER */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {ALL_APPS.map(app => {
          const orderIndex = spawnOrder.indexOf(app.id);
          const cascadeOffset = orderIndex > 0 ? orderIndex * 28 : 0;

          return (
            <AnimatePresence key={app.id}>
              {openApps[app.id] && !minimizedApps[app.id] && (
                <DesktopWindow
                  app={app}
                  desktopRef={desktopRef}
                  isActive={activeApp === app.id}
                  cascadeOffset={cascadeOffset}
                  onFocus={() => setActiveApp(app.id)}
                  onClose={() => handleCloseApp(app.id)}
                  onMinimize={() => setMinimizedApps(prev => ({ ...prev, [app.id]: true }))}
                />
              )}
            </AnimatePresence>
          );
        })}
      </div>

      {/* THE FLUID DOCK */}
      <Dock 
        openApps={openApps} 
        minimizedApps={minimizedApps} 
        toggleApp={toggleApp} 
      />
    </div>
  );
}

/// ==========================================
// 4. DESKTOP GRID ICON COMPONENT
// ==========================================
function DesktopGridIcon({ file, isSelected, onSelect, onDoubleClick }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  
  // FIXED MOBILE HIGHLIGHT CONTROL: Completely bypass selection styles if on mobile viewports
  const showSelectionStyles = isSelected && !isMobile;

  return (
    <motion.div 
      drag={!isMobile} // Disable dragging completely on mobile viewports
      dragElastic={0}
      dragMomentum={false}
      whileDrag={{ scale: 1.05 }}
      onPointerDown={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      // Combine double click and single tap mechanics to ensure smooth mobile execution
      onClick={() => { if (isMobile) onDoubleClick(); }}
      onDoubleClick={onDoubleClick}
      className={`pointer-events-auto flex flex-col items-center justify-start w-[76px] sm:w-24 p-1 sm:p-2 rounded-xl cursor-grab active:cursor-grabbing group transition-colors duration-200 ${
        showSelectionStyles ? 'bg-white/15 border-white/20 shadow-sm' : 'bg-transparent border-transparent'
      } border`}
      style={{ 
        position: 'absolute',
        top: file.initialY, 
        left: file.initialX 
      }}
    >
      {/* UPSCALED TO w-14 ON MOBILE -> RESTORED BACK TO w-14 ON DESKTOP OVERRIDE */}
      <div className={`w-14 h-14 sm:w-14 sm:h-14 rounded-[12px] sm:rounded-[13px] shadow-md flex items-center justify-center pointer-events-none select-none text-white font-bold overflow-hidden ${file.isImageIcon ? 'p-0 bg-transparent' : `p-2.5 sm:p-2 ${file.iconBgColor}`}`}>
        {file.isImageIcon ? (
          <img 
            src={file.iconPath} 
            alt={file.title} 
            className="w-full h-full object-cover rounded-[12px] sm:rounded-[13px]" 
          />
        ) : (
          <svg className="w-8 h-8 sm:w-8 sm:h-8 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )}
      </div>

      <span 
        className={`mt-1.5 text-[10px] sm:text-[11px] text-white font-medium sm:font-semibold text-center select-none break-words w-full tracking-wide transition-all duration-150 px-1 py-0.5 rounded-[4px] ${
          showSelectionStyles 
            ? 'bg-blue-600 shadow-[0_2px_8px_rgba(0,0,0,0.4)] max-h-none whitespace-normal' 
            : 'line-clamp-2 group-hover:bg-black/40 group-hover:backdrop-blur-md'
        }`}
        style={{
          textShadow: showSelectionStyles 
            ? 'none' 
            : '0px 1px 2px rgba(0,0,0,0.9), 0px 2px 4px rgba(0,0,0,0.7)'
        }}
      >
        {file.title}
      </span>
    </motion.div>
  );
}

// ==========================================
// 5. MACOS-STYLE WINDOW COMPONENT
// ==========================================
function DesktopWindow({ app, desktopRef, isActive, cascadeOffset, onFocus, onClose, onMinimize }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  // Compute dynamic responsive sizes
  const width = isMobile ? window.innerWidth : 600;
  const height = isMobile ? window.innerHeight : 560; // Filled completely on mobile to eliminate white space gaps

  return (
    <motion.div
      initial={isMobile ? { y: "100%", opacity: 0 } : { scale: 0.93, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={isMobile ? { y: "100%", opacity: 0 } : { scale: 0.93, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      drag={!isMobile}
      dragHandleClassName="window-drag-handle"
      dragConstraints={desktopRef}
      dragElastic={0}
      dragMomentum={false}
      onPointerDown={onFocus}
      className={`pointer-events-auto absolute flex flex-col bg-white border overflow-hidden ${
        isMobile 
          ? 'z-40 inset-x-0 top-0 h-full w-full shadow-none border-none' // Clean edge-to-edge styling
          : `rounded-xl shadow-[0_30px_70px_rgba(0,0,0,0.35)] ${isActive ? 'z-40 border-black/20 ring-1 ring-black/5' : 'z-30 border-neutral-300/40 opacity-95'}`
      }`}
      style={{
        width: isMobile ? '100%' : `${width}px`,
        height: isMobile ? '100%' : `${height}px`,
        top: 0,
        left: 0,
        marginTop: isMobile ? 0 : `${cascadeOffset}px`,
        marginLeft: isMobile ? 0 : `${cascadeOffset}px`
      }}
    >
      {/* App Window Header Bar */}
      <div className="window-drag-handle flex items-center justify-between px-4 h-12 sm:h-14 bg-neutral-100 sm:bg-neutral-200/40 border-b border-neutral-200 select-none cursor-grab active:cursor-grabbing shrink-0">
        
        {/* Button Section Container */}
        <div 
          className="flex items-center space-x-2 h-full cursor-pointer shrink-0"
          style={{ width: '58px' }}
        >
          {/* Completely remove red/yellow/green indicators if on mobile */}
          {!isMobile && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); onClose(); }} 
                className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E] focus:outline-none"
              />
              <button 
                onClick={(e) => { e.stopPropagation(); onMinimize(); }} 
                className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] focus:outline-none"
              />
              <button 
                onClick={(e) => e.stopPropagation()}
                className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAA29] focus:outline-none"
              />
            </>
          )}
        </div>

        <div className="text-sm sm:text-base font-bold text-neutral-700 text-center flex-1 truncate tracking-wide pointer-events-none px-2">
          {app.title}
        </div>
        
        {/* Right side close control button text transformation */}
        <div style={{ width: '58px' }} className="shrink-0 flex justify-end">
          {isMobile && (
            <button 
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="text-xs font-bold text-red-500 bg-red-50 px-2.5 py-1 rounded-full border border-red-200/50"
            >
              Close
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-auto pointer-events-auto bg-white">
        {app.windowContent}
      </div>
    </motion.div>
  );
}

// ====================================================================
// 6. THE FIXED IOS / MACOS MOBILE DOCK (COMPACT CONTAINER WIDTH)
// ====================================================================
function Dock({ openApps, minimizedApps, toggleApp }) {
  const mouseX = useMotionValue(Infinity);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  const isAnyAppOpenOnMobile = isMobile && Object.keys(openApps).some(
    (id) => openApps[id] && !minimizedApps[id]
  );

  if (isAnyAppOpenOnMobile) return null;

  return (
    <motion.div
      onMouseMove={(e) => (isMobile ? null : mouseX.set(e.pageX))}
      onMouseLeave={() => (isMobile ? null : mouseX.set(Infinity))}
      className={`
        absolute left-1/2 transform -translate-x-1/2 z-50 
        ${isMobile 
          /* CHANGED: w-[85%] to w-[90%] and matched px-5 exactly to mirror the home screen grid bounds precisely */
          ? 'bottom-5 w-[90%] h-[86px] bg-white/[0.18] backdrop-blur-2xl border border-white/15 rounded-[32px] px-5 flex items-center justify-between shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]' 
          : 'bottom-8 h-[80px] max-w-none bg-white/[0.08] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 rounded-[24px] flex items-end px-4 pb-3.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-100'
        }
      `}
    >
      {/* 1. MOBILE RESPONSIVE LAYOUT ENGINE (X, LINKEDIN, GITHUB, RESUME ONLY) */}
      {isMobile ? (
        <div className="w-full flex items-center justify-between">
          {/* X SOCIAL ICON */}
          <div className="w-14 h-14 flex items-center justify-center [&_a]:!w-14 [&_a]:!h-14 [&_a_div]:!w-14 [&_a_div]:!h-14 flex-shrink-0">
            <SocialDockIcon href="https://x.com/notpiyzard/" title="X" bgColor="bg-black" mouseX={mouseX}>
              <svg className="w-full h-full fill-current p-0 !scale-100" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </SocialDockIcon>
          </div>

          {/* LINKEDIN SOCIAL ICON */}
          <div className="w-14 h-14 flex items-center justify-center [&_a]:!w-14 [&_a]:!h-14 [&_a_div]:!w-14 [&_a_div]:!h-14 flex-shrink-0">
            <SocialDockIcon href="https://www.linkedin.com/in/piyzard/" title="LinkedIn" bgColor="bg-[#0077B5]" mouseX={mouseX}>
              <svg className="w-full h-full fill-current p-0 !scale-[1.15]" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
            </SocialDockIcon>
          </div>

          {/* GITHUB SOCIAL ICON */}
          <div className="w-14 h-14 flex items-center justify-center [&_a]:!w-14 [&_a]:!h-14 [&_a_div]:!w-14 [&_a_div]:!h-14 flex-shrink-0">
            <SocialDockIcon href="https://github.com/piyzard/" title="GitHub" bgColor="bg-[#24292e]" mouseX={mouseX}>
              <svg className="w-full h-full fill-current p-0 !scale-[1.15]" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </SocialDockIcon>
          </div>

          {/* RESUME ICON */}
          <div className="w-14 h-14 flex items-center justify-center [&_a]:!w-14 [&_a]:!h-14 [&_a_div]:!w-14 [&_a_div]:!h-14 flex-shrink-0">
            <SocialDockIcon href="/PiyushResume.pdf" title="Resume" bgColor="bg-gradient-to-tr from-[#3f0c10] to-[#802027] border border-[#a6323a]/10" mouseX={mouseX}>
              <svg className="w-full h-full text-white p-0 !scale-[1.15]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </SocialDockIcon>
          </div>
        </div>
      ) : (
        /* 2. STANDARD DESKTOP PRESENTATION LAYER (LEAVE UNTOUCHED) */
        <>
          <div className="flex items-end space-x-2.5">
            {DOCK_APPS.map(app => (
              <DockIcon 
                key={app.id}
                app={app}
                mouseX={mouseX}
                isOpen={!!openApps[app.id]}
                isMinimized={!!minimizedApps[app.id]}
                onClick={() => toggleApp(app.id)}
              />
            ))}
          </div>

          <div className="self-end mb-1 mx-4 h-11 w-[3px] bg-white/35 rounded-full shrink-0" />

          <div className="flex items-end space-x-2.5">
            <SocialDockIcon href="https://x.com/notpiyzard/" title="X" bgColor="bg-black" mouseX={mouseX}>
              <svg className="w-full h-full fill-current p-0 !scale-100" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </SocialDockIcon>
            
            <SocialDockIcon href="https://www.linkedin.com/in/piyzard/" title="LinkedIn" bgColor="bg-[#0077B5]" mouseX={mouseX}>
              <svg className="w-full h-full fill-current p-0 !scale-[1.15]" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
            </SocialDockIcon>

            <SocialDockIcon href="https://github.com/piyzard/" title="GitHub" bgColor="bg-[#24292e]" mouseX={mouseX}>
              <svg className="w-full h-full fill-current p-0 !scale-[1.15]" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </SocialDockIcon>

            <SocialDockIcon href="/PiyushResume.pdf" title="Resume" bgColor="bg-gradient-to-tr from-[#3f0c10] to-[#802027] border border-[#a6323a]/10" mouseX={mouseX}>
              <svg className="w-full h-full text-white p-0 !scale-[1.15]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </SocialDockIcon>
          </div>
        </>
      )}
    </motion.div>
  );
}

// ==========================================
// 7. DOCK ICON INNER COMPONENTS
// ==========================================
function DockIcon({ app, mouseX, isOpen, isMinimized, onClick }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(distance, [-120, 0, 120], [50, 76, 50]);
  const size = useSpring(sizeTransform, { mass: 0.1, stiffness: 220, damping: 16 });

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95, x: '-50%' }} animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }} exit={{ opacity: 0, y: 4, scale: 0.95, x: '-50%' }} transition={{ duration: 0.15 }} className="absolute -top-12 left-1/2 px-3 py-1 rounded-md bg-neutral-900/70 text-white backdrop-blur-md border border-white/10 text-xs font-normal whitespace-nowrap shadow-lg pointer-events-none select-none">
            {app.title}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ width: size, height: size }}
        className={`rounded-[15px] text-white flex flex-col items-center justify-center cursor-pointer shadow-md origin-bottom select-none focus:outline-none relative ${app.isImageIcon ? 'p-0' : 'p-2.5'} ${app.iconBgColor}`}
      >
        <div className="w-full h-full flex items-center justify-center pointer-events-none">{app.iconContent}</div>
        {isOpen && (
          <div className={`absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 w-[4px] h-[4px] rounded-full transition-all duration-300 ${isMinimized ? 'bg-white/40' : 'bg-white'}`} />
        )}
      </motion.button>
    </div>
  );
}

function SocialDockIcon({ href, title, bgColor, children, mouseX }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(distance, [-120, 0, 120], [50, 76, 50]);
  const size = useSpring(sizeTransform, { mass: 0.1, stiffness: 220, damping: 16 });

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95, x: '-50%' }} animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }} exit={{ opacity: 0, y: 4, scale: 0.95, x: '-50%' }} transition={{ duration: 0.15 }} className="absolute -top-12 left-1/2 px-3 py-1 rounded-md bg-neutral-900/70 text-white backdrop-blur-md border border-white/10 text-xs font-normal whitespace-nowrap shadow-lg pointer-events-none select-none">
            {title}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a 
        ref={ref} 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        onMouseEnter={() => setIsHovered(true)} // FIXED: Correct arrow function syntax wrapper
        onMouseLeave={() => setIsHovered(false)} 
        style={{ width: size, height: size }} 
        className={`rounded-[15px] text-white flex items-center justify-center cursor-pointer shadow-md origin-bottom select-none p-2.5 ${bgColor}`}
      >
        <div className="w-full h-full flex items-center justify-center pointer-events-none">{children}</div>
      </motion.a>
    </div>
  );
}

// ==========================================
// 8. INTERACTIVE TIC-TAC-TOE WINDOW CORE
// ==========================================
function TicTacToeGame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameMode, setGameMode] = useState('cpu'); // 'cpu' or 'pvp'
  const [isCpuThinking, setIsCpuThinking] = useState(false);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { player: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  const winnerInfo = calculateWinner(board);
  const winner = winnerInfo ? winnerInfo.player : null;
  const isDraw = !winner && board.every(square => square !== null);

  // FIXED: Reliable CPU AI turn handling loop
  useEffect(() => {
    if (gameMode !== 'cpu' || isXNext || winner || isDraw || isCpuThinking) return;

    setIsCpuThinking(true);
    
    const timer = setTimeout(() => {
      setBoard((currentBoard) => {
        const emptyIndices = currentBoard.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
        
        if (emptyIndices.length === 0) return currentBoard;

        const testMove = (player) => {
          for (let i = 0; i < emptyIndices.length; i++) {
            const testBoard = [...currentBoard];
            testBoard[emptyIndices[i]] = player;
            if (calculateWinner(testBoard)?.player === player) return emptyIndices[i];
          }
          return null;
        };

        // 1. Attack (Win if possible)
        let cpuMove = testMove('O');
        
        // 2. Defend (Block user's winning move)
        if (cpuMove === null) {
          cpuMove = testMove('X');
        }

        // 3. Take Center Strategy
        if (cpuMove === null && emptyIndices.includes(4)) {
          cpuMove = 4;
        }

        // 4. Fallback to random move
        if (cpuMove === null) {
          cpuMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        }

        const nextBoard = [...currentBoard];
        nextBoard[cpuMove] = 'O';
        
        // Explicitly clear thinking state and hand control back to the human player
        setIsCpuThinking(false);
        setIsXNext(true);
        
        return nextBoard;
      });
    }, 500); // Clean 500ms processing delay simulation

    return () => clearTimeout(timer);
  }, [isXNext, gameMode, winner, isDraw]);

  const handleClick = (index) => {
    if (board[index] || winner || isCpuThinking || (gameMode === 'cpu' && !isXNext)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setIsCpuThinking(false);
  };

  return (
    <div className="h-full w-full bg-white flex flex-col justify-between p-6 font-sans select-none text-neutral-800">
      
      {/* Upper Control Strip */}
      <div className="flex items-center justify-between border border-neutral-200 p-2.5 rounded-2xl shadow-sm shrink-0">
        <div className="flex space-x-1.5 bg-neutral-100 p-1 rounded-xl">
          <button 
            onClick={() => { setGameMode('cpu'); resetGame(); }}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${gameMode === 'cpu' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-800'}`}
          >
            vs Computer
          </button>
          <button 
            onClick={() => { setGameMode('pvp'); resetGame(); }}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${gameMode === 'pvp' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-800'}`}
          >
            Pass & Play
          </button>
        </div>

        <div className="text-sm font-bold text-neutral-800 px-2">
          {winner ? (
            <span>Winner: {winner}</span>
          ) : isDraw ? (
            <span className="text-neutral-500">It is a Draw</span>
          ) : isCpuThinking ? (
            <span className="text-neutral-400 animate-pulse">CPU is thinking</span>
          ) : (
            <span className="text-neutral-600">Turn: {isXNext ? 'X' : 'O'}</span>
          )}
        </div>
      </div>

      {/* Playfield Canvas Grid Matrix */}
      <div className="flex-1 flex items-center justify-center my-4">
        <div className="grid grid-cols-3 gap-3 w-72 h-72">
          {board.map((square, idx) => {
            const isWinningSquare = winnerInfo?.line.includes(idx);
            
            return (
              <motion.button
                key={idx}
                whileHover={{ scale: square || winner || isCpuThinking ? 1 : 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleClick(idx)}
                className={`w-full h-full rounded-2xl flex items-center justify-center text-3xl font-extrabold shadow-sm border transition-all bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300 hover:shadow-md ${
                  isWinningSquare ? 'ring-2 ring-neutral-800 bg-neutral-100' : ''
                }`}
              >
                {square && (
                  <motion.span
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    {square}
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Operational Game Reset Button */}
      <div className="shrink-0 flex justify-center">
        <button
          onClick={resetGame}
          className="w-full max-w-xs bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.99]"
        >
          Restart Match
        </button>
      </div>
    </div>
  );
}

export default App;