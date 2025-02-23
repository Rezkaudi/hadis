// components
import FrequentlyQuestionsCard from "../components/FrequentlyQuestionsCard";

// data
import FrequentlyAskedQuestionsData from "@/content/home/FrequentlyAskedQuestions.json";

const FrequentlyAskedQuestions: React.FC = () => {
  return (
    <section
      id="frequently-asked-questions"
      className="py-20 lg:py-[120px] px-3 w-full"
    >
      <div className=" py-10 space-y-10 lg:space-y-12 max-w-[928px] mx-auto">
        <h2 className="font-black text-3xl lg:text-6xl text-[#D51A16] text-center">
          よくあるご質問
        </h2>
        <div
          className="w-full space-y-4 lg:space-y-10  rounded-[20px] py-[50px] px-3 lg:py-[60px] lg:px-[96px]"
          style={{ boxShadow: "0px 4px 20px 0px #0000001A" }}
        >
          {FrequentlyAskedQuestionsData.map((item) => (
            <FrequentlyQuestionsCard
              key={item.id}
              data={item}
              questionsLength={FrequentlyAskedQuestionsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
