import LogoPng from "../assets/brand/slips-logo-header.png";

export default function Logo() {
  return (
    <img
      src={LogoPng}
      alt="slips"
      className="h-24 w-auto drop-shadow-[0_12px_26px_rgba(0,0,0,0.45)]"
      loading="lazy"
    />
  );
}
