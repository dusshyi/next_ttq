import React from "react";
import Image from "next/image";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const TIME = 300; // ms

const SearchInput = ({ setQuery }: Props) => {
  const [text, setText] = React.useState("");
  const timer = React.useRef<NodeJS.Timeout>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    clearTimeout(timer.current);

    setText(value);

    timer.current = setTimeout(() => {
      setQuery(value);
    }, TIME);
  };

  return (
    <>
      <input
        className="text-md h-10 rounded-full bg-zinc-700 p-4 pr-14 text-white focus:border focus:border-solid focus:border-cyan-200 focus:outline-none md:w-96"
        type="text"
        placeholder="Search Movie"
        value={text}
        onChange={handleInput}
      />
      <div className="absolute right-4 top-8">
        <Image width="30" height="32" src="/tmdb-logo.svg" alt="tmdb-logo" />
      </div>
    </>
  );
};

export default SearchInput;
