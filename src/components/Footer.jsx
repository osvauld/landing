import { DiscordIcon } from "../assets/icons/DiscordIcon";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-dark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="top-section w-full lg:w-[95vw] h-[40vh flex justify-center items-center">
            <div className="left-section w-1/2 ">
              <div className="bg-dark2 w-1/2 rounded-lg px-3 py-8 text-lg text-white1 flex flex-col justify-center items-center">
                <h6>Any questions or feedbacks?</h6>
                <button className="flex bg-blue1 text-dark1 justify-center items-center px-3 py-1.5 rounded whitespace-nowrap mt-4 text-base">
                  {" "}
                  <DiscordIcon />
                  <span className="ml-2">Chat with us on Discord</span>
                </button>
              </div>
            </div>
            <div className="right-section w-1/2"></div>
          </div>
          <div className="bottom-section"></div>
        </div>
      </div>
    </footer>
  );
};
