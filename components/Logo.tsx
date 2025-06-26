export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <span className="logo-icon text-4xl font-bold">▢</span>
      <span
        className="logo-text text-2xl tracking-widest"
        style={{ fontFamily: "var(--logo-font)", color: "#333" }}
      >
        PARASOL<span className="font-medium">HUIS</span>
      </span>
    </div>
  );
}
