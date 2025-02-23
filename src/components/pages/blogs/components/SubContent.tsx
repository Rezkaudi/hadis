import Image from "next/image";

const SubContent: React.FC<{ content: BlogSubContent }> = ({ content }) => {
  switch (content.type) {
    case "simple":
      return (
        <div key={content.id} className="border-t pt-5">
          <h2 className="font-black text-[18px] lg:text-[25px] leading-[48px]">
            {content.title}
          </h2>
          {content.description?.split("\n").map((item, index) => (
            <p className="font-normal text-base leading-8 my-5" key={index}>
              {item}
            </p>
          ))}
        </div>
      );
    case "image":
      return (
        <div key={content.id} className="pt-5">
          <div className=" relative w-full h-[250px] lg:w-[544px] lg:h-[307px] mx-auto mb-4">
            <Image
              className="object-contain"
              src={content.imageSrc}
              alt={content.title}
              fill
            />
          </div>
          {content.title.split("\n").map((paragraph, index) => (
            <p className="text-center" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      );
    case "numberedList":
      return (
        <div key={content.id} className="border-t pt-5">
          <h2 className="font-black text-[18px] lg:text-[25px] leading-[48px]">
            {content.title}
          </h2>
          {content.description && (
            <p className="font-normal text-base leading-8 inline">
              {content.description}
            </p>
          )}
          {content.items?.map((item, index) => (
            <div className="ml-5" key={index}>
              <h3 className="font-black text-base leading-[48px] inline">
                {item.title}:
              </h3>
              <br />
              <p className="font-normal text-base leading-8 inline">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      );
    case "unNumberedList":
      return (
        <div key={content.id} className="border-t pt-5">
          <h2 className="font-black text-[18px] lg:text-[25px] leading-[48px]">
            {content.title}
          </h2>
          <p className="font-normal text-base leading-8  mb-5">
            {content.topDescription}
          </p>

          {content.items?.map((item, index) => (
            <div key={index}>
              <h3 className="font-black text-[16px] inline">{item}</h3>
            </div>
          ))}
          <p className="font-normal text-base mt-5">
            {content.bottomDescription}
          </p>
        </div>
      );
    case "faq":
      return (
        <div key={content.id} className="border-t pt-5">
          <h2 className="font-black text-[18px] lg:text-[25px] leading-[48px]">
            {content.title}
          </h2>
          {content.items?.map((item, index) => (
            <div className="ml-5 pb-3" key={index}>
              <h3 className="font-black text-[16px] leading-[48px]">
                <span className="font-black">Q{item.id}:</span>
                {item.question}
              </h3>
              <p className="font-normal text-base leading-8">
                <span className="font-black">A{item.id}:</span>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      );
    default:
      return null; // Handle unknown types safely
  }
};

export default SubContent;
