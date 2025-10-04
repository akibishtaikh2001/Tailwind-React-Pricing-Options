import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
  const {name, price, description, features} = pricing;
    return (
        <div className=' flex flex-col  border h-full bg-amber-200 rounded-3xl p-4'>
            {/* { Card header } */}
            <div>
                <h1 className="2xl:text-4xl md:text-3xl text-xl "> {name} </h1>
                <h4 className="text-lg md:text-2xl 2xl:text-3xl"> {price} </h4>
            </div>
            {/* Card body */}
            <div className=' bg-teal-400 p-4 rounded-2xl mt-10 flex-1 '>
                <p> {description} </p>
                {
                    features.map((feature, index) => <PricingFeature
                    key={index}
                     feature={feature}></PricingFeature> )
                }
            </div>
            <button className="btn w-full mt-4 ">Subscribe</button>
        </div>
    );
};

export default PricingCard;