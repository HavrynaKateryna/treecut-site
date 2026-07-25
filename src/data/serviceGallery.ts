export interface ServiceGallery {
  id: string;
  before: string;
  after: string;
}

export const serviceGallery: ServiceGallery[] = [
  {
    id: "tree-removal",
    before:
      "/beforeafter/tree-trimmingbefore.webp",
    after: "/beforeafter/tree-removalafter.webp",
  },
  {
    id: "tree-trimming",
    before:
      "/beforeafter/tree-trimmingbefore.webp",
    after: "/beforeafter/tree-trimmingafter.webp",
  },
  {
    id: "emergency-tree-removal",
    before: "/tree-trimmingbefore.jpg",
    after: "/tree-trimmingafter.jpg",
  },
  {
    id: "palm-tree-trimming",
    before:
      "/beforeafter/palm-tree-trimmingbefore.webp",
    after:
      "/beforeafter/palm-tree-trimmingafter.webp",
  },
  {
    id: "land-clearing",
    before:
      "/beforeafter/land-clearingbefore.webp",
    after: "/beforeafter/land-clearingafter.webp",
  },
  {
    id: "crane-assisted-tree-removal",
    before: "/land-clearingbefore.PNG",
    after: "/land-clearingafter.PNG",
  },
];
