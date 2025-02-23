import data from "@/content/home/CompanyProfile.json";

const CompanyProfile = () => {
  return (
    <section id="company-profile" className="py-[80px] px-[10px] font-noto">
      <h2 className="mb-[36px] md:mb-[42px] lg:mb-[50px] text-[30px] md:text-[40px] lg:text-[60px] leading-[45px] md:leading-[60px] lg:leading-[90px] font-black bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent text-center">
        会社概要
      </h2>
      <div className="py-[50px] lg:py-[60px] px-4 md:px-[30px] lg:px-[95px] md:mx-auto md:w-[90%] lg:w-[62%] bg-[#FFF7F8] rounded-[10px]">
        {data.map((item) => (
          <div
            className={`space-y-2 md:space-y-0 md:space-x-24 lg:space-x-[145px] pb-[20px] border-b-[1px] border-[#D9D9D9] text-[#111111]  md:flex items-center ${
              item.id === 1 ? "" : "pt-[20px]"
            }`}
            key={item.id}
          >
            <h3 className="text-[16px] leading-[24px] font-bold min-w-[100px]">
              {item.title}
            </h3>
            <p>{item.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyProfile;
