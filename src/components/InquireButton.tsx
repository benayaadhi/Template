import { Button } from "./primitives";
import { waLink, inquireMessage } from "@/lib/wa";

interface Props {
  cakeName: string;
  variant?: "primary" | "secondary" | "ghost";
  label?: string;
}

export default function InquireButton({ cakeName, variant = "primary", label }: Props) {
  return (
    <Button
      href={waLink(inquireMessage(cakeName))}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
    >
      {label ?? "Inquire via WhatsApp"}
      <span aria-hidden>→</span>
    </Button>
  );
}
