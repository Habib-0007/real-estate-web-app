import { DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

type CardsDataTypes = {
  title: string;
  name: string;
  image: string;
  desc: string;
  price: number;
};

const cardsData: CardsDataTypes[] = [
  {
    title: "Coastal Escapes - Where Waves Beckon",
    name: "Seaside Serenity Villa",
    image: "showcase-img-one",
    desc: "Wake up to the soothing melody of waves, This beachfront villa offers",
    price: 1250,
  },
  {
    title: "Urban Cross - Life in the Heart of the City",
    name: "Metropolitan Haven",
    image: "showcase-img-two",
    desc: "Immerse ypurself in the energy of the city. This modern apartment in heart",
    price: 650,
  },
  {
    title: "Rustic Retreat Cottage",
    name: "Seaside Serenity Villa",
    image: "showcase-img-three",
    desc: "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills",
    price: 350,
  },
];

const Card = ({ data }: { data: CardsDataTypes }) => {
  return (
    <>
      <img
        src={`/assets/${data.image}.svg`}
        alt={data.name}
        width="100%"
        className="object-cover w-full h-auto"
      />
      <div className="flex justify-start items-stretch flex-col gap-6">
        <p className="self-start bg-[#1e1e1e] border border-[#262626] py-1.5 px-3 rounded-3xl text-white text-sm">
          {data.title}
        </p>
        <div className="flex justify-start items-stretch flex-col gap-2">
          <strong className="font-bold text-xl txet-white">{data.name}</strong>
          <p className="text-[#999999] text-sm leading-6">
            {data.desc}{" "}
            <Link to="" className="ml-1 text-white underline">
              Read More
            </Link>
          </p>
        </div>
        <div className="flex justify-between items-center gap-2 flex-row">
          <div className="flex justify-start items-start gap-0.5 flex-col shrink-0">
            <small className="text-[12px] text-[#999]">Price</small>
            <p className="flex justify-start items-center gap-[1px] flex-row text-lg">
              <DollarSign size={16} />
              {data.price}
            </p>
          </div>
          <Link
            to=""
            className="bg-[#703bf7] hover:bg-[#703bff]/70 text-white py-3 px-4 rounded-lg w-fit h-full mr-6 shrink-0"
          >
            View Property Details
          </Link>
        </div>
      </div>
    </>
  );
};

const ShowCase = () => {
  return (
    <section className="mt-34 grid grid-cols-12 px-5 py-3 lg:px-0">
      <section className="col-start-1 col-end-13 lg:col-start-2 lg:col-end-12">
        <section className="flex justify-start items-stretch gap-5 flex-col">
          <section className="flex justify-start items-stretch flex-col gap-4">
            <strong className="text-3xl leading-8">
              Discover a World of Possibilities{" "}
            </strong>
            <p className="text-white/70 text-md leading-6">
              Our portfolio of properties is as diverse as your dreams. Explore
              the following properties to find the perfect property that
              resonates your vison of home
            </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardsData.map((data, index) => (
              <section
                key={index}
                className="py-6 px-6 border-2 border-[#1a1a1a] rounded-lg flex justify-start items-stretch flex-col gap-4 w-full"
              >
                <Card data={data} />
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default ShowCase;
