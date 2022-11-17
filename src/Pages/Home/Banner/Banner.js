import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const Banner = () => {
    return (
        <div className="hero px-8">
            <div className="hero-content flex-col lg:flex-row-reverse bg-[url('/src/assets/images/bg.png')] pb-40">
                <img src={chair} className="w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;