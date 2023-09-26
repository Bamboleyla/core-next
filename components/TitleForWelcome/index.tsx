import styles from "./styles.module.scss";

interface Props {
  title: string; //Заголовок
  description: string; //Описание
}
export const TitleFromWelcome = ({ title, description }: Props) => {
  return (
    <div className={styles.title} data-testid={"TitleFromWelcome"}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
