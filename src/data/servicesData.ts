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
      "Fast help with storm damaged and hazardous trees.",
    full:
      "Our team quickly removes fallen and dangerous trees after storms to keep your property safe.",
    image: "/images/danger-tree.jpg",
  },

  {
    id: "tree-trimming",
    number: "03",
    title: "Tree Trimming",
    description:
      "Improve tree health, safety and appearance.",
    full:
      "Professional trimming helps maintain healthy trees and improves the look of your property.",
    image: "/images/branches.jpg",
  },

  {
    id: "stump-grinding",
    number: "04",
    title: "Stump Grinding",
    description:
      "Remove old stumps and restore your yard.",
    full:
      "We completely remove unwanted stumps and prepare the area for new landscaping.",
    image: "/images/stump.jpg",
  },

  {
    id: "storm-cleanup",
    number: "05",
    title: "Storm Cleanup",
    description:
      "Quick cleanup after storms and severe weather.",
    full:
      "We remove fallen trees, branches and debris after storms.",
    image: "/images/storm-clean.jpg",
  },

  {
    id: "lot-clearing",
    number: "06",
    title: "Lot Clearing",
    description:
      "Prepare your property for construction or landscaping.",
    full:
      "Complete clearing of trees, brush and unwanted vegetation.",
    image: "/images/lot-clearing.jpg",
  },
];