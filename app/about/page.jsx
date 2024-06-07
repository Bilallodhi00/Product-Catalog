// Import necessary libraries and components
import React from 'react';
import Link from 'next/link';

// Import DetailAboutUs component


// Define your About component
export default function About() {
  return (
    <>
       <div className="bg-gradient-to-b from-[#827191] to-black h-screen flex flex-col  items-center">
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-8 mt-10">About Us</h1>
     
        <p className="pt-6  text-lg text-white mb-8">
          Hello {':)'}
          <br />
          We are a Fintech Company committed to promoting financial literacy and empowering individuals to make informed decisions. Our mobile and web application allows users to track their investments. With a team of investors, financial analysts, and instructors, we conduct training workshops and educational programs.
          Subscribe to our Youtube Podcast Channel:  
          <br />
   
          <a href="https://www.youtube.com/@Sarmaayapk" target="_blank" rel="noopener noreferrer">www.youtube.com/@Sarmaayapk</a>

        </p>
      </div>
    </div>
       
    </>
  )

}
