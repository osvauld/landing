import { motion } from "framer-motion";
import { useState } from "react";


export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-dark1 xl:pt-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-dark1 pt-12  pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
        <div>
          <div className='pl-10'>
        <h2 className='font-thin font-Jakartha  text-5xl text-blue1  xl:tracking-[-0.15rem]'>Setup in 5 minutes</h2>
        <h2 className=' text-white1  text-5xl font-Jakarthafont-light xl:tracking-[-0.15rem]'>Host on  &lt;your-domain&gt;.com </h2>
        </div>
        <div className='flex justify-around items-center h-[60vh] mt-10'>
          <article className='bg-dark2 h-[70%] rounded-lg xl:w-[45%] p-10'>
            <h3 className='text-4xl font-Jakartha text-blue1 font-light xl:tracking-[-0.15rem]'>On-Premise Solution</h3>
            <p className='text-base text-white1 pt-4'>Store data locally on your trusted infrastructure, reducing the risk of data breaches associated with cloud-based centralized systems. </p>
          </article>
          <article className='bg-dark2 h-[70%] rounded-lg xl:w-[45%] p-10'>
            <h3  className='text-4xl font-Jakartha  text-blue1 font-light xl:tracking-[-0.15rem]'>Easy Deployment </h3>
            <p className='text-base text-white1 pt-4'>Pre-Built Deployment Scripts are designed to simplify the installation process, tailored to integrate seamlessly with your organization's existing and trusted infrastructure, ensuring compatibility and reliability. </p>
          </article>
        </div>
        </div>
        </div>
      </motion.div>
    </section>
  );
};
