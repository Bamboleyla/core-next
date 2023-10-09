import { CardForOurRates } from "@/components/CardForOurRates";
import professional from "@/public/image/professionalRates.png";
import start from "@/public/image/startRates.png";

const config = [
  {
    img: start,
    title: "Start",
    subTitle: "БЕСПЛАТНО / 3мес",
    description: "Попробуйте все преимущества нашего сервиса",
  },
  {
    img: professional,
    title: "Professional",
    subTitle: "500 руб. мес.",
    description: "Используйте возможности сервиса на все 100%",
  },
];

export const OurRates = () => {
  return (
    <div
      className="bg-[#FCFEAA] p-2 pb-5 md:pb-20 2xl:p-10  text-black"
      data-testid={"OurRates"}
    >
      <div className="font-[cursive]">
        <p className="text-lg font-semibold md:text-2xl 2xl:text-5xl 2xl:mb-3">
          Наши тарифы,
        </p>
        <p className="md:text-xl sm:mb-2 2xl:text-3xl">
          могут позволить абсолютно все.
        </p>
      </div>
      <div className="flex gap-5 justify-around mt-5 md:mt-10">
        {config.map(({ img, title, subTitle, description }) => (
          <CardForOurRates
            key={title}
            img={img}
            title={title}
            subTitle={subTitle}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};
