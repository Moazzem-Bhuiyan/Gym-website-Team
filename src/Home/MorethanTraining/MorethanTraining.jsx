import t1 from '../../assets/t1.jpg'
import t2 from '../../assets/t2.jpg'

const MorethanTraining = () => {
    return (

        <div className='my-20 grid grid-cols-5 relative '>



            <div className='  col-span-2 p-10 '>

            <div className='grid grid-cols-2 gap-10 absolute w-[750px] m-auto -mt-[60px] p-2'>
            <div><img src={t1} alt="" /></div>

          <div className=''><img className='' src={t2} alt="" /></div>

            </div>

            </div>












            <div className='bg-gray-100 p-10 py-20 space-y-8 col-span-3 px-40'>

                <h1 className=' uppercase font-bold'>more than training </h1>

                <h1 className='text-6xl font-bold'>Compete in our <br /> sporting events</h1>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Facere aspernatur dicta porro architecto voluptas repudiandae consectetur .

                </p>

                <button className='bg-red-500 text-white font-bold px-10 py-3'>About Us</button>

            </div>

         

            
        </div>
    );
};

export default MorethanTraining;