export interface ServiceGallery {
  id: string;

  before: string;
  after: string;

  beforeAlt: string;
  afterAlt: string;

  beforePosition?: string;
  afterPosition?: string;

  beforeFit?: "cover" | "contain";
  afterFit?: "cover" | "contain";
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

    beforePosition: "center",
    afterPosition: "center",

    beforeFit: "cover",
    afterFit: "cover",
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

    beforePosition: "center top",
    afterPosition: "center top",

    beforeFit: "cover",
    afterFit: "cover",
  },

  {
    id: "emergency-tree-removal",

    before:
      "/beforeafter/emergency-tree-removalbefore.webp",

    after:
      "/beforeafter/emergency-tree-removalafter.webp",

    beforeAlt:
      "Emergency tree removal project before professional service",

    afterAlt:
      "Emergency tree removal project after professional service",

    beforeFit: "contain",
    afterFit: "contain",
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

    beforePosition: "center top",

    afterPosition: "center top",

    beforeFit: "cover",

    afterFit: "cover",
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

    beforeFit: "contain",

    afterFit: "contain",
  },

  {
    id: "crane-assisted-tree-removal",

    before:
      "/beforeafter/crane-assisted-tree-removalbefore.webp",

    after:
      "/beforeafter/crane-assisted-tree-removalafter.webp",

    beforeAlt:
      "Tree removal site before crane-assisted tree removal",

    afterAlt:
      "Tree removal site after crane-assisted tree removal",

    beforePosition: "center center",

    afterPosition: "center center",

    beforeFit: "contain",

    afterFit: "contain",
  },
];
