import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {

    const Loadservice = useLoaderData();

    const {id}= useParams()

    const idnt = parseInt(id)

    const service = Loadservice.find(item=> item.id === idnt)


    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  
  };

    return (
        <div>

            <h1 className="text-center my-20 text-5xl font-bold">{service.title}</h1>

            <div className="grid grid-cols-4 ">

                <div className=" col-span-3 p-10">

                    <img className="w-[800px] m-auto " src={service.img} alt="" />

                    <p className=" text-lg text-gray-400 font-semibold mt-10">{service.description}</p>

                    <div className="image-gallery mt-10 grid grid-cols-2 ">
                        {service.imageGallery && service.imageGallery.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.url} alt={image.caption} className="w-[400px] m-auto" />
                                <p className="text-lg font-bold text-gray-900 text-center mt-2">{image.caption}</p>
                            </div>
                        ))}
                    </div>
                        
                    <p className=" text-lg text-gray-400 font-semibold mt-10">{service.description}</p>


                    <div className="mt-4">
                        <h3 className="font-bold">{service.video.title}</h3>
                        <iframe
                            width="560"
                            height="315"
                            src={service.video.url}
                            title={service.video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full"
                        ></iframe>
                        <p className="mt-2">{service.video.description}</p>

                        <p>{service.highlights}</p>
                    </div>


                </div>


                <div className="py-10 ">

                    <h1 className="text-2xl font-bold">Get In Touch </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="mt-1 p-2  border-b-2 border-gray-300 outline-none w-full bg-white"
          type="text"
        />
        {errors.name && <span className="text-red-600">{errors.name.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
        
          id="email"
          {...register('email', { 
            required: 'Email is required', 
            pattern: { 
              value: /^\S+@\S+$/i, 
              message: 'Invalid email address' 
            }
          })}
          className="mt-1 p-2 border-b-2 border-gray-300 outline-none w-full bg-white"
          type="email"
        />
        {errors.email && <span className="text-red-600">{errors.email.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          className="mt-1 p-2  border-b-2 border-gray-300 outline-none w-full bg-white"
          rows="4"
        />
        {errors.message && <span className="text-red-600">{errors.message.message}</span>}
      </div>

      <button type="submit" className="bg-orange-400 px-10 py-3 text-white text-xl font-bold">Get In Touch </button>
    </form>


                </div>
            </div>
           
            
        </div>
    );
};

export default ServiceDetails;