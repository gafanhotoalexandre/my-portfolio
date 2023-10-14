import { SocialLinks } from './components/SocialLinks'

function App() {
  return (
    <div className="">
      <h2 className="font-bold text-base">Hello! I am Alexandre Martins</h2>

      <article className="my-3">
        <section className="flex justify-between items-center">
          <h1 className="text-4xl md:tracking-wide md:text-7xl font-bold">FRONTEND</h1>

          <SocialLinks />
        </section>
        <h2 className="text-6xl md:text-9xl md:tracking-wide font-bold">DEVELOPER</h2>
      </article>

      <p className="md:max-w-[450px] md:ml-auto md:tracking-tighter md:text-lg text-base font-semibold text-justify tracking-tight">and I'm 21 years old. I'm a passionate frontend developer, continually learning in JavaScript and TypeScript.</p>
    </div>

  )
}

export default App
