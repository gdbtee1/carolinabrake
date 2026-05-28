export default function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#B91C1C]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
        {title}
      </h2>

      {text && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {text}
        </p>
      )}
    </div>
  );
}