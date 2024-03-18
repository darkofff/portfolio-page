function SingleLogo({ name }) {
  return (
    <div className="rounded-md bg-[rgb(32,32,34)]  p-2">
      <img
        className="h-9 rounded-md sm:h-12"
        src={`logos/${name}.svg`}
        alt={`${name} logo`}
      />
    </div>
  );
}

export default SingleLogo;

//background-color: rgb(39 39 42 / var(--tw-bg-opacity));
//background-color: rgb(24 24 27 / var(--tw-bg-opacity));
