export default function Section({ id, number, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-8 border-t border-white/10 py-16">
      <div className="mb-8 flex items-baseline gap-4">
        <span aria-hidden="true" className="font-mono text-sm text-lime-300">{number}</span>
        <h2 id={`${id}-title`} className="text-2xl font-medium tracking-tight sm:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}

