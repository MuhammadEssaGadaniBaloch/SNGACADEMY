
import Image from 'next/image';


export default function About() {
  return (
    <>
    <br/>
    <br/>
    <br/>
  
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-800 text-white py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="mt-4 text-xl">
              Discover our inspiring faculty and the enduring legacy of Shaheed Nasrullah Gadani.
            </p>
          </div>
        </div>

        {/* Tribute Section */}
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
         
            <div className="md:w-1/2">
              <Image
                src="/Journalist-Nasrullah-Gadani.jpg" // Replace with your image path
                alt="Shaheed Nasrullah Gadani"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Tribute to Shaheed Nasrullah Gadani
              </h2>
              <p className="mt-4 text-gray-700 text-lg">
                Shaheed Nasrullah Gadani was a visionary leader whose dedication and sacrifice continue to inspire our community. His commitment to education, social justice, and community service has left an indelible mark on our institution. Today, his legacy guides our pursuit of excellence and our commitment to nurturing future leaders.
              </p>
            </div>
   
        </div>

        {/* Faculty Members Section */}
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Faculty Member 1 */}
       
           
              <div className="w-32 h-32 relative">
                <Image
                  src="/Director.jpg" // Replace with your image path
                  alt="Mr Abdul Manan Gadani,"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h3 className="text-2xl font-semibold text-gray-800">Mr. Abdul Manan Gadani</h3> 
                <p className="mt-2 text-gray-600">
                Mr. Abdul Manan Gadani is currently serving as Primary School Teacher (BPS-14) in School Education & Literacy Department, Government of Sindh, in District Ghotki @ Mirpur Mathelo Division Sukkur. Sir Abdul Manan has a vast academic and administrative experience under various capacities in teaching students of different classes. Sir Abdul Manan has completed his Bachelors in Science from Shah Abdul Latif University (SALU), Khairpur in year 2014. Afterwards, in the year 2016, he has been appointed as Police Constable (BPS-7) in Department of Sindh Police, after service for about 7 years in Police Department as Data entry Operator, he has qualified written test for Primary School Teacher (PST BPS-14) and Junior Elementary School Teacher (JEST BPS-14)  conducted by IBA, Sukkur in year 2021, thereafter he has been appointed as PST in School Education & Literacy Department, Government of Sindh, now aspirant for JEST-BPS-14 too. 

Sir Abdul Manan is also doing Masters in Islamic Culture from University of Shah Abdul Latif, (SALU), Khairpur. He has a vast experience of serving as Teacher and Tutor since year 2014  till today of different subjects including  English, Mathematics, General Science, Islamic Studies and Sindhi, he is also a fluent speaker of English, Urdu, Balochi and Sindhi Languages. 

Sir Abdul Manan is now Director of his own renowned academy titled as "Shaheed Nasrullah Gadani,(SNG) Academy" at District Ghotki where dozens of orphan and poor background students are learning free of cost on need based scholarship.

This academy is a great tribute to Martyred Journalist Nasrullah Gadani , who was brutally  murdered due to just and fair journalism who raised his voice against the gangs, mafias, white collar criminals and so called feudals; in favour of innocents, lower class community and for common man beyond the cast, creed, color and religion.
May his sole rest in peace.
                </p>
              </div>
            

            {/* Faculty Member 2 */}
          
       
              <div className="w-32 h-32 relative">
                <Image
                  src="/Profile.jpg" // Replace with your image path
                  alt="Mr. Muhammad Essa Gadani"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h3 className="text-2xl font-semibold text-gray-800">Eng Mir, Muhammad Essa Gadani Gadani </h3>
                <p className="mt-2 text-gray-600">
                Mr. Muhammad Essa! Being an administrator at Shaheed Nasrullah Gadani Academy must involve managing a range of automation tools and administrative processes. Are you looking to develop new automation strategies for the academy or enhance existing systems?
                </p>
              </div>
           

            {/* Faculty Member 3 */}
       
            <div className="w-32 h-32 relative">
                <Image
                  src="/" // Replace with your image path
                  alt="i"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h3 className="text-2xl font-semibold text-gray-800"></h3>
                <p className="mt-2 text-gray-600">
                 
                </p>
              </div>
          </div>
        </div>

      
       
      </div>
    </>
  );
}
