export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  full: string;

  beforeWork: string;
  execution: string;
  afterWork: string;

  highlights: string[];

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
      "Safe and professional removal of trees of any size and complexity.",

    full: `
Tree removal requires experience, careful planning, and professional equipment.

Our team provides safe and professional tree removal services for residential and commercial properties. We remove trees of different sizes and complexity while protecting your home, landscape, and surrounding structures.

With over 8 years of experience and more than 1,000 trees safely removed, we have the knowledge and equipment to handle difficult projects, including trees located near houses, fences, power lines, and other challenging areas.

Our goal is to complete every project safely, efficiently, and with minimal impact on your property.
`,

    beforeWork: `
Inspection & Planning

Before starting any tree removal project, our team performs a detailed inspection of the tree and surrounding area.

We evaluate:

• Tree condition and structure  
• Tree size and location  
• Nearby buildings, fences, and other obstacles  
• Access to the work area  
• Potential safety risks  

After the inspection, we create a safe removal plan and determine the best equipment and techniques required for the project.

Proper preparation allows us to complete the work safely while protecting your property.
`,

    execution: `
Safe Tree Removal

Our experienced team uses professional equipment and proven techniques to safely remove trees of different sizes and complexity.

Depending on the project, we use:

• Professional chainsaws  
• Bucket trucks  
• Climbing equipment  
• Bobcat machinery  
• Crane assistance when needed  

Every step of the removal process is carefully controlled. Large branches and tree sections are removed safely to reduce risks and protect your home, landscape, and surrounding structures.

Our priority is safety, quality workmanship, and a professional result.
`,

    afterWork: `
Cleanup & Final Result

After the tree removal is completed, our team carefully cleans the entire work area.

We remove:

• Tree branches  
• Wood pieces  
• Leaves and debris  

We make sure your property is left clean, safe, and ready to use.

Firewood and larger logs can be left upon request.
`,

    highlights: [
      "Over 8 years of professional tree service",
      "1,000+ trees safely removed",
      "Experienced and trained team",
      "Professional equipment",
      "Complete cleanup after every project",
    ],

    image: "/servise 1.webp",
  },
  {
    id: "tree-trimming",

    number: "02",

    title: "Tree Trimming & Pruning",

    description:
      "Improve the health, safety, and appearance of your trees with expert trimming and pruning.",

    full: `
Tree trimming and pruning help maintain healthy trees, improve appearance, and reduce potential safety risks around your property.

Our professional team provides expert tree care services to remove dead, damaged, and overgrown branches while maintaining the natural shape and beauty of your trees.

With over 8 years of hands-on experience, we understand how to properly care for different tree species and use safe techniques that support healthier growth and protect your property.

Our goal is to improve tree health, safety, and appearance while providing reliable and professional service.
`,

    beforeWork: `
Inspection & Planning

Before starting any trimming or pruning project, our team carefully evaluates the condition of your trees and identifies areas that require attention.

We inspect:

• Tree health and overall condition  
• Dead, damaged, or dangerous branches  
• Branches affecting buildings, fences, or walkways  
• Tree structure and growth patterns  
• Safety concerns around your property  

After the inspection, we determine the best trimming approach to improve the tree while maintaining its natural structure and appearance.

Proper planning helps us achieve safe and effective results.
`,

    execution: `
Professional Tree Trimming

Our experienced team carefully removes unwanted, damaged, and overgrown branches using professional equipment and safe techniques.

The trimming process may include:

• Removing dead or hazardous branches  
• Improving tree shape and appearance  
• Reducing overgrown areas  
• Creating better clearance around buildings and structures  
• Improving air circulation and healthy growth  

We focus on maintaining the natural beauty of your trees while improving safety and protecting your property.

Every cut is made carefully and professionally to support the long-term health of your trees.
`,

    afterWork: `
Cleanup & Final Result

After completing the trimming and pruning service, our team cleans the entire work area.

We remove:

• Cut branches  
• Leaves and debris  
• Remaining tree material  

We leave your property clean and organized while your trees have a healthier, safer, and more attractive appearance.

Regular professional trimming helps maintain beautiful and strong trees for years to come.
`,

    highlights: [
      "Professional tree trimming techniques",
      "Improved tree health and appearance",
      "Reduced safety risks around your property",
      "Experienced tree specialists",
      "Complete cleanup after every project",
    ],

    image: "/servise2.webp",
  },
  {
    id: "emergency-tree-removal",

    number: "03",

    tag: "24/7 RESPONSE",

    title: "Emergency Tree Removal",

    description:
      "Fast response for storm-damaged, fallen, or hazardous trees.",

    full: `
Storms, strong winds, and unexpected tree damage can create dangerous situations for your property.

Our team provides professional emergency tree removal services to safely remove fallen, damaged, or hazardous trees. We respond quickly to help protect your home, vehicles, landscape, and surrounding areas.

With over 8 years of experience, we have the knowledge and professional equipment needed to handle emergency situations, including storm-damaged trees, fallen branches, and dangerous trees that require immediate attention.

Our priority is to restore safety to your property as quickly and safely as possible.
`,

    beforeWork: `
Emergency Assessment & Planning

Before starting emergency tree removal, our team first evaluates the situation and identifies immediate safety risks.

We inspect:

• Condition and stability of the damaged tree  
• Fallen or dangerous branches  
• Possible risks to homes, vehicles, fences, and structures  
• Access to the work area  
• Safe removal options for the situation  

After the assessment, we create a safe action plan and determine the proper equipment and techniques needed to remove the hazard.

Safety is our first priority during every emergency service.
`,

    execution: `
Emergency Tree Removal Service

Our experienced team uses professional equipment and safe removal techniques to handle storm-damaged and hazardous trees.

Depending on the situation, we may use:

• Professional chainsaws  
• Bucket trucks  
• Climbing equipment  
• Bobcat machinery  
• Crane assistance when required  

We carefully remove damaged trees and branches while controlling every step of the process to protect your property.

Our team is prepared to handle difficult situations and complete emergency work safely and efficiently.
`,

    afterWork: `
Cleanup & Property Restoration

After removing the damaged tree, our team cleans the entire work area and removes dangerous debris.

We remove:

• Fallen branches  
• Broken tree sections  
• Wood and debris  

We help restore your property by leaving the area cleaner, safer, and ready for normal use.

Firewood and larger logs can be left upon request.
`,

    highlights: [
      "Fast response for emergency situations",
      "Storm damage and hazardous tree removal",
      "8+ years of professional experience",
      "Professional equipment and safe techniques",
      "Complete cleanup after emergency work",
    ],

    image: "/servise3.webp",
  },
  {
    id: "palm-tree-trimming",

    number: "04",

    title: "Palm Tree Trimming",

    description:
      "Professional palm tree trimming to keep your palms healthy, clean, and attractive.",

    full: `
Palm trees require regular maintenance to stay healthy, safe, and attractive.

Our team provides professional palm tree trimming services to remove dead fronds, improve appearance, and maintain the overall condition of your palms.

With over 8 years of experience, we understand how to safely care for different types of palm trees while protecting your property and keeping your landscape looking its best.

Proper palm maintenance helps reduce safety risks, improve curb appeal, and keep your outdoor space clean and well-maintained.
`,

    beforeWork: `
Palm Tree Inspection & Planning

Before starting palm tree trimming, our team carefully evaluates the condition of the palm and identifies areas that require attention.

We inspect:

• Dead, dry, or damaged palm fronds  
• Overall palm tree condition and appearance  
• Potential safety risks around the property  
• Branches or growth affecting structures or walkways  
• Safe access to the work area  

After the inspection, we determine the safest trimming approach to maintain the health and natural shape of your palm trees.
`,

    execution: `
Professional Palm Tree Trimming

Our experienced team carefully removes unwanted and damaged palm fronds using professional equipment and safe techniques.

The trimming process may include:

• Removing dead or dry fronds  
• Cleaning the palm crown  
• Removing old growth  
• Improving the appearance of the palm  
• Reducing potential hazards from falling branches  

We focus on maintaining the natural beauty of your palms while improving safety and enhancing the appearance of your property.

Every project is completed carefully with attention to detail and professional workmanship.
`,

    afterWork: `
Cleanup & Final Result

After completing the palm tree trimming service, our team cleans the entire work area.

We remove:

• Trimmed palm fronds  
• Leaves and debris  
• Unwanted tree material  

We leave your property clean and organized while your palm trees have a healthier, cleaner, and more attractive appearance.

Regular palm maintenance helps keep your landscape beautiful and safe throughout the year.
`,

    highlights: [
      "Professional palm tree maintenance",
      "Improved safety and curb appeal",
      "Experienced tree service specialists",
      "Safe trimming techniques",
      "Complete cleanup after every project",
    ],

    image: "/servise4.webp",
  },
  {
    id: "land-clearing",

    number: "05",

    title: "Land & Brush Clearing",

    description:
      "Clearing overgrown lots, brush, small trees, and unwanted vegetation for residential and commercial properties.",

    full: `
Overgrown areas, unwanted vegetation, and small trees can make your property difficult to use and maintain.

Our team provides professional land and brush clearing services for residential and commercial properties. We remove brush, small trees, vines, bushes, and unwanted vegetation to help property owners improve access, prepare land for future projects, and create cleaner outdoor spaces.

With over 8 years of experience and professional equipment, we safely handle clearing projects of different sizes and complexity.

Whether you need land preparation, property cleanup, or vegetation removal, our team provides reliable and efficient service.
`,

    beforeWork: `
Site Assessment & Planning

Before starting any land clearing project, our team evaluates the property and identifies the areas that require clearing.

We inspect:

• Overgrown brush and vegetation  
• Small trees and unwanted growth  
• Property access and working conditions  
• Terrain and possible obstacles  
• Safety risks around the work area  

After the inspection, we create a clearing plan and determine the proper equipment and techniques needed to complete the project safely and efficiently.
`,

    execution: `
Professional Land Clearing Service

Our experienced team removes unwanted vegetation, brush, and small trees using professional equipment and safe methods.

The clearing process may include:

• Removing thick brush and overgrown vegetation  
• Clearing small trees and unwanted growth  
• Removing bushes, vines, and debris  
• Improving access to the property  
• Preparing land for construction, fencing, landscaping, or future projects  

We work carefully to complete each project efficiently while maintaining a safe and organized work environment.
`,

    afterWork: `
Cleanup & Final Result

After completing the clearing work, our team removes leftover vegetation and debris from the property.

We clear away:

• Cut branches  
• Brush and vegetation waste  
• Unwanted materials from the work area  

We leave your property cleaner, more accessible, and ready for its next purpose.

Our goal is to provide a smooth transition from an overgrown area to a usable and improved space.
`,

    highlights: [
      "Residential and commercial land clearing",
      "Brush and vegetation removal",
      "Professional equipment and experienced team",
      "Property preparation for future projects",
      "Complete cleanup after every service",
    ],

    image: "/servise5.webp",
  },
  {
    id: "crane-assisted-tree-removal",

    number: "06",

    title: "Crane-Assisted Tree Removal",

    description:
      "Safe removal of large or hazardous trees using crane assistance when needed.",

    full: `
Some trees are too large, damaged, or located in difficult areas where traditional removal methods are not enough.

Our team provides professional crane-assisted tree removal for complex projects that require additional equipment, advanced planning, and experienced operators.

With over 8 years of experience, we safely handle large and hazardous trees using professional equipment, including crane assistance when necessary.

This method allows us to remove difficult trees safely while reducing risks to your home, landscape, and surrounding structures.
`,

    beforeWork: `
Inspection & Crane Planning

Before starting a crane-assisted tree removal project, our team performs a detailed evaluation of the tree and property.

We inspect:

• Tree size, condition, and stability  
• Location of nearby homes, fences, and structures  
• Access points for equipment  
• Safe crane placement area  
• Potential risks during removal  

After the inspection, we create a detailed removal plan and determine the safest equipment, lifting method, and techniques required for the project.

Proper planning is essential for safe and controlled tree removal.
`,

    execution: `
Professional Crane-Assisted Removal

Our experienced team uses advanced equipment and professional techniques to safely remove large or difficult-to-access trees.

The process may include:

• Crane equipment  
• Professional chainsaws  
• Bucket trucks  
• Climbing equipment  
• Specialized rigging techniques  

Large sections of the tree are carefully secured, lifted, and removed in a controlled manner.

Using crane assistance allows our team to safely handle challenging projects while protecting your property and surrounding areas.
`,

    afterWork: `
Cleanup & Final Result

After the tree removal is completed, our team carefully cleans the entire work area.

We remove:

• Tree branches  
• Wood sections  
• Debris and leftover materials  

We make sure your property is left clean, safe, and ready to use.

Firewood and larger logs can be left upon request.

Our goal is to provide a professional result from the initial inspection to the final cleanup.
`,

    highlights: [
      "Professional crane-assisted tree removal",
      "Experience with large and complex trees",
      "Advanced equipment and safe techniques",
      "Protection of surrounding property",
      "Complete cleanup after every project",
    ],

    image: "/servise6.webp",
  },
];
