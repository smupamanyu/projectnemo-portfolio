import React from "react";

const About = () => {
  return (
        <section
        id="about" // This gives the About section an ID
        className="relative bg-gradient-to-r from-gray-100 to-gray-300 py-24 px-8"
        >
        {/* Background blob */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 opacity-30 blur-xl -z-10"></div>

        <div className="flex flex-col items-center text-center space-y-6">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">
            About Me
            </h2>

            {/* Portrait */}
            <div className="flex justify-center items-center mt-6">
            <img
                src="/me.jpg"
                alt="Your Portrait"
                className="w-36 h-36 object-cover rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            />
            </div>

            {/* Text description */}
            <div className="max-w-3xl text-lg text-gray-600">
            <p>
                Hey, I am Nemo
            </p>

            <p className="mt-4">
            I believe we all have a reason, and I believe mine is to share what I cherish
            with the entire world, for I think that is the only way to live a life of purpose
            </p>
            </div>

            {/* Animated Call-to-Action */}
            <a
            href="#about" // This should now point to the About section
            className="mt-8 px-6 py-3 text-white bg-pink-600 rounded-full hover:bg-pink-700 transition"
            >
            Explore My Work
            </a>
        </div>
        </section>

  );
};

export default About;
