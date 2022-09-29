import Link from "next/link";

type Props = {
  title: string;
};

const Breadcrumb = ({ title }: Props) => (
  <div className="bg-zinc-800">
    <div className="m-auto flex max-w-7xl items-center p-4 text-lg text-white">
      <Link href="/">
        <span className="cursor-pointer duration-300 hover:opacity-80">
          Home
        </span>
      </Link>
      <span className="block px-2">|</span>
      <span className="truncate font-bold">{title}</span>
    </div>
  </div>
);

export default Breadcrumb;
