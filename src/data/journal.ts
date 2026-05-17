export interface JournalEntry {
  slug: string;
  title: string;
  dek: string;          // standfirst
  date: string;         // ISO
  readTime: string;     // "6 min"
  category: string;
  body: string[];       // paragraphs (HTML-free)
}

export const journal: JournalEntry[] = [
  {
    slug: "tea-pairing-twg",
    title: "Pairing Entremet with Tea — Notes from the TWG Collaboration",
    dek: "Tea is not a beverage placed next to dessert. It is the second instrument in a duet, and the duet has rules.",
    date: "2025-09-12",
    readTime: "6 min",
    category: "Notes",
    body: [
      "When TWG Tea Indonesia first proposed a pairing programme for Jakarta Dessert Week, the brief was deceptively simple: choose three cakes, choose three teas, and let the audience experience them together. In practice the brief was not simple at all. A cake and a tea share a single mouth; the question is which one speaks first, and which one resolves the sentence.",
      "We began with Élma — pandan, palm sugar, coconut — and tasted it against six TWG teas in succession. Five of them blurred. Geisha Blossom, with its cherry-vanilla register, sat a half-octave above the pandan and resolved cleanly into the palm sugar finish. That was the pairing.",
      "The principle: a tea pairing is not chosen by flavour adjacency. It is chosen by interval. The tea must sit at a deliberate distance from the cake — close enough to be in the same key, far enough that the cake remains the subject of the sentence.",
      "Tea pairings on Arkamaya cakes will continue to be selected by this principle. When a cake has no tea pairing, it is because none has yet been built. We do not invent pairings for the sake of completeness."
    ],
  },
  {
    slug: "why-h3",
    title: "Why H-3 — On the Discipline of Made-to-Order",
    dek: "Three days is not a constraint. It is the shape of the work.",
    date: "2025-10-04",
    readTime: "5 min",
    category: "Method",
    body: [
      "Every Arkamaya entremet is built to order with a three-day lead time. The most common question we receive is whether this can be shortened. The answer is no, and the answer is also a thesis about how this kitchen works.",
      "An entremet — properly built — moves through three nights. The first night is structural: dacquoise baked, sablé pressed, basics rested. The second night is the build itself: layers set in their moulds, glazes prepared, the cake left to bond to its own geometry. The third day is finish, transport, delivery.",
      "Removing a night does not save time. It removes a stratum from the cake.",
      "If you have not ordered three days ahead, please do — and please understand that the time is not a queue. It is the cake."
    ],
  },
  {
    slug: "reading-a-section-view",
    title: "Reading a Section View — How to Understand an Entremet",
    dek: "An entremet read from the side reveals what it is. A drawing of an entremet read from the side teaches you to read the cake itself.",
    date: "2025-11-21",
    readTime: "7 min",
    category: "Method",
    body: [
      "The section view is a tool borrowed from architecture and used here in earnest. A cake drawn in section is a cake claimed to have been thought about — to have a top stratum, an interior, a base, a centre.",
      "Read the drawing from the top. The first stratum is usually a glaze or finishing layer; it is the cake's surface — what your fork meets first. The second is typically a cream, mousse or chantilly that carries the dominant aromatic. The third is structural: a génoise, joconde, or financier. The base, often hidden in the visual hierarchy, is the cake's foundation — a sablé or biscuit that gives the slice its capacity to be lifted intact.",
      "The centre point of the drawing is where the cake's argument is made. In Élsa it is the pineapple. In Iolànda it is a hidden drop of aged balsamic. The centre is what the rest of the cake exists to frame.",
      "If a cake cannot be drawn in section, it has not been designed. It has only been baked."
    ],
  },
];

export function getEntry(slug: string) {
  return journal.find((j) => j.slug === slug);
}
