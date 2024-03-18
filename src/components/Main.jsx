import Message from "./Message";
import Projects from "./Projects";
import ProjectNav from "./ProjectNav";
import { useGeneral } from "../context/GeneralContext";
import Logos from "./Logos";
import ButtonLink from "./ButtonLink";

function Main() {
  const { lang } = useGeneral();
  return (
    <main className=" flex h-fit flex-col justify-evenly space-y-4 bg-zinc-900 md:min-h-[80%] md:pl-8 lg:flex-row lg:items-center lg:space-x-8 lg:pl-16">
      <div className="flex items-center   overflow-x-hidden pl-1 lg:w-[65%]">
        <Message type="contact">
          <p>
            <span>Email: janek.dzialowski@gmail.com </span>
            <span
              onClick={() => {
                navigator.clipboard.writeText("janek.dzialowski@gmail.com");
              }}
              className="cursor-pointer text-sm font-thin underline hover:text-zinc-400"
            >
              {lang === "pl" ? "Skopiuj do schowka" : "Copy to clipboard"}
            </span>
          </p>
          <ButtonLink to="https://linkedin.com/in/jan-działowski-a429b22ba">
            <p className=" ">LinkedIn</p>
          </ButtonLink>
        </Message>
        <Message type="welcome">
          {lang === "pl" && (
            <p>
              Nazywam się Janek Działowski, jestem aspirującym front-end
              developerem. Obecnie rozwijam swoje umiejętności w React ale
              jestem również otwarty na poznawanie innych technologii. Jak dotąd
              zyskałem biegłość w posługiwaniu się:
            </p>
          )}
          {lang === "en" && (
            <p>
              My name is Jan Działowski and I'm aspiring front end developer.
              Currently my main focus is getting proficient in React but I'm
              also open to other opportunities. So far I've have used:
            </p>
          )}
          <Logos />
          {lang === "pl" && (
            <p>Zachęcam do zapoznania się z moimi projektami ;)</p>
          )}
          {lang === "en" && <p>Enjoy reviewing my projects ;) </p>}
        </Message>
        <Message type="clone">
          <p>
            {lang === "pl" &&
              "Mój najnowszy i jak dotąd najbardziej złożony projekt. Kopia Youtube napisana w React. Dodatkowo wykorzystałem react-router i youtube api v3. Stylizowany za pomocą css modules."}
            {lang === "en" &&
              "It's my most recent and most advanced project so far. Youtube clone wrote in React. Additionally react-router and youtube api v3 have been used. Stylized using css modules."}
          </p>

          <ProjectNav
            site="https://yt-clone-react-five.vercel.app"
            git="https://github.com/darkofff/yt-clone-react.git"
          />
        </Message>
        <Message type="ecommerce">
          <p>
            {lang === "pl" &&
              "Landing page dla sklepu online wykonane z użyciem SCSS i javascript. Design inspirowany stroną lounge by zalando. "}
            {lang === "en" &&
              "Ecommerce landing page created with use of SCSS and vanilla javascript. Design inspired by lounge by zalando. "}
          </p>
          <ProjectNav
            site="https://darkofff.github.io/ecommerce-landing-page/index.html?fbclid=IwAR0DRrwVOQ4T4AStosp1rwq1WVbHMcMlaAyINWRicDIJoTbSyWGejsKarRA"
            git="https://github.com/darkofff/ecommerce-landing-page"
          />
        </Message>
      </div>
      <Projects />
    </main>
  );
}

export default Main;

/* import Message from "./Message";
import Projects from "./Projects";
import ProjectNav from "./ProjectNav";
import { useGeneral } from "../context/GeneralContext";
import Logos from "./Logos";
import ButtonLink from "./ButtonLink";

function Main() {
  const { lang, setLang } = useGeneral();
  return (
    <main className=" flex h-fit flex-col justify-evenly space-y-4 bg-zinc-900 md:min-h-[80%] md:space-x-8 md:pl-8 lg:flex-row lg:items-center lg:pl-16">
      <div className="flex overflow-x-hidden  border pl-1 lg:w-[65%]">
        <Message type="contact">
          <p>
            Email: janek.dzialowski@gmail.com{" "}
            <span
              onClick={() => {
                navigator.clipboard.writeText("janek.dzialowski@gmail.com");
              }}
              className="cursor-pointer text-sm font-thin underline hover:text-zinc-400"
            >
              {lang === "pl" ? "Skopiuj do schowka" : "Copy to clippboard"}
            </span>
          </p>
          <ButtonLink to="https://linkedin.com/in/jan-działowski-a429b22ba">
            <p className=" ">LinkedIn</p>
          </ButtonLink>
        </Message>
        <Message type="welcome">
          {lang === "pl" && (
            <p>
              Nazywam się Janek Działowski, jestem aspirującym front-end
              developerem. Obecnie rozwijam swoje umiejętności w React ale
              jestem również otwarty na poznawanie innych technologii. Jak dotąd
              zyskałem biegłość w posługiwaniu się:
            </p>
          )}
          {lang === "en" && (
            <p>My name is John and I'm aspiring front end developer</p>
          )}
          <Logos />
          {lang === "pl" && (
            <p>Zachęcam do zapoznania się z moimi projektami ;)</p>
          )}
          {lang === "en" && (
            <p>My name is John and I'm aspiring front end developer</p>
          )}
        </Message>
        <Message type="clone">
          <p>
            {lang === "pl" &&
              "Kopia Youtube napisana w React. Dodatkowo wykorzystałem react-router i youtube api v3. Stylizowany za pomocą css modules."}
            {lang === "en" &&
              "My name is John and I'm aspiring front end developer"}
          </p>

          <ProjectNav
            site="https://yt-clone-react-five.vercel.app"
            git="https://github.com/darkofff/yt-clone-react.git"
          />
        </Message>
        <Message type="ecommerce">
          <p>
            {lang === "pl" &&
              "Landing page dla sklepu online wykonane z użyciem SCSS i javascript. Design inspirowany stroną lounge by zalando. "}
            {lang === "en" &&
              "Ecommerce landing page created with use of SCSS and vanilla javascript. Design inspired by lounge by zalando. "}
          </p>
          <ProjectNav
            site="https://darkofff.github.io/ecommerce-landing-page/index.html?fbclid=IwAR0DRrwVOQ4T4AStosp1rwq1WVbHMcMlaAyINWRicDIJoTbSyWGejsKarRA"
            git="https://github.com/darkofff/ecommerce-landing-page"
          />
        </Message>
      </div>
      <Projects />
    </main>
  );
}

export default Main; */
