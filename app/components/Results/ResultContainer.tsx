import youtubeIcon from "@/public/images/results/youtube-icon.png";
import instagramIcon from "@/public/images/results/instagram-icon.png";

interface ResultContainerProps {
  name: string;
  title: string;
  about: string;
  img: string;
  sub_count: string;
  follower_count: string;
}

const ResultContainer = ({
  name,
  title,
  about,
  img,
  sub_count,
  follower_count,
}: ResultContainerProps) => {
  return (
    <div className="flex max-w-[910px] rounded-lg overflow-hidden shadow-lg">
      <img
        src={img}
        alt={`${name} result working with Contengine`}
        className="w-1/2 object-cover"
      />
      <div className="bg-white px-6 py-8 w-1/2">
        <div className="flex flex-col gap-5 mb-8">
          <h3 className="text-3xl font-semibold">
            {name}: <br /> {title}
          </h3>
          <p className="text-lg">{about}</p>
        </div>
        <div className="flex items-center justify-between max-w-[400px]">
          <div className="flex items-center gap-2">
            <img
              src={youtubeIcon.src}
              alt="Youtube icon"
              className="w-[55px]"
            />
            <p className="font-bold">{sub_count} subscribers</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={instagramIcon.src}
              alt="Instagram icon"
              className="w-[42px]"
            />
            <p className="font-bold">{follower_count} followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultContainer;
