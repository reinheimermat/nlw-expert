import logo from './assets/logo-nlw-expert.svg';

export default function App() {
  return (
    <main className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt="NLW Expert" />

      <form className='w-full'>
        <input 
          type="text" 
          placeholder='Busque em suas notas...' 
          className='w-full bg-transparent text-3xl font-semibold outline-none tracking-tight place-holder:text-slate-500'
        />
      </form>

      <div className='h-px bg-slate-700' />
    </main>
  )
}
