import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import ScrollDownArrow from "../ScrollingDown/ScrollDownArrow";

export default function HeroSection() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          "service_u0e6rrn", // Service ID
          "template_ctk2p65", // Template ID
          form.current, // Form Reference
          "UANiDaV9CE5zcmzkX" // Public Key
        );

        // Display toast notification
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        // Clear form inputs
        form.current.reset();

        // Hide the success message after 5 seconds
      } catch (error) {
        toast.error("❌ Failed to send the message. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
    }
  };

  return (
    <div>
      {/* Toast Container */}
      <ToastContainer />

      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideRight {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-top {
          animation: slideLeft 1.5s ease-out;
        }
        .animate-bottom {
          animation: slideRight 1.5s ease-out;
        }
      `}</style>

      <section className="pt-20 pb-10 md:pb-0 md:pt-0 flex items-center justify-center md:p-3 lg:p-8">
        <div className="flex flex-col gap-2 lg:gap-0 items-center justify-center md:flex-row max-w-5xl mx-auto w-full text-white md:pt-20 lg:pt-0 md:px-10 lg:px-0">
          {/* Left Section */}
          <div className="flex-1 mb-8 md:mb-0 animate-bottom">
            <h1 className="text-3xl mx-5 md:mx-0 md:text-4xl lg:text-5xl text-center md:text-start font-bold">
              Bring Your Tech Ideas into Reality.
            </h1>
            <p className="mt-2 md:mt-4 text-sm md:text-xl text-center md:text-start md:max-w-md md:px-0 px-7 py-2">
              <span className="font-semibold text-xl">
                Your Vision, Our Expertise
              </span>{" "}
              — CoderMat connects your vision with expert web development
              solutions, driving project success through innovation, precision,
              and collaboration.
            </p>
            <div className="flex md:justify-start justify-center">
              <Link href={"/services"}>
                <button className="border-2 gap-2 border-[#7272723c] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 py-2 rounded-md mt-5 bottom-5">
                  Our Services
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex justify-center items-center relative animate-top">
            {/* Back Rotated Card */}
            <div className="md:h-[450px] lg:h-[530px] md:w-[320px] lg:w-[390px] absolute bg-gradient-to-br from-[#350da5] via-[#7b0ea0] to-[#99058d] rounded-3xl transform -rotate-12 opacity-75 hidden lg:block"></div>

            {/* Front Static Card */}
            <div className=" relative bg-gradient-to-br from-[#350da5] via-[#7b0ea0] to-[#99058d] opacity-80 p-8 rounded-3xl shadow-lg w-[330px] md:h-[500px] lg:h-[530px] md:w-[340px] lg:w-[390px] max-w-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Let’s start a <br /> Project Together
              </h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    className="w-full py-2 px-4 rounded-md bg-white bg-opacity-20 border border-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#c445ff]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    className="w-full py-2 px-4 rounded-md bg-white bg-opacity-20 border border-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#c445ff]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="user_number"
                    placeholder="Number"
                    className="w-full py-2 px-4 rounded-md bg-white bg-opacity-20 border border-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#c445ff]"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Describe Your Project Need."
                    className="w-full py-2 px-4 rounded-md bg-white resize-none bg-opacity-20 border border-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#c445ff] h-32"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 border-2 gap-2 border-[#ffffff] hover:bg-gradient-to-l from-[#49156D] to-[#49165C] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 py-2 rounded-md bottom-[13px] md:absolute lg:static"
                >
                  Let’s Talk
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ScrollDownArrow></ScrollDownArrow>

      <Image
        className="w-full"
        src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
        alt=""
        layout="responsive"
        width={1200}
        height={800}
      />
    </div>
  );
}
