import logo from '../assets/logo.png';
// import classes from './Header.Module.css';


export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img src={logo} alt="A canvas"
       className="mb-8 w-44 h-44"/>
      <h1 className="uppercase text - xl md: 4xl font semibold tracking widest center mdfont amber 800 title-xl md:text-center acking-widest mdfont-semibold md:text-4xl text-amber-800 font-title">ReactArt</h1>
      <p className="text-stone-500">community of artists and art-lovers.</p>
    </header>
  );
}
