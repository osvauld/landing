import { RustLogo } from "../assets/logos/RustLogo";
import { WasmLogo } from "../assets/logos/WasmLogo";
import { TypescriptLogo } from "../assets/logos/TypescriptLogo";
import { SvelteLogo } from "../assets/logos/SvelteLogo";
import { GolangLogo } from "../assets/logos/GolangLogo";

export const TechStack = () => (
  <div className="w-full h-[15vh] grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-0">
    <span className="flex justify-center items-center">
      <SvelteLogo />
    </span>
    <span className="hidden md:flex md:justify-center md:items-center">
      <TypescriptLogo />
    </span>
    <span className="flex justify-center items-center -translate-x-3 md:-translate-x-0">
      <GolangLogo />
    </span>
    <span className="flex justify-center items-center">
      <WasmLogo />
    </span>
    <span className="flex justify-center items-center">
      <RustLogo />
    </span>
  </div>
);
