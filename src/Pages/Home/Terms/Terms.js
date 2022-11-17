import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const Terms = () => {
    return (
        <div className="hero px-8">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="w-2/5 rounded-lg" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>Treatment</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Terms;