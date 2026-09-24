import type { Industry } from "./types";
import { DEEP_INDUSTRY_DATA } from "./deep-industries";

export const INDUSTRIES: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing & Plant Operations",
    shortName: "Manufacturing",
    icon: "hardhat",
    headline: "Zero-harm plants, watched by the line.",
    description:
      "On the factory floor, a missed hazard is a shutdown or an injury. CVS turns every line camera into a safety, security and inventory sensor, flagging violations the instant they happen.",
    why: [
      "Zero-harm safety & compliance evidence",
      "Less unplanned downtime & incident cost",
      "Theft, shrink and restricted-zone control",
    ],
    whereItRuns: ["Plants", "Production lines", "Yards", "Stores"],
    highlights: ["PPE Violation", "Fire & Smoke", "Intrusion", "Loitering / Zones", "Inventory Count", "Occupancy"],
    fit: "Very High",
    deepKey: "manufacturing",
    heroImage: "/industries/manufacturing/1.jpg",
  },
  {
    slug: "warehousing",
    name: "Warehousing",
    shortName: "Warehousing",
    icon: "warehouse",
    headline: "Count everything. Guard every aisle.",
    description:
      "Stock walks, forklifts collide, docks sit unwatched. CVS counts inventory to 99%+ accuracy and keeps eyes on every aisle, gate and dock, around the clock.",
    why: ["Shrink down, stock accuracy up", "Dock, aisle and pedestrian safety", "Unmanned 24/7 perimeter & gate watch"],
    whereItRuns: ["DCs", "Racking", "Docks", "Gates"],
    highlights: ["Inventory 99%+", "Forklift Safety", "Intrusion", "PPE Violation", "Fire & Smoke", "ANPR Gate"],
    fit: "Very High",
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    shortName: "Logistics",
    icon: "truck",
    headline: "Every gate, yard and load, in view.",
    description:
      "Throughput lives and dies at the gate and the yard. CVS automates access, tracks vehicle movement and secures cargo across sites, surfaced in one Digital Twin.",
    why: ["Gate & yard automation, faster turns", "Cargo security and tamper alerts", "Multi-site throughput visibility"],
    whereItRuns: ["Yards", "Gates", "Hubs", "Cross-docks"],
    highlights: ["ANPR Yard", "Vehicle Movement", "Intrusion", "Dwell / Loitering", "Dock Occupancy", "Digital Twin"],
    fit: "High",
  },
  {
    slug: "vehicle-systems",
    name: "Vehicle Systems",
    shortName: "Vehicle Systems",
    icon: "car",
    headline: "Read every plate. Control every lane.",
    description:
      "From barrier to bay, CVS reads plates at up to 98% accuracy, automates access and turns vehicle flow into live intelligence for parking, traffic and security.",
    why: ["Automated, touchless vehicle access", "Optimised parking & traffic flow", "Blacklist alerts & tailgating control"],
    whereItRuns: ["Barriers", "Car parks", "Campuses", "Roads"],
    highlights: ["ANPR 98%", "Smart Parking", "Vehicle Count", "Whitelist Access", "Intrusion", "Instant Alerts"],
    fit: "High",
  },
  {
    slug: "workspace",
    name: "Workspace & Coworking",
    shortName: "Workspaces",
    icon: "building",
    headline: "Safe, secure, well-used space.",
    description:
      "Corporate campuses and coworking floors need security without friction. CVS covers access tiers, occupancy and safety while turning space usage into data you can plan around.",
    why: ["After-hours security & access control", "Real space-utilisation intelligence", "Safety compliance & evacuation readiness"],
    whereItRuns: ["Offices", "Coworking floors", "Campuses", "Meeting & common areas"],
    highlights: ["Intrusion", "Occupancy", "Loitering", "Space Analytics", "Fire & Smoke", "ANPR Parking"],
    fit: "Medium–High",
    deepKey: "workspace",
    heroImage: "/industries/workspace/1.jpg",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    shortName: "Hospitality",
    icon: "hotel",
    headline: "Flow, safety and a better guest day.",
    description:
      "Crowds, queues and open floors are hard to watch by hand. CVS manages crowd flow, protects guests and cuts loss, without touching guest identity.",
    why: ["Guest safety & crowd-density control", "Shorter queues, smoother experience", "Loss prevention across floors & back-of-house"],
    whereItRuns: ["Hotels", "Malls", "Venues", "Attractions"],
    highlights: ["Crowd Management", "Occupancy", "Queue Analytics", "Fire & Smoke", "Intrusion", "ANPR Valet"],
    fit: "Medium–High",
  },
  {
    slug: "hospital",
    name: "Hospital & Healthcare",
    shortName: "Healthcare",
    icon: "hospital",
    headline: "Protect patients. Respect privacy.",
    description:
      "Hospitals must secure restricted zones and keep people safe, without surveilling identity. CVS is biometric-free by design, clearing DPDP and BIPA scrutiny.",
    why: ["Patient & staff safety monitoring", "Restricted-area & asset security", "Privacy-by-design regulatory fit"],
    whereItRuns: ["Wards", "Pharmacies", "Entrances", "Car parks"],
    highlights: ["Restricted Zones", "Fall / Safety", "Occupancy", "Fire & Smoke", "Privacy by Design", "Ward Safety"],
    fit: "High",
    deepKey: "hospital",
    heroImage: "/industries/hospital/1.jpg",
  },
  {
    slug: "airport",
    name: "Airport Operations",
    shortName: "Airports",
    icon: "plane",
    headline: "Secure the perimeter. Move the crowd.",
    description:
      "Airports run on security and flow at scale. CVS watches the fence line, reads access plates, tracks passenger flow and flags abandoned objects, all at once.",
    why: ["Perimeter & landside security", "Terminal crowd & queue management", "Airside safety & operational visibility"],
    whereItRuns: ["Perimeter", "Terminals", "Apron", "Car parks"],
    highlights: ["Perimeter Intrusion", "Passenger Flow", "ANPR Access", "Abandoned Object", "Airside PPE", "Fire & Smoke"],
    fit: "High",
    deepKey: "airport",
    heroImage: "/industries/airport/1.jpg",
  },
  {
    slug: "managed-farmland",
    name: "Managed Farmland",
    shortName: "Farmland",
    icon: "tractor",
    headline: "Every acre. One portfolio view.",
    description:
      "Multi-site farmland communities combine perimeter security, agricultural operations and owner/guest experience across scattered acreage. CVS unifies every site into one portfolio view.",
    why: [
      "Perimeter, gate and plot security across scattered sites",
      "Irrigation, water-body and plantation health monitoring",
      "Owner, guest and clubhouse experience, visible remotely",
    ],
    whereItRuns: ["Perimeters", "Gates", "Plots", "Clubhouses", "Water bodies"],
    highlights: ["Perimeter Breach", "Gate Access Control", "Irrigation Leak Detection", "Wildlife Intrusion", "Swimming Pool Safety", "Portfolio Digital Twin"],
    fit: "High",
    deepKey: "farmland",
    heroImage: "/industries/farmland/1.jpg",
  },
  {
    slug: "campus",
    name: "Campus & Higher Education",
    shortName: "Campus",
    icon: "graduation",
    headline: "The whole campus. One platform.",
    description:
      "Universities run open, high-footfall environments (dorms, labs, parking, athletics) where safety and space intelligence both matter. CVS covers the full campus footprint on one platform.",
    why: ["Restricted-area, perimeter & after-hours security", "Classroom, library and dining utilisation", "Parking, shuttle & pedestrian safety"],
    whereItRuns: ["Dorms", "Labs", "Parking", "Athletics", "Lecture halls"],
    highlights: ["Unauthorized Access", "Weapon / Firearm Detection", "Classroom Utilization", "Parking Intelligence", "Fire & Smoke", "AI Campus Digital Twin"],
    fit: "High",
    deepKey: "campus",
    heroImage: "/industries/campus/1.jpg",
  },
  {
    slug: "construction",
    name: "Construction Sites",
    shortName: "Construction",
    icon: "crane",
    headline: "Every worker, load and gate. Watched.",
    description:
      "Active construction sites combine worker safety, heavy equipment coordination, security and progress tracking in a constantly changing environment. CVS turns site cameras into a live safety, security and progress intelligence layer.",
    why: [
      "PPE, fall-protection and exclusion-zone compliance",
      "Crane, load-path and machinery proximity safety",
      "Perimeter security and progress tracking vs. BIM",
    ],
    whereItRuns: ["Active sites", "Edges & heights", "Crane zones", "Perimeters"],
    highlights: ["PPE Compliance", "Fall Protection at Height", "Crane & Suspended-Load Zone", "Perimeter Fence Breach", "Progress Tracking (vs. BIM)", "Site Command Center"],
    fit: "High",
    deepKey: "construction",
    heroImage: "/industries/construction/1.jpg",
  },
];

export function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export function getDeepData(industry: Industry) {
  return industry.deepKey ? DEEP_INDUSTRY_DATA[industry.deepKey] : undefined;
}

export function countUseCases(industry: Industry) {
  return getDeepData(industry)?.items.length ?? industry.highlights.length;
}
