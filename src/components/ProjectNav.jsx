import { useGeneral } from "../context/GeneralContext";
import ButtonLink from "./ButtonLink";

function ProjectNav({ site, git }) {
  const { lang } = useGeneral();
  return (
    <div className="mt-4 flex space-x-12">
      <ButtonLink to={site}>
        <p>{lang === "pl" ? "Przejdź do strony" : "View Site"}</p>
      </ButtonLink>
      <ButtonLink to={git}>
        <p>Github</p>
      </ButtonLink>
    </div>
  );
}

export default ProjectNav;
