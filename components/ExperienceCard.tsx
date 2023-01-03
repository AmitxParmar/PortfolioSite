import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const ExperienceCard = (props: Props) => {
    return (<article>
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="/Luffy.jpg"
            alt="work Experience image 1"
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of Nothing</h4>
            <p className='font-bold text-2xl mt-1'>Lorem Ipsum</p>
            <div className='flex space-x-2 my-2'>
                <img src="" alt="" />
                {/* Tech used */}
                {/* Tech used */}
                {/* Tech used */}
            </div>

            <p>Started Work... - Ended...</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary point</li>
                <li>Summary point</li>
                <li>Summary point</li>
                <li>Summary point</li>
                <li>Summary point</li>
            </ul>
        </div>
    </article>
    );
};

export default ExperienceCard;