import { useGeneral } from "../context/GeneralContext";

function Nav() {
  const { setCurrentProject, setLang, lang } = useGeneral();

  function handleClick() {
    if (lang === "en") setLang("pl");
    if (lang === "pl") setLang("en");
  }

  return (
    <nav className="mb-4 flex min-h-8 items-center justify-between px-1 py-2 md:px-2">
      <h1
        className="cursor-pointer text-xl  transition-all hover:bg-gradient-to-tr hover:from-indigo-500 hover:via-purple-500  hover:to-pink-500 hover:bg-clip-text  hover:text-transparent sm:text-3xl md:text-4xl"
        onClick={() => setCurrentProject("welcome")}
      >
        {lang === "en" && "About me"}
        {lang === "pl" && "O mnie"}
      </h1>
      <div className="flex space-x-4 md:space-x-8">
        <p
          className="cursor-pointer text-xl transition-all hover:bg-gradient-to-tr hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text  hover:text-transparent sm:text-3xl  md:text-4xl"
          onClick={() => setCurrentProject("contact")}
        >
          {lang === "en" && "Contact info"}
          {lang === "pl" && "Kontakt"}
        </p>
        <p
          className="cursor-pointer text-xl uppercase transition-all hover:bg-gradient-to-tr hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500  hover:bg-clip-text hover:text-transparent sm:text-3xl md:text-4xl"
          onClick={handleClick}
        >
          {lang === "en" && "pl"}
          {lang === "pl" && "en"}
        </p>
      </div>
    </nav>
  );
}

export default Nav;
