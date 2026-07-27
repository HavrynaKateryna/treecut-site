export interface ServiceGallery {
  id: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

export const serviceGallery: ServiceGallery[] = [
  {
    id: "tree-removal",

    before:
      "/beforeafter/tree-removalbefore.webp",

    after: "/beforeafter/tree-removalafter.webp",

    beforeAlt:
      "Tree removal project before professional tree service",

    afterAlt:
      "Tree removal project after professional tree service",
  },

  {
    id: "tree-trimming",

    before:
      "/beforeafter/tree-trimmingbefore.webp",

    after: "/beforeafter/tree-trimmingafter.webp",

    beforeAlt:
      "Tree trimming project before professional pruning service",

    afterAlt:
      "Tree trimming project after professional pruning service",
  },

  {
    id: "emergency-tree-removal",

    before: "/tree-trimmingbefore.jpg",

    after: "/tree-trimmingafter.jpg",

    beforeAlt:
      "Emergency tree removal project before professional service",

    afterAlt:
      "Emergency tree removal project after professional service",
  },

  {
    id: "palm-tree-trimming",

    before:
      "/beforeafter/palm-tree-trimmingbefore.webp",

    after:
      "/beforeafter/palm-tree-trimmingafter.webp",

    beforeAlt:
      "Palm tree before professional trimming service",

    afterAlt:
      "Palm tree after professional trimming service",
  },

  {
    id: "land-clearing",

    before:
      "/beforeafter/land-clearingbefore.webp",

    after: "/beforeafter/land-clearingafter.webp",

    beforeAlt:
      "Property before professional land clearing service",

    afterAlt:
      "Property after professional land clearing service",
  },

  {
    id: "crane-assisted-tree-removal",

    before: "/land-clearingbefore.PNG",

    after: "/land-clearingafter.PNG",

    beforeAlt:
      "Tree removal site before crane-assisted tree removal",

    afterAlt:
      "Tree removal site after crane-assisted tree removal",
  },
];
