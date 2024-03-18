function ButtonLink({ to, children, onClick }) {
  if (onClick) {
    return (
      <div onClick={onClick} className="button-link w-fit  font-semibold">
        {children}

        <div className="button-underline h-[2px]  bg-gradient-to-tr from-indigo-500  via-purple-500 to-pink-500 opacity-60 transition-all"></div>
      </div>
    );
  }

  return (
    <a
      href={to}
      rel="noreferrer"
      target="_blank"
      className="button-link block  max-w-fit text-base font-semibold sm:text-lg lg:text-xl"
    >
      {children}
      <div className="button-underline h-[2px] w-full bg-gradient-to-tr from-indigo-500  via-purple-500 to-pink-500 opacity-60 transition-all"></div>
    </a>
  );
}

export default ButtonLink;
