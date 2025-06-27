"use client";

interface FilterBarProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const categories = [
  "All",
  "Banana",
  "Avocado",
  "Telescopische",
  "Kiwi",
  "Dubbele",
  "Parasol Voeten",
];

export default function FilterBar({ active, setActive }: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 relative z-10">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => setActive(cat)}
          className={`
            px-4 py-2 rounded-full cursor-pointer text-sm transition
            ${
              active === cat
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
