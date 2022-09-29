import Image from "next/image";
// Helpers
import { calcTime, convertMoney } from "../../helpers";
// Components
import Thumbnail from "../Thumbnail/Thumbnail";
import Pill from "../Pill/Pill";
// Types
import { Crew } from "../../api/types";

type Props = {
  thumbUrl: string;
  backgroundImgUrl: string;
  title: string;
  year: string;
  summary: string;
  rating: number;
  directors: Crew[];
  time: number;
  budget: number;
  revenue: number;
};

const MovieInfo = ({
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  summary,
  rating,
  directors,
  time,
  budget,
  revenue,
}: Props) => (
  <div className="relative h-auto w-full p-4">
    <div className="relative z-10 m-auto flex h-full min-h-128 max-w-7xl flex-col rounded-xl bg-zinc-800 bg-opacity-90 p-4 md:flex-row">
      <div className="relative h-96 w-full md:h-auto md:w-1/3">
        <Thumbnail imgUrl={thumbUrl} />
        <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
          {rating}
        </div>
      </div>
      <div className="md: w-full px-0 py-4 px-8 text-center text-white md:w-2/3 md:py-0 md:text-left">
        <h2 className="pb-4 text-2xl font-bold md:text-4xl">
          {title} ({year})
        </h2>
        <h3 className="text-lg font-bold">Summary</h3>
        <p className="mb-8 text-sm md:text-lg">{summary}</p>
        <div>
          <div>
            <h3 className="text-lg font-bold">
              Director{directors.length > 1 ? "s" : ""}
            </h3>
            <div>
              {directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">Movie Data</h3>
            <Pill className="ml-0" text={`Running time: ${calcTime(time)}`} />
            <Pill text={`Budget: ${convertMoney(budget)}`} />
            <Pill text={`Revenue: ${convertMoney(revenue)}`} />
          </div>
        </div>
      </div>
    </div>
    <Image
      priority
      placeholder="blur"
      blurDataURL="/placeholder.jpg"
      objectFit="cover"
      objectPosition="center"
      layout="fill"
      src={backgroundImgUrl}
      alt="thumb"
    />
  </div>
);

export default MovieInfo;
