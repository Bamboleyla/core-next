import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

interface Props {
  img: StaticImageData; //Изображение карты
  title: string; //Заголовок
}
export const WhoIsItForCard = ({ img, title }: Props) => {
  return (
    <div className={styles.component}>
      <Image src={img} alt={`Card ${title}`} />
      <p>{title}</p>
    </div>
  );
};
