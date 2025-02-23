import Image from "next/image";
import FlowCard from "../components/FlowCard";

const flowItems = [
  {
    imageSrc: "/images/home-page/mask1.png",
    title: "しばらく使っていなくて動くかわからない",
  },
  {
    imageSrc: "/images/home-page/mask2.png",
    title: "大型重量物で自分で動かすことができない",
  },
  {
    imageSrc: "/images/home-page/mask3.png",
    title: "期日までに現金化したい",
  },
];

const flowDescription = [
  "ハディズでは、DIY用の工具・電動工具をはじめ、工場で使用する大型機械など、幅広く査定・買取を承っております。",
  "他店に負けない正当な価格での査定に自信があります。",
  "まずはお気軽に査定をご依頼ください。",
];

const Flow: React.FC = () => {
  return (
    <section className="relative w-full py-[50px] lg:py-20 text-center px-4">
      <Image
        className="absolute -z-10 top-0 left-0 object-cover"
        src="/images/home-page/flow-bg.png"
        alt="Background image for flow section"
        fill
      />

      <h3 className="font-black text-xl lg:text-2xl">お持ちの工具・機械で</h3>
      <h2 className="mx-auto font-black text-[32px] lg:text-6xl text-[#D51A16] pt-8">
        <span className="relative">
          こんなお悩み
          <span className="w-full h-[18px] lg:h-[29px] bg-[#FF6877] absolute bottom-0 left-0 -z-10 opacity-40"></span>
        </span>
        <span className="block sm:inline">ありませんか？</span>
      </h2>

      {/* Flow Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 mt-12">
        {flowItems.map(({ imageSrc, title }, index) => (
          <FlowCard key={index} imageSrc={imageSrc} title={title} />
        ))}
      </div>

      {/* Flow Title Image */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <span className="h-0 w-0 border-x-[13px] border-b-[20px] md:border-x-[20px] md:border-b-[30px] border-x-transparent rotate-180 border-b-[#B81122]"></span>
        <Image
          src="/images/home-page/flow-title.png"
          alt="hadis image"
          width={670}
          height={76}
          loading="lazy"
        />
      </div>

      {/* Description */}
      <div className="mt-4">
        {flowDescription.map((description, index) => (
          <p
            key={index}
            className="max-w-[736px] text-base leading-8 md:text-xl font-normal mx-auto md:leading-10"
          >
            {description}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Flow;
