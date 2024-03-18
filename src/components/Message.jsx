import { useGeneral } from "../context/GeneralContext";

function Message({ children, type }) {
  const { currentProject, lang } = useGeneral();

  let move;
  if (currentProject === "contact") {
    move = "-translate-x-[2px]";
  } else if (currentProject === "welcome") {
    move = "-translate-x-[calc(100%+2px)]";
  } else if (currentProject === "clone") {
    move = "-translate-x-[calc(200%+2px)]";
  } else if (currentProject === "ecommerce") {
    move = "-translate-x-[calc(300%+2px)]";
  }
  return (
    <div className={`  h-fit w-full  p-1 transition-all duration-500 ${move}`}>
      <div>
        <p className="h-[1px] overflow-hidden text-nowrap ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          quibusdam cumque quia! Et, quidem consequatur ullam sapiente
          repellendus fugiat ad soluta repellat! Cupiditate quaerat nihil rerum,
          possimus tenetur minus doloremque!
        </p>
        <h1 className="animate-slide-top mb-5 w-full text-4xl font-thin tracking-widest sm:text-5xl md:text-[7vw] lg:text-7xl">
          {type === "contact" && (lang === "pl" ? "Kontakt" : "Contact info")}
          {type === "welcome" && (lang === "pl" ? "Witaj" : "Welcome")}
          {type === "clone" &&
            (lang === "pl" ? "Klon Youtube " : "Youtube clone")}
          {type === "ecommerce" && (
            <>
              <span>Ecommerce </span>
              <span className="text-nowrap">landing page</span>
            </>
          )}
        </h1>
        <div className={`flex gap-5 `}>
          <div className="h-22 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-40  ">
            <p className="text-transparent">dfdsf</p>
          </div>
          <div className=" text-base sm:text-lg lg:text-xl">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
/* import { useGeneral } from "../context/GeneralContext";

function Message({ children, type }) {
  const { currentProject, setCurrentProject, lang } = useGeneral();

  let move;
  if (currentProject === "contact") {
    move = "-translate-x-[2px]";
  } else if (currentProject === "welcome") {
    move = "-translate-x-[calc(100%+2px)]";
  } else if (currentProject === "clone") {
    move = "-translate-x-[calc(200%+2px)]";
  } else if (currentProject === "ecommerce") {
    move = "-translate-x-[calc(300%+2px)]";
  }
  return (
    <div
      className={` w-full border border-red-500 p-1 transition-all duration-500 ${move}`}
    >

      <p className="h-[1px] overflow-hidden text-nowrap ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quibusdam
        cumque quia! Et, quidem consequatur ullam sapiente repellendus fugiat ad
        soluta repellat! Cupiditate quaerat nihil rerum, possimus tenetur minus
        doloremque!
      </p>
      <h1 className="animate-slide-top mb-5 w-full text-4xl font-thin tracking-widest sm:text-5xl md:text-[7vw] lg:text-7xl">
        {type === "contact" && (lang === "pl" ? "Kontakt" : "Contact info")}
        {type === "welcome" && (lang === "pl" ? "Witaj" : "Welcome")}
        {type === "clone" &&
          (lang === "pl" ? "Klon Youtube " : "Youtube clone")}
        {type === "ecommerce" && (
          <>
            <span>Ecommerce </span>
            <span className="text-nowrap">landing page</span>
          </>
        )}
      </h1>
      <div className={`flex gap-5 `}>
        <div className="h-22 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-40  ">
          <p className="text-transparent">dfdsfdsdsadsa</p>
        </div>
        <div className=" text-base sm:text-lg lg:text-xl">{children}</div>
      </div>
    </div>
  );
}

export default Message;
 */
