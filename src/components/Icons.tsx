import type { SVGProps } from "react";

const PATHS: Record<string, React.ReactNode> = {
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <circle cx="12" cy="13.5" r="3.5" />
      <path d="M8 7l1.5-2.5h5L16 7" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
      <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" />
    </>
  ),
  agent: (
    <>
      <circle cx="12" cy="6" r="2.5" />
      <circle cx="6" cy="17" r="2.5" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M10.5 8l-3 6.5M13.5 8l3 6.5M8.5 17h7" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v6c0 4.5-3.2 7.8-7.5 9-4.3-1.2-7.5-4.5-7.5-9V6L12 3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
    </>
  ),
  car: (
    <>
      <path d="M5 16l1.5-5.5A2 2 0 018.4 9h7.2a2 2 0 011.9 1.5L19 16" />
      <rect x="3" y="16" width="18" height="3" rx="1" />
      <circle cx="7.5" cy="19.5" r="1.5" />
      <circle cx="16.5" cy="19.5" r="1.5" />
    </>
  ),
  truck: (
    <>
      <rect x="2" y="7" width="12" height="9" rx="1.5" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>
  ),
  hardhat: (
    <>
      <path d="M4 16a8 8 0 0116 0" />
      <path d="M2.5 16h19M10 8V5h4v3" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16V11a6 6 0 0112 0v5l1.5 2h-15L6 16z" />
      <path d="M10 20a2 2 0 004 0" />
    </>
  ),
  workflow: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="12" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8.5 6h4a3 3 0 013 3v0M8.5 18h4a3 3 0 003-3v0" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5M10 13h6M10 17h6" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </>
  ),
  cube: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
    </>
  ),
  layers: (
    <>
      <path d="M12 4l9 4.5-9 4.5-9-4.5L12 4z" />
      <path d="M3 13l9 4.5 9-4.5M3 17l9 4.5 9-4.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9.5" r="2.5" />
      <path d="M3.5 19a5.5 5.5 0 0111 0M14.5 19a4 4 0 016 0" />
    </>
  ),
  plate: (
    <>
      <rect x="3" y="8" width="18" height="8" rx="1.5" />
      <path d="M7 11v2M10 11v2M13 11v2M16 11v2" />
    </>
  ),
  flame: (
    <>
      <path d="M12 3c1 3 4 4.5 4 8.5a4 4 0 01-8 0c0-2 1-3 1.5-4 .5 1.5 1.5 2 2.5 2 0-2.5-1-4-0-6.5z" />
      <path d="M8 21h8" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3" />
      <path d="M8 12h8" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H14a3 3 0 010 6h-4a3 3 0 000 6h5.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0113 0c0 5-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 10l4-4 5 2 5-2 4 4-3 6-4 3-4-3-4-1-3-5z" />
      <path d="M12 8l-3 4 2 1.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c3 3 3 14 0 17M12 3.5c-3 3-3 14 0 17" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="4" width="16" height="17" rx="1.5" />
      <path d="M8 8h3M13 8h3M8 12h3M13 12h3M8 16h3M13 16h3M10 21v-3h4v3" />
    </>
  ),
  tractor: (
    <>
      <circle cx="7" cy="16" r="3.5" />
      <circle cx="17.5" cy="17" r="2.5" />
      <path d="M10.5 16H15M9 12.5V7h5l2 5.5h4v3" />
    </>
  ),
  graduation: (
    <>
      <path d="M2.5 9L12 4.5 21.5 9 12 13.5 2.5 9z" />
      <path d="M6.5 11v4.5c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V11M21.5 9v5" />
    </>
  ),
  plane: (
    <>
      <path d="M2.5 13.5l7 1 3 6 1.5-1-1-5.5 5-1.5c1.5-.5 2.5-1.5 2.5-2.5s-1.5-1.5-3-1L13 10.5 8 5 6.5 6l3 5.5-6 1.5-1 1z" />
    </>
  ),
  hospital: (
    <>
      <rect x="4" y="4" width="16" height="17" rx="1.5" />
      <path d="M12 8v6M9 11h6M10 21v-4h4v4" />
    </>
  ),
  crane: (
    <>
      <path d="M4 21V6l14-2v3M4 6l14 4M18 7v9M18 16l-3 5M18 16l3 5" />
      <path d="M11 7.5v6a2 2 0 004 0" />
    </>
  ),
  warehouse: (
    <>
      <path d="M3 10l9-6 9 6v11H3z" />
      <path d="M7 21v-8h10v8M7 17h10" />
    </>
  ),
  hotel: (
    <>
      <rect x="3" y="6" width="18" height="15" rx="1.5" />
      <path d="M7 10h3M14 10h3M7 14h3M14 14h3M10 21v-3h4v3M9 6V3h6v3" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
};

export function Icon({ name, className = "h-5 w-5", ...rest }: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {PATHS[name] ?? PATHS.scan}
    </svg>
  );
}
