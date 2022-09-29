import Image from "next/image";

type Props = {
  imgUrl: string;
  title: string;
  text: string;
};

const Hero = ({ imgUrl, title, text }: Props) => (
  <div className="relative h-128 w-full">
    <div className="relative z-10 m-auto flex h-full max-w-7xl flex-col-reverse pb-12 text-center">
      <div className="max-w-2xl px-4 text-white">
        <h2 className="pb-8 text-2xl font-bold drop-shadow-lg md:text-5xl">
          {title}
        </h2>
        <p className="text-lg drop-shadow-lg md:text-xl">{text}</p>
      </div>
    </div>
    <Image
      priority
      objectFit="cover"
      objectPosition="center"
      layout="fill"
      src={imgUrl}
      alt="hero-image"
    />
  </div>
);

export default Hero;
