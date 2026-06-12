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
              <span className="text-base text-neutral-600 font-semibold">Piyush Prasad</span>
            </div>
            <div className="flex items-baseline border-b border-neutral-200 pb-2">
              <span className="text-xs font-bold tracking-wider text-neutral-800 uppercase w-24">Position</span>
              <span className="text-base text-neutral-600 font-semibold">Software Developer</span>
            </div>
            <div className="flex items-baseline border-b border-neutral-200 pb-2">
              <span className="text-xs font-bold tracking-wider text-neutral-800 uppercase w-24">Mail</span>
              <a href="mailto:piyushprasad121@gmail.com" className="text-base text-blue-600 font-semibold hover:underline">
                piyushprasad121@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bio Box Component */}
        <div className="bg-neutral-100 rounded-xl p-5 space-y-4 border border-neutral-200/40">
          <p className="text-base leading-relaxed text-neutral-900 font-semibold">
            I'm Piyush Prasad, a Software Developer focused on building scalable web applications and AI-powered solutions.
          </p>
          <p className="text-base leading-relaxed text-neutral-700">
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
    iconBgColor: 'bg-gradient-to-b from-[#FBF3D5] to-[#F5DF8D]',
    isImageIcon: false,
    iconContent: (
      <div className="w-full h-full relative flex flex-col justify-between p-0.5 rounded-[12px] overflow-hidden border border-[#E1C24A]/40 shadow-inner">
        <div className="w-full h-[22%] bg-gradient-to-b from-[#EAA83A] to-[#DF9526] rounded-t-[10px] border-b border-[#C37E15]" />
        <div className="w-full h-[78%] bg-[#FFFBEA] flex flex-col space-y-[4px] pt-1.5 px-1">
          <div className="w-full h-[1.5px] bg-[#E8DCB8]" />
          <div className="w-5/6 h-[1.5px] bg-[#E8DCB8]" />
          <div className="w-full h-[1.5px] bg-[#E8DCB8]" />
          <div className="w-2/3 h-[1.5px] bg-[#E8DCB8]" />
        </div>
      </div>
    ),
    windowContent: (
      <div className="p-4 h-full bg-[#FFFBEA] text-neutral-800 font-sans border-t border-neutral-200/50 select-text">
        <div className="w-full h-full text-base leading-7 whitespace-pre-wrap">
          ✏️ macOS Notes App clone.{"\n"}{"\n"}
          - This content is now completely read-only on the live site.{"\n"}
          - Smooth Framer Motion transitions.{"\n"}
          - Built with Tailwind CSS.
        </div>
      </div>
    )
  }
];

// ==========================================
// 2. DESKTOP APPS CONFIGURATION
// ==========================================
const INITIAL_DESKTOP_FILES = [
  {
    id: 'file-1',
    title: 'Project Alpha Long Name Document',
    iconBgColor: 'bg-blue-500',
    windowContent: <div className="p-6 text-neutral-800 font-medium">📁 Custom Project Alpha specifications and read-only text elements.</div>
  },
  {
    id: 'file-2',
    title: 'Resume.pdf',
    iconBgColor: 'bg-red-500',
    windowContent: <div className="p-6 text-neutral-800 font-medium">📄 Interactive PDF viewer shell or mock Resume layout data details.</div>
  },
  {
    id: 'file-3',
    title: 'Pictures and Wallpapers',
    iconBgColor: 'bg-amber-500',
    windowContent: <div className="p-6 text-neutral-800 font-medium">🖼️ Image album display node. Put grid graphics here.</div>
  },
  {
    id: 'file-4',
    title: 'Source Code Production Branch',
    iconBgColor: 'bg-emerald-600',
    windowContent: <div className="p-6 text-neutral-800 font-mono text-xs">🚀 console.log("Hello Desktop Workspace Configuration");</div>
  },
  {
    id: 'file-5',
    title: 'Config Data',
    iconBgColor: 'bg-purple-600',
    windowContent: <div className="p-6 text-neutral-800 font-medium">⚙️ System parameters and application property values.</div>
  },
];

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
    const columns = 5;
    const rows = 3;
    const slots = [];
    
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows; r++) {
        slots.push({ col: c, row: r });
      }
    }

    const shuffledSlots = slots.sort(() => Math.random() - 0.5);

    const randomized = INITIAL_DESKTOP_FILES.map((file, index) => {
      const slot = shuffledSlots[index % shuffledSlots.length];
      
      const baseX = 8 + slot.col * 16; 
      const baseY = 8 + slot.row * 22; 
      const jitterX = Math.floor(Math.random() * 4) - 2; 
      const jitterY = Math.floor(Math.random() * 4) - 2;

      return {
        ...file,
        initialX: `${baseX + jitterX}%`,
        initialY: `${baseY + jitterY}%`,
      };
    });
    setDesktopFiles(randomized);
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
      className="relative w-screen h-screen overflow-hidden bg-cover bg-center select-none"
      style={{ 
        backgroundImage: `url('/desktop-bg.jpg')`, 
      }}
    >
      {/* DESKTOP WORKSPACE LAYER */}
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

