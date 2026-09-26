import React from 'react';

interface ARSLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const ARSLogo: React.FC<ARSLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const sizeMap = {
    sm: { width: 140, height: 42, iconSize: 36 },
    md: { width: 190, height: 56, iconSize: 48 },
    lg: { width: 240, height: 72, iconSize: 62 },
    xl: { width: 320, height: 96, iconSize: 84 }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      <svg
        width={currentSize.width}
        height={currentSize.height}
        viewBox="0 0 340 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-[1.02]"
        aria-label="ARS Creation Logo"
        role="img"
      >
        <defs>
          {/* Metallic Silver Gradient for Dark Mode */}
          <linearGradient id="silverChromeDark" x1="20" y1="10" x2="200" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#ECEEF2" />
            <stop offset="65%" stopColor="#CBD0D8" />
            <stop offset="100%" stopColor="#959BA5" />
          </linearGradient>

          {/* Gunmetal Chrome Gradient for Light Mode */}
          <linearGradient id="gunmetalChromeLight" x1="20" y1="10" x2="200" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="40%" stopColor="#1E293B" />
            <stop offset="70%" stopColor="#334155" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* S Electric Neon Gradient: Magenta -> Purple -> Cyan */}
          <linearGradient id="sNeonGrad" x1="210" y1="15" x2="290" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E100FF" />
            <stop offset="50%" stopColor="#7B2CFF" />
            <stop offset="100%" stopColor="#00CFFF" />
          </linearGradient>

          {/* Accent dot gradient */}
          <linearGradient id="dotGrad" x1="130" y1="58" x2="145" y2="73" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E100FF" />
            <stop offset="60%" stopColor="#7B2CFF" />
            <stop offset="100%" stopColor="#00CFFF" />
          </linearGradient>

          {/* Left accent line (Yellow to Orange) */}
          <linearGradient id="lineLeftGrad" x1="25" y1="88" x2="80" y2="88" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF4B55" />
            <stop offset="100%" stopColor="#FFD21F" />
          </linearGradient>

          {/* Right accent line (Purple to Cyan) */}
          <linearGradient id="lineRightGrad" x1="260" y1="88" x2="315" y2="88" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7B2CFF" />
            <stop offset="100%" stopColor="#00CFFF" />
          </linearGradient>

          {/* Subtle drop shadow */}
          <filter id="logoShadow" x="0" y="0" width="340" height="100" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#00CFFF" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* --- Stylized "A" and "R" in Metallic Chrome --- */}
        <g filter="url(#logoShadow)">
          {/* Left Arch of "A" */}
          <path
            d="M 75 14 C 52 14 36 26 31 43 C 27 57 33 71 47 75 C 49 75 51 74 53 71 L 62 58 C 55 56 50 49 53 42 C 55 35 63 30 74 30 C 82 30 90 33 97 38 L 111 26 C 101 18 89 14 75 14 Z"
            className="fill-[url(#silverChromeDark)] dark:fill-[url(#silverChromeDark)] light:fill-[url(#gunmetalChromeLight)]"
          />

          {/* Sweeping Blade Slash forming crossbar of A and bridge into R */}
          <path
            d="M 22 75 L 142 16 C 147 14 153 14 159 14 C 185 14 206 25 206 43 C 206 54 198 62 186 67 L 210 75 L 189 75 L 170 68 C 163 68 152 68 147 68 L 147 48 C 147 48 165 48 165 40 C 165 33 155 30 148 30 L 105 52 L 48 80 L 22 75 Z"
            className="fill-[url(#silverChromeDark)] dark:fill-[url(#silverChromeDark)] light:fill-[url(#gunmetalChromeLight)]"
          />

          {/* Leg & loop of "R" inner curve - matches background seamlessly */}
          <path
            d="M 174 41 C 174 49 164 54 153 54 L 143 54 L 143 31 C 152 31 174 30 174 41 Z"
            className="fill-[#050505] dark:fill-[#050505] light:fill-[#F8FAFC]"
          />

          {/* Under-slash decorative luminous sphere dot */}
          <circle cx="128" cy="65" r="7" fill="url(#dotGrad)" />

          {/* --- Stylized "S" in Electric Magenta-to-Cyan Gradient --- */}
          <path
            d="M 215 15 L 273 15 C 278 15 282 17 286 21 L 269 32 C 265 30 260 29 253 29 C 241 29 233 34 233 41 C 233 48 240 52 255 54 C 278 57 290 64 290 73 C 290 84 278 88 261 88 L 205 88 L 218 74 L 258 74 C 265 74 272 72 272 66 C 272 61 266 58 251 55 C 227 52 216 46 216 35 C 216 26 226 19 240 17 L 215 15 Z"
            fill="url(#sNeonGrad)"
          />
        </g>

        {/* --- Bottom Accent Lines --- */}
        <line x1="20" y1="92" x2="88" y2="92" stroke="url(#lineLeftGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="252" y1="92" x2="320" y2="92" stroke="url(#lineRightGrad)" strokeWidth="2.5" strokeLinecap="round" />

        {/* --- "C R E A T I O N" Typography with Montserrat --- */}
        {showSubtitle && (
          <text
            x="170"
            y="94"
            className="fill-white dark:fill-white light:fill-[#0F172A]"
            fontSize="14"
            fontFamily="'Montserrat', -apple-system, sans-serif"
            fontWeight="700"
            letterSpacing="9"
            textAnchor="middle"
          >
            CREATION
          </text>
        )}
      </svg>
    </div>
  );
};
