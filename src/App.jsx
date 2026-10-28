import { profile, projects, skills } from './data/portfolio'
import Section from './components/Section'

export default function App() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10">
      <a href="#contenido" className="sr-only focus:not-sr-only">Saltar al contenido</a>
      <header className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 py-7">
        <a href="#inicio" className="text-xl font-bold">MRC<span className="text-lime-300">.</span></a>
        <nav aria-label="Navegación principal" className="flex flex-wrap gap-5 text-sm text-zinc-300">
          <a className="hover:text-lime-300" href="#proyectos">Proyectos</a>
          <a className="hover:text-lime-300" href="#habilidades">Habilidades</a>
          <a className="hover:text-lime-300" href="#contacto">Contacto</a>
        </nav>
      </header>
      <main id="contenido">
        <section id="inicio" className="py-24 sm:py-36">
          <p className="mb-6 font-mono text-sm uppercase tracking-widest text-lime-300">Portfolio / En construcción</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">Ideas que se convierten en experiencias web.</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">{profile.introduction}</p>
          <a href="#proyectos" className="mt-10 inline-flex items-center gap-8 rounded-full bg-lime-300 px-7 py-3 font-medium text-zinc-950 hover:bg-lime-200">Explorar proyectos <span aria-hidden="true">↗</span></a>
        </section>
        <Section id="proyectos" number="01" title="Proyectos seleccionados">
          {projects.length ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <article key={project.id} className="rounded-2xl border border-white/10 p-7">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">{project.description}</p>
                  {project.url && <a className="mt-6 inline-block text-lime-300 hover:underline" href={project.url} target="_blank" rel="noreferrer">Ver proyecto ↗</a>}
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-white/20 p-8 leading-relaxed text-zinc-400">Próximamente: una selección de mis trabajos, sus desafíos y cómo los resolví.</p>
          )}
        </Section>
        <Section id="habilidades" number="02" title="Tecnologías y habilidades">
          <p className="mb-6 text-zinc-400">Este portfolio está construido con:</p>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => <li key={skill} className="rounded-full border border-white/15 px-5 py-2 text-zinc-200">{skill}</li>)}
          </ul>
        </Section>
        <Section id="contacto" number="03" title="Conectemos">
          {profile.email ? <a className="break-all text-xl text-lime-300 hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a> : <p className="text-zinc-400">Próximamente vas a encontrar acá mis canales de contacto.</p>}
        </Section>
      </main>
      <footer className="border-t border-white/10 py-8 text-sm text-zinc-500">MRC Portfolio · Hecho con React y Tailwind CSS</footer>
    </div>
  )
}

