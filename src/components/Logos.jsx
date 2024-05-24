import SingleLogo from "./SingleLogo";

function Logos() {
  return (
    <div className="animate-slide-right my-4  flex cursor-pointer flex-wrap items-center gap-1   sm:gap-2   ">
      <span className="flex  gap-1  sm:gap-2 ">
        <SingleLogo name="react" />
        <SingleLogo name="javascript" />
        <SingleLogo name="typescript" />
        <SingleLogo name="tailwind" />
        <SingleLogo name="css" />
      </span>
      <span className="flex gap-1  sm:gap-2  ">
        <SingleLogo name="vite" />
        <SingleLogo name="sass" />
        <SingleLogo name="github" />
        <SingleLogo name="html" />
      </span>
    </div>
  );
}

export default Logos;
