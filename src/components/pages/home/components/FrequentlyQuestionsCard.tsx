interface IFrequentlyQuestionsCard {
  data: {
    id: number;
    questions: string;
    answer: string;
  };
  questionsLength: number;
}

const FrequentlyQuestionsCard: React.FC<IFrequentlyQuestionsCard> = ({
  data,
  questionsLength,
}) => {
  const isLast: boolean = questionsLength === data?.id;

  return (
    <div
      className={` space-y-2 lg:space-y-4 w-full ${
        !isLast && "pb-4 lg:pb-10 border-b border-[#D9D9D9]"
      }`}
    >
      <div className="flex items-center justify-start gap-2 lg:gap-6 w-full">
        <span className="w-5 h-5 lg:w-10 lg:h-10 font-bold text-sm lg:text-xl text-white bg-[#3B90DB] rounded-full flex items-center justify-center">
          Q
        </span>
        <p className="flex-1  text-[#111111] font-bold text-base lg:text-xl">
          {data?.questions}
        </p>
      </div>

      <div className="flex items-center justify-start gap-2 lg:gap-6 w-full">
        <span className="w-5 h-5 lg:w-10 lg:h-10 font-bold text-sm lg:text-xl text-white gradient-red rounded-full flex items-center justify-center">
          A
        </span>
        <p className="flex-1 text-[#111111] font-normal text-sm lg:text-base leading-7 lg:leading-8">
          {data?.answer}
        </p>
      </div>
    </div>
  );
};

export default FrequentlyQuestionsCard;
