export interface ServiceGallery {
  id: string;
  before: string;
  after: string;
}

export const serviceGallery: ServiceGallery[] = [
  {
    id: "tree-removal",
    before: "/public/tree-removalbefore.jpg",
    after: "/public/tree-removalafter.jpg",
  },
  {
    id: "emergency-tree-removal",
    before: "/images/services/emergency-tree-removal/before.webp",
    after: "/images/services/emergency-tree-removal/after.webp",
  },
  {
    id: "tree-trimming",
    before: "/public/tree-trimmingbefore.jpg",
    after: "/public/tree-trimmingafter.jpg",
  },
  {
    id: "stump-grinding",
    before: "/images/services/stump-grinding/before.webp",
    after: "/images/services/stump-grinding/after.webp",
  },
  {
    id: "storm-cleanup",
    before: "/images/services/storm-cleanup/before.webp",
    after: "/images/services/storm-cleanup/after.webp",
  },
  {
    id: "land-clearing",
    before: "/public/land-clearingbefore.PNG",
    after: "/public/land-clearingafter.PNG",
  },
];