import Nav from "./Nav";
import Main from "./Main";

function Content() {
  return (
    <div className="relative z-10  h-full  w-full  p-5 sm:p-8">
      <div className="h-full overflow-y-auto  bg-zinc-900 ">
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default Content;
