import React from "react";
import { FadeIn } from "../ui";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const GalleryImage: React.FC<{
  src: string;
  rotation: string;
  position: string;
  className?: string;
  text?: string;
}> = ({ src, rotation, position, className, text }) => {
  return (
    <div
      className={cn(
        "w-48 h-56 absolute bg-white border border-zinc-200/80 overflow-hidden",
        position,
        rotation,
        className
      )}
    >
      <Image
        className="w-44 h-44 left-[6.78px] top-[6.78px] absolute"
        src={src}
        alt="Photography"
        width={183}
        height={182}
      />
      <div className="left-[55px] top-[192px] italic tracking-wide text-zinc-600 font-normal absolute justify-start text-xs font-normal]">
        {text}{" "}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section className="px-6">
      <FadeIn delay={0.8}>
        <h2 className="text-zinc-900 text-xl  md:text-2xl font-semibold leading-relaxed mb-4">
          About
        </h2>
        <div className="text-zinc-500 text-base font-normal leading-relaxed space-y-4">
          {/* <p>I&apos;m Emerentia, based in Glasgow, Scotland.
          </p> */}
          <p>
            {/* <b className="text-zinc-600 font-semibold">
              {" "}
              Here&apos;s what I actually do:
            </b>{" "} */}
            {/* [Describe your main skills and expertise. What problems do you solve
            for your clients? What makes you different from others in your
            field?] */}
            I have graduated with an MSc in Software Development in September 2025. 
            I am proficient in Java and Python for back-end development and familiar
            with Agile working environments. I am committed to leveraging my skills 
            to drive technological advancements and deliver impactful solutions.
          </p>
          {/* <p>
            [Add another paragraph about your approach, methodology, or
            philosophy. What&apos;s your unique perspective on your work?]
          </p> */}
          {/* <p>
            [Mention your achievements, community involvement, or notable
            projects. Include numbers or metrics if you have them.]
          </p> */}
          <p>
            {/* [Describe the results you deliver for clients or the impact of your
            work.] */}
          </p>{" "}
          {/* <br />
          <Link
            href="https://yourblog.com/"
            target="_blank"
            className="text-[#9D8BF5] underline hover:text-[#8e7ddf] font-medium hover:underline transition-colors"
          >
            [Optional: Add link to your blog, articles, or additional content]
          </Link>{" "} */}
          <p className="font-medium">
            {/* [End with a strong statement about your work or value proposition.] */}
          </p>
        </div>
      </FadeIn>

      {/* Polaroid Photos Gallery */}
      <div className="relative mt-20 min-h-[400px]">
        <FadeIn delay={0.8}>
          <GalleryImage
            src="/image2.jpg"
            rotation="origin-top-left rotate-[-8deg]"
            position="left-[2%] top-[150px] md:left-[14%] md:top-[130px] lg:left-[10%] lg:top-[90px]"
            className="shadow-xl"
            text="Glencoe, Scotland"
          />
        </FadeIn>
        <FadeIn delay={0.3}>
          <GalleryImage
            src="/image1.jpg"
            rotation="origin-top-left rotate-[15deg]"
            position="-right-2 top-[-50px] md:right-[20%] md:top-[-30px] lg:right-[20%] lg:top-[-10px]"
            className="shadow-lg"
            text="Graduation"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export { About };
