// Tiny module-level store for scroll progress (0..1 of the whole page).
// The 3D scene subscribes; the scroll listener pushes updates.

type Listener = (progress: number) => void;

let progress = 0;
const listeners = new Set<Listener>();

export const scrollStore = {
  get: () => progress,
  set: (p: number) => {
    progress = p;
    listeners.forEach((l) => l(p));
  },
  subscribe: (l: Listener) => {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};
