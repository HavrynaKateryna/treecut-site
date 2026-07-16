export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  full: string;
  image: string;
  tag?: string;
}

export const services: Service[] = [
  {
    id: "tree-removal",
    number: "01",
    tag: "POPULAR",
    title: "Tree Removal",
    description:
      "Safe and professional removal of unwanted or dangerous trees.",
    full:
      "We remove trees of all sizes using professional equipment and safe techniques while protecting your property.",
    image: "/images/tree-cut.jpg",
  },
  {
    id: "emergency-tree-removal",
    number: "02",
    tag: "24/7 RESPONSE",
    title: "Emergency Tree Removal",
    description:
      "Fast help with storm-damaged and hazardous trees.",
    full:
      "Our team quickly removes fallen and dangerous trees after storms to keep your property safe.",
    image: "/images/danger-tree.jpg",
  },
  {
    id: "tree-trimming",
    number: "03",
    title: "Tree Trimming",
    description:
      "Improve tree health, safety, and appearance.",
    full:
      "Professional trimming helps maintain healthy trees while improving the beauty and safety of your property.",
    image: "/images/branches.jpg",
  },
  {
  id: "wood-slabs",
  number: "04",
  title: "Wood Slabs",
  description:
    "Custom wood slab milling, drying, and preparation.",
  full:
    "We transform quality logs into beautiful live-edge wood slabs. Our process includes professional milling, careful drying, and preparation, creating durable natural wood pieces ready for furniture, countertops, tables, shelving, and custom woodworking projects.",
  image: "/images/wood-slabs.jpg",
},
  {
    id: "storm-cleanup",
    number: "05",
    title: "Storm Cleanup",
    description:
      "Quick cleanup after storms and severe weather.",
    full:
      "We remove fallen trees, broken branches, and storm debris to restore your property quickly and safely.",
    image: "/images/storm-clean.jpg",
  },
  {
    id: "land-clearing",
    number: "06",
    title: "Land Clearing",
    description:
      "From overgrown land to construction-ready property.",
    full:
      "We prepare overgrown properties for construction by clearing trees, brush, bushes, vines, and vegetation. We also remove stumps and roots, haul away all debris, and leave your lot clean and ready for building, grading, fencing, or development.",
    image: "/images/land-clearing.jpg",
  },
];