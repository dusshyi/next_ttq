import Link from "next/link";
import Image from "next/image";
// Components
import SearchInput from "../SearchInput/SearchInput";

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => (
  <div className="sticky top-0 z-40 flex h-24 w-full bg-zinc-900">
    <div className="m-auto flex h-full w-full max-w-7xl justify-between px-4">
      <Link href="/">
        <div className="flex cursor-pointer items-center">
          <div className="invisible md:visible">
            <Image
              width="150"
              height="50"
              src="/rmdb-logo.svg"
              alt="rmdb-logo"
            />
          </div>
          <div className="absolute pt-2 md:invisible">
            <Image
              width="42"
              height="50"
              src="/rmdb-logo-small.svg"
              alt="rmdb-logo-small"
            />
          </div>
        </div>
      </Link>
      {setQuery ? (
        <div className="relative flex items-center">
          <SearchInput setQuery={setQuery} />
        </div>
      ) : null}
    </div>
  </div>
);

export default Header;
