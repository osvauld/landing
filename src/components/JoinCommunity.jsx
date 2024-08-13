import { DiscordIcon } from "../assets/icons/DiscordIcon";

export const JoinCommunity = () => (
  <section className="max-w-[1200px] mx-auto w-full overflow-x-hidden overflow-y-hidden h-[50rem] px-8 ">
    <div className="feature-card mr-auto  h-[600px] max-w-[900px] md:h-[452px]  p-6 flex flex-col justify-start items-start  text-left overflow-hidden">
      <h2 className="font-Jakartha font-normal leading-tight tracking-tight text-5xl mb-4 gradient-text-bottom ">
        Built for Developers,
        <br /> By Developers
      </h2>
      <p className="mb-4 text-left text-white2 gradient-text-bottom text-lg md:text-2xl font-Jakartha font-light lg:max-w-[70%] leading-normal py-5">
        Be part of a platform that values security and collaboration.
        <br /> Join our discord community, Contribute, collaborate, and innovate
        with us.
      </p>
      <button className="bg-blue1 rounded-md text-black flex gap-3 py-2 px-4 items-center mt-4 lg:mt-auto ">
        <span>Join Osvauld’s Discord Community</span>
        <DiscordIcon />
      </button>
    </div>
  </section>
);
