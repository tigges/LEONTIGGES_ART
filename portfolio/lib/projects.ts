export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  fullDescription: string;
  heroImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "concrete-horizon",
    title: "Concrete Horizon",
    category: "Architecture",
    year: "2025",
    description:
      "A residential complex that dissolves the boundary between landscape and structure. Raw concrete meets floor-to-ceiling glass, framing uninterrupted views of the surrounding terrain.",
    fullDescription:
      "A residential complex that dissolves the boundary between landscape and structure. Raw concrete meets floor-to-ceiling glass, framing uninterrupted views of the surrounding terrain. The project explores the relationship between material weight and spatial lightness, creating environments that are simultaneously grounding and expansive. Each volume is positioned to respond to the topography, blurring the distinction between building and ground.",
    heroImage: "/images/img_5862.jpg",
    images: ["/images/img_5862.jpg", "/images/img_5868.jpg", "/images/img_5868_2.jpg"],
  },
  {
    slug: "lumina-series",
    title: "Lumina Series",
    category: "Art",
    year: "2024",
    description:
      "An exploration of light and color through a series of large-scale paintings. Each piece captures the fleeting quality of natural illumination, translating atmospheric conditions into pigment and form.",
    fullDescription:
      "An exploration of light and color through a series of large-scale paintings. Each piece captures the fleeting quality of natural illumination, translating atmospheric conditions into pigment and form. The works investigate how light transforms space—how a single beam can define a room, or how the hour of day can alter one's perception of an entire landscape. The series invites viewers to slow down and notice what they might otherwise overlook.",
    heroImage: "/images/img_0083.jpg",
    images: ["/images/img_0083.jpg", "/images/img_0181.jpg", "/images/img_0253.jpg"],
  },
  {
    slug: "form-function",
    title: "Form & Function",
    category: "Product Design",
    year: "2024",
    description:
      "A product design collection that challenges the boundary between utilitarian objects and sculptural forms. Each piece is designed to perform beautifully while functioning precisely.",
    fullDescription:
      "A product design collection that challenges the boundary between utilitarian objects and sculptural forms. Each piece is designed to perform beautifully while functioning precisely. The collection explores how industrial materials—steel, cast iron, handblown glass—can be reinterpreted through a lens of craft and intentionality. The result is a set of objects that earn a permanent place in the everyday environment.",
    heroImage: "/images/img_5837.jpg",
    images: ["/images/img_5837.jpg", "/images/img_5840.jpg", "/images/img_5847.jpg"],
  },
  {
    slug: "urban-fragments",
    title: "Urban Fragments",
    category: "Art",
    year: "2023",
    description:
      "A photographic study of urban texture, decay, and accidental beauty. The series documents the overlooked surfaces of the city—peeling paint, weathered concrete, rust and shadow.",
    fullDescription:
      "A photographic study of urban texture, decay, and accidental beauty. The series documents the overlooked surfaces of the city—peeling paint, weathered concrete, rust and shadow. Shot over two years across multiple cities, the images together form a meditation on impermanence and the unintentional aesthetics of human habitation. The work invites a reexamination of what we call beautiful, and what we choose to erase.",
    heroImage: "/images/img_3138.jpg",
    images: ["/images/img_3138.jpg", "/images/img_0336.jpg", "/images/img_5853.jpg"],
  },
  {
    slug: "pavilion-zero",
    title: "Pavilion Zero",
    category: "Architecture",
    year: "2023",
    description:
      "A temporary pavilion designed as a pure spatial experience. The structure uses a minimal material palette to create a sequence of threshold conditions—inside, outside, between.",
    fullDescription:
      "A temporary pavilion designed as a pure spatial experience. The structure uses a minimal material palette to create a sequence of threshold conditions—inside, outside, between. Constructed from weathering steel and untreated timber, the pavilion was designed to change over time, taking on the character of its environment. The project asks: what is the minimum architecture required to make a place?",
    heroImage: "/images/img_5853.jpg",
    images: ["/images/img_5853.jpg", "/images/img_0336.jpg", "/images/img_1057.jpg"],
  },
  {
    slug: "mono-objects",
    title: "Mono Objects",
    category: "Product Design",
    year: "2022",
    description:
      "A collection of monochromatic objects exploring the expressive potential of single-color compositions. Material, texture, and form take precedence when color is removed as a variable.",
    fullDescription:
      "A collection of monochromatic objects exploring the expressive potential of single-color compositions. Material, texture, and form take precedence when color is removed as a variable. The series challenges makers and viewers alike to see objects differently—to notice the interplay of matte and gloss, rough and smooth, weight and lightness. Each object is made by hand in a small production run.",
    heroImage: "/images/img_0181.jpg",
    images: ["/images/img_0181.jpg", "/images/img_0253.jpg", "/images/img_0083.jpg"],
  },
  {
    slug: "shadow-studies",
    title: "Shadow Studies",
    category: "Art",
    year: "2022",
    description:
      "A series of drawings made by tracing the movement of shadows throughout the day. Time becomes the collaborator—the work is never finished, only paused.",
    fullDescription:
      "A series of drawings made by tracing the movement of shadows throughout the day. Time becomes the collaborator—the work is never finished, only paused. Beginning at sunrise and ending at dusk, each drawing records twelve hours of solar movement across a single surface. The resulting images are dense, layered, and entirely site-specific. No two are alike, because no two days are alike.",
    heroImage: "/images/frog1.jpg",
    images: ["/images/frog1.jpg", "/images/frog2.jpg", "/images/img_1057.jpg"],
  },
  {
    slug: "bridge-house",
    title: "Bridge House",
    category: "Architecture",
    year: "2021",
    description:
      "A private residence that spans a dry creek bed, treating the act of crossing as the primary architectural gesture. The house is a bridge—a passage between two states of being.",
    fullDescription:
      "A private residence that spans a dry creek bed, treating the act of crossing as the primary architectural gesture. The house is a bridge—a passage between two states of being. Structural necessity becomes spatial poetry: the home is lifted from the ground, connecting two ridgelines and opening views in all directions. The seasonal flow of the creek below is framed as a living element of the interior experience.",
    heroImage: "/images/hero.jpg",
    images: ["/images/hero.jpg", "/images/img_5868.jpg", "/images/img_5862.jpg"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
