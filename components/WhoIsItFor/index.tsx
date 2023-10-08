import beauty from "@/public/image/beauty.png";
import spa from "@/public/image/spa.png";
import manicure from "@/public/image/manicure.png";
import barber from "@/public/image/barber.png";
import brows from "@/public/image/brows.png";
import massage from "@/public/image/massage.png";
import epilation from "@/public/image/epilation.png";
import photoStudio from "@/public/image/photoStudio.png";
import tattoo from "@/public/image/tattoo.png";
import grummer from "@/public/image/grummer.png";
import solarium from "@/public/image/solarium.png";
import piercing from "@/public/image/piercing.png";
import { WhoIsItForCard } from "../WhoIsItForCard";

const config = [
  {
    img: beauty,
    title: "Красоты",
  },
  {
    img: spa,
    title: "SPA",
  },
  {
    img: manicure,
    title: "Маникюра",
  },
  {
    img: barber,
    title: "Барбершопов",
  },
  {
    img: brows,
    title: "Бровей и ресниц",
  },
  {
    img: massage,
    title: "Массажа",
  },
  {
    img: epilation,
    title: "Эпиляции",
  },
  {
    img: photoStudio,
    title: "Фото",
  },
  {
    img: tattoo,
    title: "Тату",
  },
  {
    img: grummer,
    title: "Грумер",
  },
  {
    img: solarium,
    title: "Загара",
  },
  {
    img: piercing,
    title: "Пирсинга",
  },
];

export const WhoIsItFor = () => {
  return (
    <div className="bg-[#C4F2F2] p-2 2xl:p-10" data-testid={"WhoIsItFor"}>
      <div className="font-[cursive] text-black">
        <p className="text-lg font-semibold md:text-2xl 2xl:text-5xl 2xl:mb-3">
          Для кого разработано Ядро?
        </p>
        <p className="md:text-xl sm:mb-2 2xl:text-3xl">
          Программа идеально подходит для салонов:
        </p>
      </div>
      <div
        className="grid grid-cols-3 gap-4 mt-5"
        data-testid={"WhoIsItForCard"}
      >
        {config.map((item) => (
          <WhoIsItForCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
