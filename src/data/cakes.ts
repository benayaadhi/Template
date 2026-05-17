import type { SectionForm, SectionPalette } from "@/components/SectionView";

export type Occasion = "Birthday" | "Celebration" | "Daily" | "Gifting";
export type Flavor = "Chocolate" | "Fruit" | "Indonesian" | "Floral" | "Spirit";

export interface Cake {
  slug: string;
  name: string;
  plate: string;           // "Pl. 01.a" style
  inspiration: string;     // a sentence on origin
  description: string;     // short italic line for cards
  layers: { name: string; note?: string }[];
  flavorNotes: string[];
  occasions: Occasion[];
  flavors: Flavor[];
  sizes: { label: string; price: number }[];
  leadTime: string;        // "H-3"
  pairing?: { tea: string; note: string };
  form: SectionForm;
  palette: SectionPalette;
}

const rp = (n: number) => n; // store as integer thousands? keep as IDR integer

export const cakes: Cake[] = [
  {
    slug: "elsa",
    name: "Élsa",
    plate: "Pl. 01.a",
    inspiration:
      "An entremet built around the architecture of nastar — pineapple jam at the centre, almond financier as the structural strata, white chocolate cream holding the form.",
    description: "Nastar reconsidered as a layered entremet.",
    layers: [
      { name: "White chocolate chantilly", note: "Top" },
      { name: "Pineapple jam (slow-reduced)" },
      { name: "Almond financier" },
      { name: "Vanilla shortbread base" },
    ],
    flavorNotes: ["Pineapple", "Vanilla", "Toasted almond"],
    occasions: ["Celebration", "Gifting"],
    flavors: ["Fruit", "Indonesian"],
    sizes: [
      { label: "16 cm — serves 6 to 8", price: 380000 },
      { label: "20 cm — serves 10 to 12", price: 520000 },
    ],
    leadTime: "H-3",
    pairing: {
      tea: "TWG Alfonso",
      note: "The mango-marigold notes of Alfonso magnify Élsa's pineapple without overwhelming the almond shortbread.",
    },
    form: "concentrica",
    palette: "gold",
  },
  {
    slug: "elma",
    name: "Élma",
    plate: "Pl. 01.b",
    inspiration:
      "Klepon held still in section. Pandan génoise, gula-merah caramel kept at the centre, dessicated coconut as the final, intentional surface.",
    description: "Klepon, sectioned and made still.",
    layers: [
      { name: "Toasted coconut snow", note: "Surface" },
      { name: "Pandan diplomat cream" },
      { name: "Gula-merah caramel core" },
      { name: "Pandan génoise" },
    ],
    flavorNotes: ["Pandan", "Palm sugar", "Coconut"],
    occasions: ["Celebration", "Daily"],
    flavors: ["Indonesian"],
    sizes: [
      { label: "16 cm — serves 6 to 8", price: 360000 },
      { label: "20 cm — serves 10 to 12", price: 480000 },
    ],
    leadTime: "H-3",
    pairing: {
      tea: "TWG Geisha Blossom",
      note: "Geisha Blossom's cherry-vanilla register sits a half-octave above pandan, and the two notes resolve cleanly.",
    },
    form: "stratificata",
    palette: "burnt",
  },
  {
    slug: "eloise",
    name: "Éloise",
    plate: "Pl. 01.c",
    inspiration:
      "A Marie Regal biscuit, magnified into a four-layer chocolate entremet. The dome is intentional — it is the biscuit, abstracted.",
    description: "Marie Regal, scaled to entremet.",
    layers: [
      { name: "Dark chocolate glaze", note: "Mirror surface" },
      { name: "65% Valrhona Manjari ganache" },
      { name: "Crémeux chocolat" },
      { name: "Biscuit Joconde base" },
    ],
    flavorNotes: ["Dark chocolate", "Cocoa nib", "Vanilla bean"],
    occasions: ["Birthday", "Celebration"],
    flavors: ["Chocolate"],
    sizes: [
      { label: "16 cm — serves 6 to 8", price: 460000 },
      { label: "20 cm — serves 10 to 12", price: 620000 },
    ],
    leadTime: "H-3",
    pairing: {
      tea: "TWG Vanilla Bourbon",
      note: "Vanilla Bourbon's deep, almost smoky vanilla brings the ganache forward without sweetening it.",
    },
    form: "cupola",
    palette: "burnt",
  },
  {
    slug: "esmee",
    name: "Ésmee",
    plate: "Pl. 01.d",
    inspiration:
      "A spiral of rosewater and pistachio, plated as a section drawing. Built to be read at the cut.",
    description: "Rose and pistachio, set as a spiral in section.",
    layers: [
      { name: "Rose chantilly" },
      { name: "Pistachio crémeux" },
      { name: "Raspberry confit", note: "Centre point" },
      { name: "Pistachio dacquoise base" },
    ],
    flavorNotes: ["Rose", "Pistachio", "Raspberry"],
    occasions: ["Gifting", "Celebration"],
    flavors: ["Floral", "Fruit"],
    sizes: [
      { label: "16 cm — serves 6 to 8", price: 440000 },
      { label: "20 cm — serves 10 to 12", price: 580000 },
    ],
    leadTime: "H-3",
    pairing: {
      tea: "TWG French Earl Grey",
      note: "Bergamot draws the rose forward; the pistachio holds the floor.",
    },
    form: "spirale",
    palette: "gold",
  },
  {
    slug: "evony",
    name: "Évony",
    plate: "Pl. 01.e",
    inspiration:
      "Geometry as discipline — a cube of layered chocolate and toasted hazelnut, finished as a nested square in section.",
    description: "Chocolate and hazelnut, framed.",
    layers: [
      { name: "Cocoa velvet spray" },
      { name: "Praline feuilletine" },
      { name: "Hazelnut crémeux" },
      { name: "Chocolate sablé base" },
    ],
    flavorNotes: ["Chocolate", "Hazelnut", "Praline"],
    occasions: ["Birthday", "Celebration"],
    flavors: ["Chocolate"],
    sizes: [
      { label: "15 × 15 cm — serves 8", price: 480000 },
    ],
    leadTime: "H-3",
    form: "quadrata",
    palette: "burgundy",
  },
  {
    slug: "cruxient-tart",
    name: "Cruxient",
    plate: "Pl. 01.f",
    inspiration:
      "An archway built on stripes. Caramelised pear, salted caramel and brown-butter sablé, finished with a thin chocolate vault.",
    description: "Caramelised pear under a chocolate vault.",
    layers: [
      { name: "Tempered chocolate arch", note: "Vault" },
      { name: "Caramelised pear" },
      { name: "Salted caramel" },
      { name: "Brown butter sablé base" },
    ],
    flavorNotes: ["Pear", "Salted caramel", "Brown butter"],
    occasions: ["Celebration", "Gifting"],
    flavors: ["Fruit"],
    sizes: [
      { label: "18 cm — serves 8", price: 420000 },
    ],
    leadTime: "H-3",
    form: "composita",
    palette: "burnt",
  },
  {
    slug: "boba-cake",
    name: "Boba",
    plate: "Pl. 02.a",
    inspiration:
      "A study in restraint of a popular form. Brown-sugar milk tea custard, tapioca pearls held in suspension, oolong génoise.",
    description: "Brown sugar milk tea, sectioned.",
    layers: [
      { name: "Brown sugar mascarpone" },
      { name: "Tapioca pearls in palm syrup" },
      { name: "Oolong milk tea crémeux" },
      { name: "Oolong génoise" },
    ],
    flavorNotes: ["Oolong", "Brown sugar", "Milk"],
    occasions: ["Daily", "Gifting"],
    flavors: ["Indonesian"],
    sizes: [
      { label: "16 cm — serves 6 to 8", price: 340000 },
    ],
    leadTime: "H-3",
    form: "stratificata",
    palette: "burnt",
  },
  {
    slug: "mango-sticky-rice",
    name: "Mango Sticky Rice",
    plate: "Pl. 02.b",
    inspiration:
      "The Bangkok street dessert reorganised as an entremet — glutinous rice crémeux beneath, mango confit at the surface.",
    description: "The Bangkok classic, set into section.",
    layers: [
      { name: "Mango confit" },
      { name: "Coconut chantilly" },
      { name: "Glutinous rice crémeux" },
      { name: "Coconut dacquoise" },
    ],
    flavorNotes: ["Mango", "Coconut", "Glutinous rice"],
    occasions: ["Celebration", "Daily"],
    flavors: ["Indonesian", "Fruit"],
    sizes: [
      { label: "16 cm — serves 6 to 8", price: 360000 },
    ],
    leadTime: "H-3",
    form: "concentrica",
    palette: "burnt",
  },
  {
    slug: "baileys",
    name: "Baileys",
    plate: "Pl. 02.c",
    inspiration:
      "A spirit-infused chocolate entremet for the adult palate. Baileys ganache held against a dark chocolate crémeux.",
    description: "Chocolate and Irish cream, for grown rooms.",
    layers: [
      { name: "Cocoa nib glaze" },
      { name: "Baileys ganache" },
      { name: "Dark chocolate crémeux" },
      { name: "Cocoa biscuit base" },
    ],
    flavorNotes: ["Irish cream", "Dark chocolate", "Vanilla"],
    occasions: ["Celebration", "Gifting"],
    flavors: ["Spirit", "Chocolate"],
    sizes: [
      { label: "16 cm — serves 6 to 8", price: 480000 },
    ],
    leadTime: "H-3",
    form: "quadrata",
    palette: "burgundy",
  },
  {
    slug: "ovomaltine",
    name: "Ovomaltine",
    plate: "Pl. 02.d",
    inspiration:
      "A childhood note carried into entremet form — malt, milk chocolate, and the deliberate crunch of cereal at the centre.",
    description: "Malt and milk chocolate, for the considered table.",
    layers: [
      { name: "Milk chocolate glaze" },
      { name: "Ovomaltine crémeux" },
      { name: "Malt crunch core" },
      { name: "Vanilla joconde base" },
    ],
    flavorNotes: ["Malt", "Milk chocolate", "Cereal"],
    occasions: ["Birthday", "Daily"],
    flavors: ["Chocolate"],
    sizes: [
      { label: "16 cm — serves 6 to 8", price: 380000 },
    ],
    leadTime: "H-3",
    form: "cupola",
    palette: "gold",
  },
  {
    slug: "olivia",
    name: "Olivía",
    plate: "Pl. 02.e",
    inspiration:
      "Olive oil and lemon held in a Mediterranean register. The cake reads as a thin column at section, with citrus confit as the bright stratum.",
    description: "Olive oil and citrus, in section.",
    layers: [
      { name: "Lemon glaze" },
      { name: "Olive oil sponge" },
      { name: "Candied citrus confit" },
      { name: "Almond sablé base" },
    ],
    flavorNotes: ["Olive oil", "Lemon", "Almond"],
    occasions: ["Daily", "Gifting"],
    flavors: ["Fruit"],
    sizes: [
      { label: "16 cm — serves 6 to 8", price: 360000 },
    ],
    leadTime: "H-3",
    form: "stratificata",
    palette: "gold",
  },
  {
    slug: "iolanda",
    name: "Iolànda",
    plate: "Pl. 02.f",
    inspiration:
      "Hibiscus and raspberry, recorded in section. Built around a single drop of dark balsamic at the centre.",
    description: "Hibiscus and raspberry, with balsamic at the centre.",
    layers: [
      { name: "Hibiscus glaze" },
      { name: "Raspberry mousse" },
      { name: "Aged balsamic drop", note: "Hidden centre" },
      { name: "Vanilla sablé base" },
    ],
    flavorNotes: ["Hibiscus", "Raspberry", "Balsamic"],
    occasions: ["Celebration", "Gifting"],
    flavors: ["Floral", "Fruit"],
    sizes: [
      { label: "16 cm — serves 6 to 8", price: 420000 },
    ],
    leadTime: "H-3",
    form: "spirale",
    palette: "burgundy",
  },
];

export function getCake(slug: string): Cake | undefined {
  return cakes.find((c) => c.slug === slug);
}

export function relatedCakes(slug: string, count = 3): Cake[] {
  const self = getCake(slug);
  if (!self) return cakes.slice(0, count);
  // related = same flavor profile when possible, otherwise siblings
  const sameFlavor = cakes.filter((c) => c.slug !== slug && c.flavors.some((f) => self.flavors.includes(f)));
  const rest = cakes.filter((c) => c.slug !== slug && !sameFlavor.includes(c));
  return [...sameFlavor, ...rest].slice(0, count);
}

export const ALL_OCCASIONS: Occasion[] = ["Birthday", "Celebration", "Daily", "Gifting"];
export const ALL_FLAVORS:   Flavor[]   = ["Chocolate", "Fruit", "Indonesian", "Floral", "Spirit"];

export function fmtIDR(n: number) {
  return "Rp " + n.toLocaleString("en-US").replace(/,/g, ".");
}
