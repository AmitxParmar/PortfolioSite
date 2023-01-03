/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
    return (<>
        {/* <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img
                className='-mb-20 md:mb-0 flex flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-95 md:h-95 '
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src='/Luffy.jpg'
            />
        </div> */}
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1, x: 0 }}
            className=" text-clip overflow-hidden flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="/Luffy2.jpg"
                alt="Author's Picture"
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]'
            />
            <div className='space-y-10 px-0 md:px-10 '>
                <h4 className='text-4xl font-semibold'>Here's a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                </h4>
                <p className='text-base '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eos magni, minima perferendis dignissimos eum. Nam, vitae quasi eveniet mollitia aliquam nihil! Nobis nostrum modi dolore qui excepturi, quod fuga.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eos magni, minima perferendis dignissimos eum. Nam, vitae quasi eveniet mollitia aliquam nihil! Nobis nostrum modi dolore qui excepturi, quod fuga.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eos magni, minima perferendis dignissimos eum. Nam, vitae quasi eveniet mollitia aliquam nihil! Nobis nostrum modi dolore qui excepturi, quod fuga.
                </p>
            </div>
        </motion.div>
    </>);
};

export default About;