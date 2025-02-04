import { motion } from "framer-motion";
import abe from "../assets/images/team/abe.webp";
import anoop from "../assets/images/team/anoop.webp";
import tony from "../assets/images/team/tony.webp";
import bijoy from "../assets/images/team/bijoy.webp";
import shravan from "../assets/images/team/shravan.webp";
import { LinkdinIcon } from "../assets/icons/LinkdinIcon";

// export const Team = () => (
//   <motion.section
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.3, delay: 0.4 }}
//     className=" w-full max-w-[1200px] mx-auto my-10 px-8 flex flex-col items-center gap-16"
//   >
//     <div className="w-full feature-card p-10">
//       <span className="text-3xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-white2 to-neutral-500  text-center font-Jakartha font-semibold ">
//         Built by small but mighty team
//       </span>
//       <div className="mt-10 grid grid-cols-2 grid-rows-3 lg:grid-cols-5 lg:grid-rows-1  gap-8 ">
//         <div className="flex flex-col items-start gap-3 max-w-[400px]">
//           <img
//             src={abe.src}
//             alt="Abraham George"
//             className="w-full h-full object-contain"
//           />
//           <span className="font-Inter font-light text-base tracking-wide text-text2 whitespace-nowra uppercase">
//             Abraham George
//           </span>
//           <hr className="my-1  border-t border-faqBorder w-3/4 text-start" />
//           <span className="font-inter font-normal text-text3 whitespace-nowrap">
//             Chief Builder
//           </span>
//           <button>
//             <LinkdinIcon color="#75778B" />
//           </button>
//         </div>
//         <div className="flex flex-col items-start gap-3 max-w-[400px]">
//           <img
//             src={anoop.src}
//             alt="Anoop Jacob"
//             className="w-full h-full object-contain"
//           />
//           <span className="font-Inter font-light text-base tracking-wide text-text2 whitespace-nowrap uppercase">
//             Anoop Jacob
//           </span>
//           <hr className="my-1  border-t border-faqBorder w-3/4 text-start" />
//           <span className="font-inter font-normal text-text3">Engineer</span>
//           <button>
//             <LinkdinIcon color="#75778B" />
//           </button>
//         </div>
//         <div className="flex flex-col items-start gap-3 max-w-[400px]">
//           <img
//             src={tony.src}
//             alt="Tony Antony"
//             className="w-full h-full object-contain"
//           />
//           <span className="font-Inter font-light text-base tracking-wide text-text2 whitespace-nowrap uppercase">
//             Tony Antony
//           </span>
//           <hr className="my-1  border-t border-faqBorder w-3/4 text-start" />
//           <span className="font-inter font-normal text-text3">Engineer</span>
//           <button>
//             <LinkdinIcon color="#75778B" />
//           </button>
//         </div>
//         <div className="flex flex-col items-start gap-3 max-w-[400px]">
//           <img
//             src={bijoy.src}
//             alt="BIJOY JOSEH"
//             className="w-full h-full object-contain"
//           />
//           <span className="font-Inter font-light text-base tracking-wide text-text2 whitespace-nowrap">
//             BIJOY JOSEH
//           </span>
//           <hr className="my-1  border-t border-faqBorder w-3/4 text-start" />
//           <span className="font-inter font-normal text-text3">Engineer</span>
//           <button>
//             <LinkdinIcon color="#75778B" />
//           </button>
//         </div>
//         <div className=" flex flex-col items-start gap-3 max-w-[400px]">
//           <img
//             src={shravan.src}
//             alt="SHRAVANKUMAR PS"
//             className="w-full h-full object-contain"
//           />
//           <span className="font-Inter font-light text-base tracking-wide text-text2 whitespace-nowrap">
//             SHRAVANKUMAR PS
//           </span>
//           <hr className="my-1  border-t border-faqBorder w-3/4 text-start" />
//           <span className="font-inter font-normal text-text3 whitespace-nowrap">
//             product Designer
//           </span>
//           <button>
//             <LinkdinIcon color="#75778B" />
//           </button>
//         </div>
//       </div>
//     </div>
//   </motion.section>
// );

//import { motion } from "framer-motion";
import { useState } from "react";

const TeamMemberCard = ({ image, name, role, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full h-[300px]">
      {/* Card container with perspective */}
      <div
        className="w-full h-full relative [perspective:1000px]"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Inner container that flips */}
        <div
          className={`absolute w-full h-full [transition:0.6s] [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front face */}
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 p-4">
              <span className="font-Inter font-light text-base tracking-wide text-text2 whitespace-nowrap uppercase block">
                {name}
              </span>
              <hr className="my-1 border-t border-faqBorder w-3/4" />
              <div className="flex justify-between items-center">
                <span className="font-inter font-normal text-text3 whitespace-nowrap">
                  {role}
                </span>
                <button>
                  <LinkdinIcon color="#75778B" />
                </button>
              </div>
            </div>
          </div>

          {/* Back face */}
          <div className="absolute w-full h-full bg-gray-900 p-6 flex items-center justify-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="text-center font-Inter">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Team = () => {
  const teamMembers = [
    {
      image: abe.src,
      name: "Abraham George",
      role: "Chief Builder",
      description:
        "Leading the technical vision and architecture of our products.",
    },
    {
      image: anoop.src,
      name: "Anoop Jacob",
      role: "Engineer",
      description: "Specializing in backend systems and infrastructure.",
    },
    {
      image: tony.src,
      name: "Tony Antony",
      role: "Engineer",
      description: "Frontend specialist focusing on user experience.",
    },
    {
      image: bijoy.src,
      name: "BIJOY JOSEH",
      role: "Engineer",
      description: "SDET with expertise in enterprise solutions.",
    },
    {
      image: shravan.src,
      name: "SHRAVANKUMAR PS",
      role: "Product Designer",
      description: "Creating intuitive and beautiful user interfaces.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.4 }}
      className="w-full max-w-[1200px] mx-auto my-16 xl:my-32 px-8 flex flex-col items-center gap-16"
    >
      <div className="w-full  p-10">
        <span className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white2 to-neutral-500 text-center font-Jakartha font-semibold block mb-10 py-2">
          Team
        </span>
        <div className="mt-10 grid grid-cols-2 grid-rows-3 lg:grid-cols-5 lg:grid-rows-1 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;
