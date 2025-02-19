import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Cybersecurity engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br />
              <span className="text-accent">Nicolas B</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I was able to experience through practice many tools and daily
              gestures of developer but also several modes of operation. I take
              part in projects in different domains, teams and languages, giving
              me great adaptability.
            </p>
            {/*button social*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/resume/cv.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase flex items-center gap-2"
              >
                <Button variant="outline" size="lg">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/*photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <Analytics />
    </section>
  );
};

export default Home;
