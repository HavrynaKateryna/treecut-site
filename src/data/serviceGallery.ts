export interface ServiceGallery {
  id: string;
  before: string;
  after: string;
}

export const serviceGallery: ServiceGallery[] = [
  {
    id: "tree-removal",
    before:
      "/public/beforeafter/tree-removalbefore .webp",
    after:
      "/public/beforeafter/tree-removalafter.webp",
  },
  {
    id: "tree-trimming",
    before:
      "/public/beforeafter/tree-trimmingbefore.webp",
    after:
      "/public/beforeafter/tree-trimmingafter.webp",
  },
  {
    id: "emergency-tree-removal",
    before: "/public/tree-trimmingbefore.jpg",
    after: "/public/tree-trimmingafter.jpg",
  },
  {
    id: "palm-tree-trimming",
    before:
      "/images/services/stump-grinding/before.webp",
    after:
      "/images/services/stump-grinding/after.webp",
  },
  {
    id: "land-clearing",
    before:
      "/public/beforeafter/land-clearingbefore.webp",
    after:
      "/public/beforeafter/land-clearingafter.webp",
  },
  {
    id: "crane-assisted-tree-removal",
    before: "/public/land-clearingbefore.PNG",
    after: "/public/land-clearingafter.PNG",
  },
];
