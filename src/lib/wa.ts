// WhatsApp deep-link helpers — uses the Cakery line per BRIEF.md
export const WA_NUMBER = "6282114597840"; // 0821 1459 7840
export const PHONE_DISPLAY = "+62 821 1459 7840";

export function waLink(message: string) {
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  return url;
}

export function inquireMessage(cakeName: string) {
  return `Halo Arkamaya, saya tertarik untuk memesan ${cakeName}. Boleh saya tahu ketersediaan untuk tanggal […]? Terima kasih.`;
}

export function customMessage() {
  return `Halo Arkamaya, saya ingin menanyakan ketersediaan untuk custom order. Terima kasih.`;
}
