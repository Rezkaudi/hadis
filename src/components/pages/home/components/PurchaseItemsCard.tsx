import Image from "next/image";

interface IPurchaseItemsCardProps {
  title: string;
  image: string;
}

const PurchaseItemsCard = ({ title, image }: IPurchaseItemsCardProps) => {
  return (
    <div className="p-[20px_24px_60px_24px] lg:p-[25px_58px_65px_58px] min-h-[240px] lg:min-h-[258px] border-[2px] border-[#B81122] rounded-[4px] bg-white relative">
      <div className="w-full flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={190}
          height={190}
          loading="lazy"
          className="w-auto h-[140px] lg:w-auto lg:h-[190px]"
        />
      </div>
      <p className="max-h-[100px] px-[10px] lg:px-[6px] py-[7px] lg:py-[12px] absolute bottom-0 left-0 w-full bg-[#B81122] flex justify-center items-center text-white text-center font-semibold text-[10px] lg:text-[20px] leading-[27px] lg:leading-[30px] overflow-hidden text-ellipsis line-clamp-2">
        {title}
      </p>
    </div>
  );
};

export default PurchaseItemsCard;
