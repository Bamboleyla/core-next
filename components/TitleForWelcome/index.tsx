interface Props {
  title: string; //Заголовок
  description: string; //Описание
}
export const TitleFromWelcome = ({ title, description }: Props) => {
  return (
    <div className="font-[cursive]" data-testid={"TitleFromWelcome"}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
