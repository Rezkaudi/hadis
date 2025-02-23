interface IBusinessPolicyCard {
  title: string;
  content: string;
}

const BusinessPolicyCard: React.FC<IBusinessPolicyCard> = ({
  title,
  content,
}) => {
  return (
    <div className="flex items-center justify-center gap-2 lg:gap-8 flex-col lg:flex-row">
      <span className="rounded flex items-center justify-center gap-2 lg:gap-5 gradient-red text-white px-4 lg:px-10 py-2 lg:py-4">
        <span className="font-bold text-base lg:text-2xl">{title}</span>
      </span>
      <span className="relative text-[#C4151E] font-black  text-xl lg:text-3xl z-20">
        {content}
        <span className="w-full h-[12px] lg:h-[20px] bg-[#FAFA80] absolute -bottom-2 left-0 -z-10"></span>
      </span>
    </div>
  );
};

export default BusinessPolicyCard;
