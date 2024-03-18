import ButtonLink from "./ButtonLink";

function ProjectNav({ site, git }) {
  return (
    <div className="mt-4 flex space-x-12">
      <ButtonLink to={site}>
        <p>View Site</p>
      </ButtonLink>
      <ButtonLink to={git}>
        <p>Github</p>
      </ButtonLink>
    </div>
  );
}

export default ProjectNav;
