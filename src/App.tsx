import { SocialLinks } from './components/SocialLinks'

function App() {
  return (
    <>
      <h2 className="mx-1 text-xl font-semibold">Oi! Eu sou Alexandre Martins</h2>
      <section className="flex justify-between items-center">
        <h1 className="text-7xl font-bold">FRONTEND</h1>

        <SocialLinks />
      </section>
      <h2 className="text-9xl font-bold -mx-2">DEVELOPER</h2>

      <p className="w-[450px] ml-auto text-justify text-lg font-semibold mt-2">e tenho a idade de 21 anos de idade. Sou um apaixonado desenvolvedor frontend, num constante aprendizado em JavaScript e TypeScript.</p>
      {/* <div className="fixed top-0 left-0 w-screen h-screen bg-overlay"></div> */}
    </>
  )
}

export default App
