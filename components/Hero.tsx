export default function Hero() {
    return (
      <section className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-beige-100 to-red-200 text-red-800 font-cormorant">
        <h1 className="text-6xl md:text-8xl font-bold">Hello, I’m Nemo</h1>
        <p className="mt-4 text-lg font-poppins text-red-700">Here we go</p>
        <a href="#about" className="mt-10 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all">
          Enter Portfolio ↓
        </a>
      </section>
    );
  }
  