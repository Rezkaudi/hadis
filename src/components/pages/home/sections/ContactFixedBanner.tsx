import Image from "next/image";

// components
import ContactBtn from "../components/ContactBtn";
import PointerIcon from "../components/PointerIcon";

// data
import ContactDetails from "@/content/home/ContactDetails.json";

const ContactFixedBanner: React.FC = () => {
  return (
    <section
      className="w-full py-4 fixed bottom-0 left-0 z-40"
      aria-label="Contact Banner"
    >
      <Image
        className=" -z-10 absolute top-0 left-0 object-cover"
        src={"/images/home-page/banner-bg.png"}
        alt="hero-background-hadis"
        fill
      />

      <div className="flex flex-wrap items-center justify-center w-full h-full gap-2 px-4 lg:px-20">
        <ContactBtn
          mobileLabel={ContactDetails.phoneNumber.label}
          label={ContactDetails.phoneNumber.label}
          href={ContactDetails.phoneNumber.href}
          variant="red"
          className="text-3xl w-full "
        >
          <PointerIcon />
        </ContactBtn>

        <div className="flex items-center justify-center w-full lg:w-fit  h-full gap-2 ">
          <ContactBtn
            mobileLabel={"フォーム"}
            label={ContactDetails.support.label}
            href={ContactDetails.support.href}
            variant="blue"
            className="text-base lg:text-xl w-1/2 flex-1 lg:flex-auto"
          >
            <PointerIcon />
          </ContactBtn>

          <ContactBtn
            mobileLabel={ContactDetails.line.label}
            label={ContactDetails.line.label}
            href={ContactDetails.line.href}
            variant="green"
            className="text-base lg:text-xl w-1/2 flex-1 lg:flex-auto"
          >
            <PointerIcon />
          </ContactBtn>
        </div>
      </div>
    </section>
  );
};

export default ContactFixedBanner;
