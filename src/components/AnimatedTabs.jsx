"use client";
import thumbnail from "/src/assets/images/thumbnail.webp";
import sharing from "/src/assets/images/sharing.webm";
import meet from "/src/assets/images/meetOsvauld.png";
import dashboard from "/src/assets/images/Dashboardnew.png";
import { Tabs } from "../components/ui/tabs";

export function AnimatedTabs() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-red-500">
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-green-400">
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-blue-400">
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 text-xl md:text-4xl font-bold text-white bg-gradient-to-br bg-yellow-300">
          <DummyContent4 />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src={thumbnail.src}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-full absolute  inset-x-0 w-full rounded-xl mx-auto"
    />
  );
};

const DummyContent2 = () => {
  return (
    <video
      src={sharing}
      alt="sharing functionality of osvauld"
      className="object-cover object-left-top h-full absolute  inset-x-0 w-full rounded-xl mx-auto"
      autoPlay
      loop
      muted
      loading="lazy"
      decoding="async"
      playsInline
    />
  );
};

const DummyContent3 = () => {
  return (
    <img
      src={meet.src}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-full absolute  inset-x-0 w-full rounded-xl mx-auto"
    />
  );
};

const DummyContent4 = () => {
  return (
    <img
      src={dashboard.src}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-full absolute  inset-x-0 w-full rounded-xl mx-auto"
    />
  );
};
