import { ButtonTag } from "../ui/Button";
export const About = () => {
  return (
    <div className="py-[64px] px-[16px] sm:px-[80px] sm:py-[96px] bg-slate-50 dark:bg-slate-900">
      <div className="container m-auto px-32px">
        <ButtonTag text="About me" />
        <div className="flex flex-col sm:flex-row justify-between pt-12">
          <div className="flex justify-center">
            <div className="w-[280px] sm:w-[400px] pt-[28px] sm:pt-[85px] sm:w-[50]">
              <div className="dark:bg-[#374751] bg-slate-200 w-[280px] h-[320px] sm:w-[400px] sm:h-[480px] absolute"></div>
              <img
                className="relative bottom-[40px] left-[40px]"
                src="about.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-[100%] pt-[48px] sm:w-[50%] ">
            <h2 className="text-3xl font-bold pb-6 ">
              Curious about me? Here you have it:
            </h2>

            <p className="pb-4 text-slate-600 dark:text-white">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="pb-4 text-slate-600 dark:text-white">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="pb-4 text-slate-600 dark:text-white">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="pb-4 text-slate-600 dark:text-white">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p className="pb-4 text-slate-600 dark:text-white">
              Finally, some quick bits about me.
            </p>
            <ul className="flex text-slate-600 list-disc gap-8 pl-4 dark:text-white">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </ul>
            <ul className=" flex pb-4 text-slate-600 list-disc gap-10 pl-4 dark:text-white">
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </ul>
            <p className="text-slate-600 dark:text-white">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
