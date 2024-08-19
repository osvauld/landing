import { DiscordIcon } from "../assets/icons/DiscordIcon";

export const DataOwnership = () => (
  <section className="max-w-[1200px] mx-auto w-full overflow-x-hidden overflow-y-hidden  h-[30rem] px-8 ">
    <div className="feature-card mr-auto  h-[450px] max-w-[900px] xs:h-[373px]  p-6 flex flex-col justify-start items-start  text-left overflow-hidden">
      <h2 className="font-Jakartha font-medium leading-tight tracking-tight text-5xl mb-4 gradient-text-bottom ">
        Your Data, Your Rules.
      </h2>
      <p className="mb-4 text-left text-white2 gradient-text-bottom text-lg md:text-3xl font-Jakartha font-light lg:max-w-[70%] leading-normal py-5">
        You are in control who sees what. Centralize your credentials with
        Osvauld, <br /> make your secrets are secure, searchable, <br /> and
        always accessible.
      </p>
      <div className="mt-auto flex gap-2">
        <button className="bg-blue1 rounded-md text-black flex gap-3 py-2 px-4 items-center ">
          <span>Get started</span>
          <span className="hidden md:block">
            <DiscordIcon />
          </span>
        </button>
        <button className="bg-blue1 rounded-md text-black flex gap-3 py-2 px-4 items-center  ">
          <span>Request a demo</span>
          <span className="hidden md:block">
            <DiscordIcon />
          </span>
        </button>
      </div>
    </div>
  </section>
);
