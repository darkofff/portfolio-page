import { useGeneral } from "../context/GeneralContext";
import ButtonLink from "./ButtonLink";

function Projects() {
  const { currentProject, setCurrentProject, lang } = useGeneral();

  return (
    <div className="cursor-pointer  py-4  pl-1 lg:w-[40%]">
      <h1 className="mb-5 text-3xl font-normal tracking-wider">
        {lang === "pl" ? "Projekty" : "Projects"}
      </h1>
      <div className="flex gap-5 ">
        <div className="h-22 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-40  "></div>
        <ul className="space-y-3 text-lg">
          <ButtonLink onClick={() => setCurrentProject("local")}>
            <li className="">
              {lang === "pl" ? (
                <div className="flex flex-col">
                  <span>
                    <strong className="font-bold">'Local'</strong> - strona
                    społecznościowa
                  </span>
                  <span>(najnowszy projekt)</span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span>
                    <strong className="font-bold">'Local'</strong> - social
                    networking app
                  </span>
                  <span>(most recent)</span>
                </div>
              )}
            </li>
          </ButtonLink>
          <ButtonLink onClick={() => setCurrentProject("clone")}>
            <li className="">
              {lang === "pl" ? "Klon Youtube" : "Youtube clone"}
            </li>
          </ButtonLink>
          <ButtonLink onClick={() => setCurrentProject("ecommerce")}>
            <li>E-commerce landing page</li>
          </ButtonLink>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
