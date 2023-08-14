import Button from "./button";
import Container from "./container";
import Header from "./header";

const HeroSection = () => {
  return (
    <div className="bg-[#EAECF9]   text-black py-7 h-full">
      <Container>
        <Header />

        <div className="flex flex-col justify-center gap-8  h-full w-2/4  max-xl:w-9/12	 max-lg:w-full max-lg:text-center max-md:py-20 max-md:text-start">
          <h1 className="font-bold text-5xl leading-normal max-md:text-4xl">
            Hi, I'm Arvind M,
            <span className="block">Senior Frontend Developer</span>
            {/* <span className="before:block before:absolute before:-inset-1  before:bg-[#A8B4FF] relative inline-block">
              <span className="relative text-white">
                Senior Frontend Developer
              </span>
            </span> */}
          </h1>

          <p className="leading-normal text-base">
            I specialize in building performant websites and web applications
            that seamlessly merge creativity with cutting-edge technologies. My
            toolkit includes React and Next.js for robust frontend development,
            while CSS and Tailwind CSS ensure responsive designs that captivate
            users across devices
          </p>

          <div>
            <Button />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
