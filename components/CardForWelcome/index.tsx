import { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
  img: StaticImageData; //Изображение для карточки
  title: string; //Заголовок карточки
  description: string[]; //Описание карточки
}

export const CardForWelcome = ({ img, title, description }: Props) => {
  return (
    <div className="flex mt-5" data-testid={"CardForWelcome"}>
      <Image
        className="w-28 h-28"
        src={img.src}
        alt="imgCard"
        width={520}
        height={520}
      />
      <div className="ml-5 -mt-1 text-xs font-[system-ui]">
        <p className="font-semibold">{title}</p>
        {description.map((string, index) => {
          return (
            <p key={index} className="font-thin text-xs/3">
              {string}
            </p>
          );
        })}
      </div>
    </div>
  );
};
