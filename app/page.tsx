import { Header } from "@/components/Header";
import { Start } from "@/components/Start";
import { WhatIs } from "@/components/WhatIs";

const Welcome = () => {
  return (
    <div className="flex">
      <Header />
      <div
        className="relative max-w-screen-2xl mx-auto mt-10 2-xl:mt-16"
        data-testid={"Welcome"}
      >
        <Start />
        <WhatIs />
      </div>
    </div>
  );
};

export default Welcome;
