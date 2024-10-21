import React from 'react';
import Hero from '../Hero/Hero';
import HomeAbout from '../HomeAbout/HomeAbout';
import WeDo from '../WhatWeDo/WeDo';
import Chosse from '../WhyChosse us/Chosse';
import VedioComponent from '../vedio/VedioComponent';
import ServiceHome from '../ServiceHome/ServiceHome';
import WhatWeOffer from '../WhatWeoffer/WhatWeOffer';
import MorethanTraining from '../MorethanTraining/MorethanTraining';


const Home = () => {
    return (
        <div>
            I am Main Home Secton There are my child 
            <Hero></Hero>
            <WeDo></WeDo>
            <ServiceHome></ServiceHome>
            <Chosse></Chosse>
            <VedioComponent></VedioComponent>
            <WhatWeOffer></WhatWeOffer>
            <MorethanTraining></MorethanTraining>

          
            
        </div>
    );
};

export default Home;