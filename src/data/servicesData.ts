export interface Service {
  id: string;

  number: string;

  tag?: string;

  title: string;

  description: string;

  full: string;

  // SEO
  h1: string;

  seoTitle: string;

  seoDescription: string;

  seoKeywords: string[];

  // LOCAL SEO
  areas: string[];

  serviceAreasText: string;

  // PROCESS
  beforeWork: string;

  execution: string;

  afterWork: string;

  highlights: string[];

  image: string;
}

export const services: Service[] = [
  {
    id: "tree-removal",

    number: "01",

    tag: "POPULAR",

    title: "Tree Removal",

    h1: "Professional Tree Removal in Jacksonville FL",

    seoTitle:
      "Tree Removal Jacksonville FL | Tim's Tree Service",

    seoDescription:
      "Professional tree removal service in Jacksonville Florida. Safe removal of dangerous, dead, and unwanted trees with complete cleanup.",

    seoKeywords: [
      "tree removal Jacksonville FL",
      "tree removal service Jacksonville",
      "dangerous tree removal Jacksonville",
      "remove tree near me",
    ],

    areas: [
      "Jacksonville",
      "Orange Park",
      "Fleming Island",
      "Atlantic Beach",
      "St Augustine",
    ],

    serviceAreasText:
      "We provide professional tree removal services in Jacksonville FL and surrounding areas including Orange Park, Fleming Island, Atlantic Beach, and St Augustine.",

    description:
      "Safe and professional removal of trees of any size and complexity.",

    full: `
Tree removal requires experience, careful planning, and professional equipment.

Our team provides safe and professional tree removal services for residential and commercial properties.

We remove trees of different sizes and complexity while protecting your home, landscape, and surrounding structures.

With over 8 years of experience and more than 1,000 trees safely removed, we have the knowledge and equipment to handle difficult projects.

Our goal is to complete every project safely, efficiently, and with minimal impact on your property.
`,

    beforeWork: `
Inspection & Planning

Before starting any tree removal project, our team performs a detailed inspection of the tree and surrounding area.

We evaluate:

• Tree condition and structure
• Tree size and location
• Nearby buildings and obstacles
• Access to the work area
• Potential safety risks

After inspection, we create a safe removal plan.
`,

    execution: `
Safe Tree Removal

Our experienced team uses professional equipment and proven techniques to safely remove trees.

Depending on the project, we use:

• Professional chainsaws
• Bucket trucks
• Climbing equipment
• Bobcat machinery
• Crane assistance when needed

Every step is carefully controlled to protect your property.
`,

    afterWork: `
Cleanup & Final Result

After tree removal is completed, our team cleans the entire work area.

We remove:

• Tree branches
• Wood pieces
• Leaves and debris

We leave your property clean, safe, and ready to use.
`,

    highlights: [
      "Residential and commercial tree removal",

      "Dangerous tree removal",

      "Professional equipment",

      "Experienced tree specialists",

      "Complete cleanup after every project",
    ],

    image: "/servise 1.webp",
  },

  {
    id: "tree-trimming",

    number: "02",

    title: "Tree Trimming & Pruning",

    h1: "Professional Tree Trimming & Pruning in Jacksonville FL",

    seoTitle:
      "Tree Trimming Jacksonville FL | Tree Pruning Service",

    seoDescription:
      "Professional tree trimming and pruning service in Jacksonville Florida. Improve tree health, safety, and appearance with expert care.",

    seoKeywords: [
      "tree trimming Jacksonville FL",

      "tree pruning Jacksonville",

      "tree service Jacksonville",
    ],

    areas: [
      "Jacksonville",

      "Orange Park",

      "Fleming Island",

      "Atlantic Beach",

      "St Augustine",
    ],

    serviceAreasText:
      "Professional tree trimming services available throughout Jacksonville FL and nearby communities.",

    description:
      "Improve the health, safety, and appearance of your trees with expert trimming and pruning.",

    full: `
Tree trimming and pruning help maintain healthy trees, improve appearance, and reduce potential safety risks around your property.

Our professional team removes dead, damaged, and overgrown branches while maintaining the natural shape of your trees.

With over 8 years of experience, we provide safe and reliable tree care services for Jacksonville homeowners and businesses.
`,

    beforeWork: `
Inspection & Planning

Before trimming, our team evaluates tree health and identifies branches requiring attention.

We inspect:

• Tree condition
• Dead or damaged branches
• Safety concerns
• Growth patterns

Proper planning helps achieve safe results.
`,

    execution: `
Professional Tree Trimming

Our team carefully removes unwanted and damaged branches using professional equipment.

The service may include:

• Removing dead branches
• Improving tree shape
• Creating clearance around buildings
• Supporting healthy growth
`,

    afterWork: `
Cleanup & Final Result

After trimming, we remove branches, leaves, and debris.

Your property is left clean while your trees look healthier and safer.
`,

    highlights: [
      "Professional tree trimming techniques",

      "Improved tree health and appearance",

      "Reduced safety risks",

      "Experienced tree specialists",

      "Complete cleanup",
    ],

    image: "/servise2.webp",
  },
  {
    id: "emergency-tree-removal",

    number: "03",

    tag: "24/7 RESPONSE",

    title: "Emergency Tree Removal",

    h1: "Emergency Tree Removal in Jacksonville FL",

    seoTitle:
      "Emergency Tree Removal Jacksonville FL | Storm Damage Service",

    seoDescription:
      "Fast and professional emergency tree removal in Jacksonville Florida. Storm damage, fallen trees, and hazardous tree removal services.",

    seoKeywords: [
      "emergency tree removal Jacksonville FL",

      "storm damage tree removal",

      "fallen tree removal Jacksonville",
    ],

    areas: [
      "Jacksonville",

      "Orange Park",

      "Fleming Island",

      "Atlantic Beach",

      "St Augustine",
    ],

    serviceAreasText:
      "Emergency tree removal services available in Jacksonville FL and surrounding areas after storms, accidents, and dangerous tree situations.",

    description:
      "Fast response for storm-damaged, fallen, or hazardous trees.",

    full: `
Storms, strong winds, and unexpected tree damage can create dangerous situations for your property.

Our team provides professional emergency tree removal services to safely remove fallen, damaged, or hazardous trees.

We respond quickly to help protect your home, vehicles, landscape, and surrounding areas.

With over 8 years of experience, we have the equipment and knowledge needed for difficult emergency situations.
`,

    beforeWork: `
Emergency Assessment & Planning

Before starting emergency tree removal, our team evaluates the situation and identifies immediate safety risks.

We inspect:

• Tree stability
• Fallen branches
• Damage to structures
• Access to the work area
• Safe removal options

Safety is our first priority.
`,

    execution: `
Emergency Tree Removal Service

Our experienced team uses professional equipment and safe removal techniques.

Depending on the situation:

• Chainsaws
• Bucket trucks
• Climbing equipment
• Bobcat machinery
• Crane assistance

We carefully remove damaged trees while protecting your property.
`,

    afterWork: `
Cleanup & Property Restoration

After removing the damaged tree, we clean the entire work area.

We remove:

• Fallen branches
• Broken tree sections
• Wood and debris

Your property is left cleaner and safer.
`,

    highlights: [
      "Fast response for emergencies",

      "Storm damage tree removal",

      "8+ years of experience",

      "Professional equipment",

      "Complete cleanup",
    ],

    image: "/servise3.webp",
  },

  {
    id: "palm-tree-trimming",

    number: "04",

    title: "Palm Tree Trimming",

    h1: "Professional Palm Tree Trimming in Jacksonville FL",

    seoTitle:
      "Palm Tree Trimming Jacksonville FL | Palm Tree Care",

    seoDescription:
      "Professional palm tree trimming service in Jacksonville Florida. Keep your palms healthy, safe, and beautiful with expert maintenance.",

    seoKeywords: [
      "palm tree trimming Jacksonville FL",

      "palm tree service Jacksonville",

      "palm maintenance Florida",
    ],

    areas: [
      "Jacksonville",

      "Orange Park",

      "Fleming Island",

      "Atlantic Beach",

      "St Augustine",
    ],

    serviceAreasText:
      "Professional palm tree trimming services for Jacksonville FL homes and businesses.",

    description:
      "Professional palm tree trimming to keep your palms healthy, clean, and attractive.",

    full: `
Palm trees require regular maintenance to stay healthy, safe, and attractive.

Our team provides professional palm tree trimming services to remove dead fronds, improve appearance, and maintain the overall condition of your palms.

With over 8 years of experience, we safely care for palm trees while protecting your property.
`,

    beforeWork: `
Palm Tree Inspection & Planning

Before trimming, our team evaluates the palm tree condition.

We inspect:

• Dead or damaged fronds
• Tree condition
• Safety risks
• Nearby structures
• Access to the work area

We determine the safest trimming approach.
`,

    execution: `
Professional Palm Tree Trimming

Our team carefully removes unwanted palm growth.

The service may include:

• Removing dead fronds
• Cleaning palm crowns
• Improving appearance
• Reducing hazards

Every project is completed safely and professionally.
`,

    afterWork: `
Cleanup & Final Result

After trimming, we remove:

• Palm fronds
• Leaves
• Tree debris

Your property is left clean and organized.
`,

    highlights: [
      "Professional palm maintenance",

      "Improved safety and appearance",

      "Experienced specialists",

      "Safe trimming techniques",

      "Complete cleanup",
    ],

    image: "/servise4.webp",
  },
  {
    id: "land-clearing",

    number: "05",

    title: "Land & Brush Clearing",

    h1: "Professional Land Clearing Service in Jacksonville FL",

    seoTitle:
      "Land Clearing Jacksonville FL | Brush Removal Service",

    seoDescription:
      "Professional land and brush clearing service in Jacksonville Florida. Remove overgrown vegetation, brush, and unwanted growth.",

    seoKeywords: [
      "land clearing Jacksonville FL",

      "brush removal Jacksonville",

      "lot clearing Jacksonville",
    ],

    areas: [
      "Jacksonville",

      "Orange Park",

      "Fleming Island",

      "Atlantic Beach",

      "St Augustine",
    ],

    serviceAreasText:
      "Professional land clearing and brush removal services for residential and commercial properties in Jacksonville FL and nearby areas.",

    description:
      "Clearing overgrown lots, brush, small trees, and unwanted vegetation for residential and commercial properties.",

    full: `
Overgrown areas, unwanted vegetation, and small trees can make your property difficult to use and maintain.

Our team provides professional land and brush clearing services for residential and commercial properties.

We remove brush, small trees, vines, bushes, and unwanted vegetation to create cleaner and more usable outdoor spaces.

With over 8 years of experience and professional equipment, we handle clearing projects of different sizes and complexity.
`,

    beforeWork: `
Site Assessment & Planning

Before starting land clearing, our team evaluates your property.

We inspect:

• Brush and vegetation
• Small trees
• Property access
• Terrain conditions
• Possible obstacles

After inspection, we create a safe clearing plan.
`,

    execution: `
Professional Land Clearing Service

Our team removes unwanted vegetation using professional equipment.

The process may include:

• Brush removal
• Small tree removal
• Vegetation clearing
• Property preparation
• Debris removal

We complete projects efficiently while maintaining a safe work area.
`,

    afterWork: `
Cleanup & Final Result

After clearing work, we remove leftover vegetation and debris.

We clear:

• Branches
• Brush
• Vegetation waste
• Unwanted materials

Your property is left cleaner and ready for future use.
`,

    highlights: [
      "Residential and commercial clearing",

      "Brush and vegetation removal",

      "Professional equipment",

      "Property preparation",

      "Complete cleanup",
    ],

    image: "/servise5.webp",
  },

  {
    id: "crane-assisted-tree-removal",

    number: "06",

    title: "Crane-Assisted Tree Removal",

    h1: "Crane Tree Removal Service in Jacksonville FL",

    seoTitle:
      "Crane Tree Removal Jacksonville FL | Large Tree Removal",

    seoDescription:
      "Safe crane-assisted tree removal in Jacksonville Florida. Professional equipment for large, dangerous, and difficult tree removal projects.",

    seoKeywords: [
      "crane tree removal Jacksonville",

      "large tree removal Jacksonville FL",

      "tree removal crane service",
    ],

    areas: [
      "Jacksonville",

      "Orange Park",

      "Fleming Island",

      "Atlantic Beach",

      "St Augustine",
    ],

    serviceAreasText:
      "Crane-assisted tree removal services for large and dangerous trees throughout Jacksonville FL and surrounding communities.",

    description:
      "Safe removal of large or hazardous trees using crane assistance when needed.",

    full: `
Some trees are too large, damaged, or located in difficult areas where traditional removal methods are not enough.

Our team provides professional crane-assisted tree removal for complex projects requiring advanced equipment and planning.

With over 8 years of experience, we safely remove large and hazardous trees while protecting your property.
`,

    beforeWork: `
Inspection & Crane Planning

Before crane-assisted removal, our team evaluates:

• Tree size and condition
• Nearby structures
• Equipment access
• Crane placement area
• Safety risks

We create a detailed removal plan.
`,

    execution: `
Professional Crane-Assisted Removal

Our experienced team uses:

• Crane equipment
• Chainsaws
• Bucket trucks
• Climbing equipment
• Rigging systems

Large sections are carefully lifted and removed in a controlled process.
`,

    afterWork: `
Cleanup & Final Result

After removal, our team cleans the work area.

We remove:

• Branches
• Wood sections
• Debris

Your property is left clean and safe.
`,

    highlights: [
      "Crane-assisted tree removal",

      "Large tree specialists",

      "Advanced equipment",

      "Safe removal techniques",

      "Complete cleanup",
    ],

    image: "/servise6.webp",
  },
];
