"use client";

export default function HeroBanner() {
  return (
    <section className="relative h-[40vh] overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-4">
          Parasols
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-black/80">
          Discover our full collection of wind-resistant luxury parasols for
          every outdoor setting.
        </p>
      </div>
    </section>
  );
}
