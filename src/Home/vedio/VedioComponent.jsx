import React from 'react';

const VedioComponent = () => {
    return (
        <div>
        <iframe
         className='w-full'
          height="400"
          src="https://www.youtube.com/embed/ruX4Le0kBng?si=YGDX6710DkOZ0OCd"  
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
};

export default VedioComponent;