// ==========================================
// 4. DESKTOP GRID ICON COMPONENT
// ==========================================
function DesktopGridIcon({ file, isSelected, onSelect, onDoubleClick }) {
  return (
    <motion.div 
      drag
      dragElastic={0}
      dragMomentum={false}
      whileDrag={{ scale: 1.05 }}
      onPointerDown={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onDoubleClick={onDoubleClick}
      onTouchEnd={onDoubleClick}
      className={`pointer-events-auto flex flex-col items-center justify-start w-24 p-2 rounded-xl cursor-grab active:cursor-grabbing group transition-colors duration-200 ${
        isSelected ? 'bg-white/15 border-white/20 shadow-sm' : 'hover:bg-white/10 border-transparent hover:border-white/10'
      } border`}
      style={{ 
        position: 'absolute',
        top: file.initialY, 
        left: file.initialX 
      }}
    >
      <div className={`w-14 h-14 rounded-[13px] shadow-md flex items-center justify-center pointer-events-none select-none text-white font-bold p-2 ${file.iconBgColor}`}>
        <svg className="w-8 h-8 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>

      <span 
        className={`mt-2 text-[11px] text-white font-semibold text-center select-none break-words w-full tracking-wide transition-all duration-150 px-1.5 py-0.5 rounded-[4px] ${
          isSelected 
            ? 'bg-blue-600 shadow-[0_2px_8px_rgba(0,0,0,0.4)] max-h-none whitespace-normal' 
            : 'line-clamp-2 group-hover:bg-black/40 group-hover:backdrop-blur-md'
        }`}
        style={{
          textShadow: isSelected 
            ? 'none' 
            : '0px 1px 2px rgba(0,0,0,0.9), 0px 2px 4px rgba(0,0,0,0.7), 0px 0px 8px rgba(0,0,0,0)'
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
  const width = 600;
  const height = 560;

  return (
    <motion.div
      initial={{ scale: 0.93, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.93, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      drag
      dragHandleClassName="window-drag-handle"
      dragConstraints={desktopRef}
      dragElastic={0}
      dragMomentum={false}
      onPointerDown={onFocus}
      className={`pointer-events-auto absolute flex flex-col bg-white/95 backdrop-blur-2xl border rounded-xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.35)] ${
        isActive ? 'z-40 border-black/20 ring-1 ring-black/5' : 'z-30 border-neutral-300/40 opacity-95'
      }`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: `20%`,
        left: `30%`,
        marginTop: `${cascadeOffset}px`,
        marginLeft: `${cascadeOffset}px`
      }}
    >
      {/* App Window Header Bar */}
      <div className="window-drag-handle flex items-center justify-between px-4 h-14 bg-neutral-200/40 border-b border-neutral-300/30 select-none cursor-grab active:cursor-grabbing shrink-0">
        
        {/* Button Section Container - Locked to exact button dimensions */}
        <div 
          className="flex items-center space-x-2 h-full cursor-pointer shrink-0"
          style={{ width: '58px' }} // Exact pixel boundary box matching the three dots
          onPointerDown={(e) => {
            // Blocks drag state initialization exclusively over the controls
            e.stopPropagation();
          }}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }} 
            className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E] focus:outline-none transition-colors cursor-pointer"
          />
          <button 
            onClick={(e) => { e.stopPropagation(); onMinimize(); }} 
            className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] focus:outline-none transition-colors cursor-pointer"
          />
          <button 
            onClick={(e) => e.stopPropagation()}
            className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAA29] focus:outline-none cursor-pointer"
          />
        </div>

        {/* Centered Title Heading */}
        <div className="text-base font-bold text-neutral-700 text-center flex-1 truncate tracking-wide pointer-events-none px-2">
          {app.title}
        </div>
        
        {/* Asymmetrical balancing spacer matching the 58px button container size */}
        <div style={{ width: '58px' }} className="shrink-0" />
      </div>

      <div className="flex-1 overflow-auto pointer-events-auto">
        {app.windowContent}
      </div>
    </motion.div>
  );
}

// ==========================================
// 6. THE FLUID DOCK COMPONENT
// ==========================================
function Dock({ openApps, minimizedApps, toggleApp }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 h-[80px] bg-white/[0.06] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 rounded-[24px] flex items-end px-3 pb-3.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] z-50 transition-all duration-100"
    >
      <div className="flex items-end pl-1 space-x-2.5">
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

      <div className="mx-3 mb-1 h-11 w-[2.5px] bg-white/35 rounded-full shrink-0 self-end" />

      <div className="flex items-end pr-1 space-x-2.5">
        <SocialDockIcon href="https://x.com/notpiyzard/" title="X" bgColor="bg-black" mouseX={mouseX}>
          <svg className="w-full h-full fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </SocialDockIcon>
        
        <SocialDockIcon href="https://www.linkedin.com/in/piyzard/" title="LinkedIn" bgColor="bg-[#0077B5]" mouseX={mouseX}>
          <svg className="w-full h-full fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
        </SocialDockIcon>

        <SocialDockIcon href="https://github.com/piyzard/" title="GitHub" bgColor="bg-[#24292e]" mouseX={mouseX}>
          <svg className="w-full h-full fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </SocialDockIcon>
      </div>
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

export default App;