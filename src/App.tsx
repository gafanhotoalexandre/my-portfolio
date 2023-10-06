import { FileText, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

import curriculo from './assets/curriculo.pdf'

function App() {
  return (
    <>
      <h2 className="mx-1 text-xl font-semibold">Oi! Eu sou Alexandre Martins</h2>
      <section className="flex justify-between items-center">
        <h1 className="text-7xl font-bold">FRONTEND</h1>

        <div className="flex gap-8">
          <a className="hover:bg-sky-200 transition-all p-3 rounded-full" href="https://github.com/gafanhotoalexandre">
            <GithubLogo size={32} />
          </a>
          <a className="hover:bg-sky-200 transition-all p-3 rounded-full" href="https://www.linkedin.com/in/alemartins-lima/">
            <LinkedinLogo size={32} />
          </a>
          <a className="hover:bg-sky-200 transition-all p-3 rounded-full" download href={curriculo}>
            <FileText size={32} />
          </a>
        </div>
      </section>
      <h2 className="text-9xl font-bold -mx-2">DEVELOPER</h2>

      <p className="w-[450px] ml-auto text-justify text-lg font-semibold mt-2">e tenho a idade de 21 anos de idade. Sou um apaixonado desenvolvedor frontend, num constante aprendizado em JavaScript e TypeScript.</p>
      {/* <div className="fixed top-0 left-0 w-screen h-screen bg-overlay"></div> */}
    </>
  )
}

export default App
