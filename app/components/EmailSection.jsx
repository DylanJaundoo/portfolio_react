"use client"
import React, {useState} from 'react';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        };

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data/message.
          method: "POST",
          // Tell the server we're sending JSON.
          headers: {
            "Content-Type": "application/json",
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
        const resData = await response.json();
    
        if (response.status === 200) {
          console.log("Message sent.");
          setEmailSubmitted(true);
        }
      };

  return (
    <section  id="contact" className='grid md: grid-cols-2 my-12 py-24 gap-4 relative'>
         <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
          from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className='z-10'>
            <h3 className='text-xl font-bold text-white my-2'>Lets Connect!</h3>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>{" "}
                Please feel free to contact me regarding more information. 
                I am always open to new oppritunities. 
            </p>
            <div className='flex flex-row gap-2'>
                <Link href="https://github.com/DylanJaundoo" target="_ blank">
                <Image 
                src={GithubIcon}
                alt='Github Icon'
                />
                </Link>

                <Link href="https://www.linkedin.com/in/dylan-jaundoo-822b68212/" target="_ blank">
                <Image 
                src={LinkedinIcon}
                alt='LinkedIn Icon'
                />
                </Link>
            </div>
        </div>

        <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label htmlFor="email" type="email" className='text-white  text-sm font-medium'>Your Email</label>
                <input name="email" type="email" id='email' required placeholder='youremail@gmail.com' className='bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2 ' />

                <label htmlFor="subject" type="text" className='text-white  text-sm font-medium'> Subject</label>
                <input name="subject" type="text" id='subject' required placeholder='Subject' className='bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2 '/>        
            <div>
                <label htmlFor="message" type="text" className='text-white mb-1 text-sm font-medium'> Message</label>
                <textarea name="message" id="message" placeholder='Type your message here...' className='bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2 ' ></textarea>    

             </div>
                <button type='submit' className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-5 rounded-lg w-full '>
                    Send Message
                </button>
                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email Sent!
                        </p>
                    )
                }
            </form>
        </div>
    </section>
  )
}

export default EmailSection
