export const TechStack = () => (
  <div className="w-[60%] grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-0">
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
