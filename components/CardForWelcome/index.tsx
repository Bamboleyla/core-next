import { StaticImageData } from "next/image";
import styles from "./styles.module.scss";
import Image from "next/image";

interface Props {
  img: StaticImageData; //Изображение для карточки
  title: string; //Заголовок карточки
  description: string[]; //Описание карточки
}

export const CardForWelcome = ({ img, title, description }: Props) => {
  return (
    <div className={styles.body} data-testid={"CardForWelcome"}>
      <Image src={img.src} alt="imgCard" />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        {description.map((string, index) => {
          return (
            <p key={index} className={styles.string}>
              {string}
            </p>
          );
        })}
      </div>
    </div>
  );
};
