import Image from "next/image";
import "@/styles/hero.css";

const Hero: React.FC = () => {
  return (
    <>
      <section
        aria-label="Hero section with business highlights"
        className="relative px-4 w-full h-[410px] lg:h-[640px] 2xl:h-[calc(100vh-64px)] sm:bg-right-top"
      >
        <Image
          src='/images/home-page/hero-background-mobile.webp'
          alt="Company's legacy image"
          sizes=" 100vw"
          quality={50}
          fill
          priority
          style={{
            objectFit: "cover",
          }}
          className='-z-10 block lg:hidden'
        />
        <Image
          src='/images/home-page/hero-background.webp'
          alt="Company's legacy image"
          sizes=" 100vw"
          quality={50}
          fill
          priority
          style={{
            objectFit: "cover",
          }}
          className='-z-10 hidden lg:block'
        />
        <div className="flex lg:w-1/2 2xl:min-w-[1000px] items-start 2xl:items-center justify-center h-full 2xl:h-3/4 space-y-2 lg:space-y-7 flex-col pt-7 2xl:pt-20 sm:pl-12 pb-4">
          {/* image 1  */}
          <div className="text-hero relative xl:w-[810px] xl:h-[64px] w-[335px] h-[38px] sm:h-[50px] lg:h-[70px]">
            <Image
              src="/images/home-page/hero-1.webp"
              alt="Company's legacy image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
              fill
              loading="lazy"
            />
          </div>
          {/* image 2 */}
          <div className="text-hero relative w-[340px] h-[88px] sm:h-[130px] lg:h-[300px] xl:w-[810px] xl:h-[350px]">
            <Image
              src="/images/home-page/hero-2.webp"
              alt="Hero promotional banner with details"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
              fill
              loading="lazy"
              quality={100}
            />
          </div>

          {/* details */}
          <div className="flex w-full items-start xl:items-center justify-center gap-2 flex-col lg:flex-row text-white flex-wrap">
            <h1 className="flex gap-1 items-center justify-center w-[165px] h-[66px] lg:w-[276px] lg:h-[102px] gradient-red rounded-lg font-black lg:text-[32px] text-xl">
              <span className="text-[18px] lg:text-[28px]">創業</span>
              <span className="text-[44px] lg:text-[100px]">25</span>
              <span className="mt-auto pb-2 text-[18px] lg:text-[28px]">
                年以上
              </span>
            </h1>
            <h2 className="flex gap-1 lg:gap-2 items-center justify-center w-[165px] h-[66px] lg:w-[276px] lg:h-[102px] gradient-red rounded-lg font-black lg:text-[32px] text-xl">
              <span className="flex items-center justify-center flex-col gap-1 lg:gap-2">
                <span>出張費</span>
                <span>査定費</span>
              </span>
              <span className="text-[46px] lg:text-[100px]">0</span>
              <span className="mt-auto pb-2">円</span>
            </h2>
            <h2 className="flex items-center justify-center w-[165px] h-[66px] lg:w-[276px] lg:h-[102px] gradient-red rounded-lg font-black text-3xl lg:text-[50px]">
              全国対応
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
