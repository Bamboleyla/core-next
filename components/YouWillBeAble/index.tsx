import efficiency from "@/public/image/efficiency.png";
import newClients from "@/public/image/newClients.png";
import simpleControl from "@/public/image/simplifyControl.png";
import { CardForWelcome } from "../CardForWelcome";

const config = [
  {
    img: efficiency,
    title: "Повысить производительность: ",
    description: [
      "• благодаря сокращению времени ведения учета;",
      "• благодаря распределения нагрузки среди мастеров;",
      "• благодаря автоматизации процессов;",
      "• благодаря моментальному получению информации о всех бизнес-процессах;",
      "• благодаря увеличению возможности обслуживания большего число клиентов;",
    ],
  },
  {
    img: newClients,
    title: "Привлечь новых клиентов: ",
    description: [
      "• благодаря удобству записи;",
      "• благодаря сокращения ожидания своей очереди;",
      "• благодаря получения регулярных предложений и акций от салона;",
      "• благодаря возможности обслуживания у любимого мастера ;",
      "• благодаря наличия клиентской поддержки;",
    ],
  },
  {
    img: simpleControl,
    title: "Упростить контроль: ",
    description: [
      "• приход, расход материалов за пару кликов;",
      "• простая инвентаризация;",
      "• остатки, движения материалов всегда перед вами;",
      "• автосписание с оказанных услуг;",
      "• ценообразование, рентабельность, финансовый результат, расчет зарплаты, премий и многое другое в режиме онлайн;",
    ],
  },
];

export const YouWillBeAble = () => {
  return (
    <div
      className="bg-[#B58FDB] text-black p-2 2xl:p-10"
      data-testid={"YouWillBeAble"}
    >
      <div className="font-[cursive]">
        <p className="text-lg font-semibold md:text-2xl 2xl:text-5xl 2xl:mb-3">
          Благодаря Ядру,
        </p>
        <p className="md:text-xl 2xl:text-3xl">
          ваш бизнес получает возможности:
        </p>
      </div>

      {config.map((item) => (
        <CardForWelcome key={item.title} {...item} />
      ))}
    </div>
  );
};
