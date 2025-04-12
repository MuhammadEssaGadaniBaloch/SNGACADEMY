import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative h-screen ">
      <div className="absolute inset-0 ">
        <Image
          src="/Journalist-Nasrullah-Gadani.jpg" // Add your school image to public folder
          alt="Shaheed Nasrullah Gadani Academy"
          fill
          className="object-cover object-center my-12" 
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-2xl md:text-5xl font-bold mb-6">
          Welcome to Shaheed Nasrullah Gadani Academy
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Empowering students with quality education and strong values. We focus on academic excellence, character development, and creating future leaders.
        </p>

        <Link 
          href="/main/admission"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
