import Image from "next/image";

interface IPurchaseProcessCard {
  data: {
    id: number;
    title: string;
    content: string;
    imageSrc: string;
  };
  steps: number;
}

const PurchaseProcessCard: React.FC<IPurchaseProcessCard> = ({
  data,
  steps,
}) => {
  return (
    <>
      <div
        className={`flex items-center justify-center gap-6 flex-col lg:flex-row lg:gap-8 ${
          data.id % 2 === 0
            ? "lg:odd:flex-row-reverse"
            : "lg:even:flex-row-reverse"
        }`}
      >
        <div className=" lg:flex-1 w-[266px] lg:w-[448px] h-[161px] lg:h-[273px] relative">
          <Image
            className=" absolute top-0 left-0 pr-[10px] pb-[10px] lg:pr-[23px] lg:pb-[23px]"
            fill
            src={data.imageSrc}
            alt={data.title}
          />
          <Image
            unoptimized
            loading="lazy"
            className=" absolute -z-10 bottom-0 right-0 pl-[10px] pt-[10px] lg:pl-[23px] lg:pt-[23px]"
            fill
            src={"/images/home-page/dotted-bg-block.png"}
            alt="dotted-bg-block"
          />
        </div>

        <div className=" space-y-4 lg:flex-1 max-w-[350px] lg:max-w-full">
          <div className="flex items-center justify-start gap-2 lg:gap-4">
            <span className="rounded font-bold w-[103px] text-white gradient-red space-x-1">
              <span className="text-2xl">Step</span>
              <span className="text-[32px]">{data.id}</span>
            </span>
            <h3 className="text-xl font-black text-[#B81122]">{data.title}</h3>
          </div>
          <p
            className="text-base text-left lg:text-xl font-normal text-[#111111] "
            style={{ lineHeight: "40px" }}
          >
            {data.content}
          </p>
        </div>
      </div>

      {steps > data.id && (
        <Image
          className="mx-auto"
          width={41}
          height={49}
          src={"/images/icons/next-step-arrow.svg"}
          alt="next-step-arrow-hadis"
        />
      )}
    </>
  );
};

export default PurchaseProcessCard;
