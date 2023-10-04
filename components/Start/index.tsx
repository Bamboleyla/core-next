import logo from "@/public/icon/Logo320.svg";
import salon from "@/public/image/beautySalon.png";
import Image from "next/image";

export const Start = () => {
  return (
    <div className="relative -z-10 mx-auto" data-testid={"Start"}>
      <Image src={salon} alt="Salon" />
      <div className="absolute right-10 bottom-40">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" />
          <p className="h-max text-9xl font-russo ml-5">Ядро</p>
        </div>
        <div>
          <p className="text-7xl font-bold">Автоматизация</p>
          <p className="text-7xl font-bold mt-3">салона красоты</p>
          <p className="text-4xl mt-5"> - как никогда проста</p>
        </div>
      </div>
    </div>
  );
};
