import { FooterOsvauld } from "../assets/logos/FooterOsvauld";

export const Footer = () => {
  return (
    <section className="w-full bg-blue1">
      <footer className="relative mx-auto h-[40rem] px-[24px] pt-[32px]  min-h-[749px] max-w-[1312px]  lg:min-h-[545px] lg:px-[60px] lg:pt-[60px]">
        <div className="flex h-full flex-col gap-32">
          <div className="flex flex-col justify-between lg:flex-row"></div>
          <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 px-[24px] lg:px-[60px]">
            <div className="flex w-full justify-center">
              <FooterOsvauld />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
