import React from 'react';

type Props = {};

export default function Work2({ }: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#2F2F2F] p-10 hover:opacity-100 opacity-20 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <img
                className=" rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/cgvpchawoncskldoaqeu"
                alt=""
            />
            <div className=" px-10 md:px-10">
                <h4 className=" text-4xl font-light">OpenMarket</h4>
                <p className=" font-semibold text-2xl mt-1">
                    Head of Strategic Partnerships
                </p>
                <div className=" flex space-x-2 my-2">
                    <img
                        className=" h-10 w-10"
                        src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge-practico-next-js--cb0ccb8f-efa3-40a8-b91f-8cf5a4d51eeb.png"
                        alt=""
                    />
                    <img
                        className="h-10 w-10"
                        src="https://i.pinimg.com/736x/59/04/a5/5904a564eede286fd95e0adfa5b39cb7--d-icons-flat-icons.jpg"
                        alt=""
                    />
                    <img
                        className="h-10 w-10"
                        src="https://dczvtk204qxa5.cloudfront.net/wp-content/uploads/2015/11/DHF_BadgesWordpress.png"
                        alt=""
                    />
                    {/* list of stuff here */}
                    {/* list of stuff here */}
                    {/* list of stuff here */}
                </div>
                <p className=" text-gray-300 uppercase py-5">started ... ended ...</p>
                <ul className=" list-disc space-y-4 text-lg">
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                </ul>
            </div>
        </article>
    );
}