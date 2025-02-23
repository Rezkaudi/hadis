import Image from "next/image";

interface IWhyChooseCard {
    data: {
        imageSrc: string
        title: string
        id: number
        description: string

    }
}

const WhyChooseCard: React.FC<IWhyChooseCard> = ({ data }) => {
    return (
        <div className="flex flex-wrap lg:flex-nowrap">
            <Image
                src={data.imageSrc}
                alt={`Why choose: ${data.title}`}
                width={355}
                height={178}
                loading="lazy"
                className="w-full lg:max-h-[240px] lg:max-w-[40%] object-contain"
            />
            {/* text side */}
            <div className="ml-0 lg:ml-8 flex-1">
                {/* heading */}
                <div className="space-x-2 flex items-center my-4 lg:my-0 lg:mb-4">
                    <div className="w-[40px] md:w-[50px] lg:w-[60px] min-w-[40px] lg:min-w-[60px] h-[40px] md:h-[50px] lg:h-[60px] bg-[linear-gradient(135deg,#B81122_50%,#AC0C1C_50%)] flex justify-center items-center text-white font-bold text-[30px] md:text-[35px] lg:text-[40px] leading-[30px] lg:leading-[40px] rounded">
                        {data.id}
                    </div>
                    <h3 className="text-[#B81122] font-black text-[19px] md:text-[28px] lg:text-[32px] leading-[30px] lg:leading-[48px]">
                        {data.title}
                    </h3>
                </div>
                {/* paragraph */}
                <p className="text-[#111111] font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-8 lg:leading-[40px]">
                    {data.description}
                </p>
            </div>
        </div>
    )
};

export default WhyChooseCard;
