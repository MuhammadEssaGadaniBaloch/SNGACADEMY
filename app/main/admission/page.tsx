"use client"
import { createClient } from '@/app/utils/supabase/client';
import Link from 'next/link';
import toast from 'react-hot-toast';

const AdmissionForm: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const supabase = createClient();
    const formData = new FormData(e.currentTarget);
    const formEntries = Object.fromEntries(formData.entries());
    const { Name, Father, Email, Number,CNIC, Birth,City, Course, Qaulification,Picture} = formEntries;

    // Check if the user is already registered
    const { data: existingUser, error: userError } = await supabase
      .from('Admission_Table')
      .select('*')
      .eq('CNIC', CNIC);

    if (userError) {
      toast.error('Error checking user existence. Please try again.');
      console.error('Supabase error:', userError);
      return; // Exit the function to prevent further execution
    }

    if (existingUser && existingUser.length > 0) {
      toast.error('User with this CNIC already exists.');
      return; // Exit the function if user already exists
    }
    const { data, error } = await supabase
    .from('Admission_Table')
    .insert([
      {
        Name: Name,
        Father: Father,
        Email: Email,
        Number: Number,
        CNIC: CNIC,
        Birth:Birth,
        City: City,
        Course:Course,
        Qaulification: Qaulification, 
        Picture:Picture,
        
      
      },
     
    ])
    .select()
            
    
    if (error) {
      toast.error('Failed to submit the form. Please try again.');
      console.log(error)
    } else {
      toast.success('Form submitted successfully!');
      console.log(data)
    };

    
  
  };

  

  return (
    
    <div>
      <br />
      <br />
      <br />

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <img
              src="/logo1.jpg"
              alt="School Logo"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          Student Course Registration Form
          </h2>
          
          
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <div className="mt-1">
                  <input
                    id="Name"
                    name="Name"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Father" className="block text-sm font-medium text-gray-700">
                  Father's Name *
                </label>
                <div className="mt-1">
                  <input
                    id="Father"
                    name="Father"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  Email address *
                </label>
                <div className="mt-1">
                  <input
                    id="Email"
                    name="Email"
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="CNIC" className="block text-sm font-medium text-gray-700">
                  CNIC / B-Form *
                </label>
                <div className="mt-1">
                  <input
                    id="CNIC"
                    name="CNIC"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Number" className="block text-sm font-medium text-gray-700">
                  Number *
                </label>
                <div className="mt-1">
                  <input
                    id="Number"
                    name="Number"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            
              <div>
                <label htmlFor="Birth" className="block text-sm font-medium text-gray-700">
                  Date of Birth *
                </label>
                <div className="mt-1">
                  <input
                    id="Birth"
                    name="Birth"
                    type="date"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            
             

              <div>
                <label htmlFor="City" className="block text-sm font-medium text-gray-700">
                  City *
                </label>
                <div className="mt-1">
                  <input
                    id="City"
                    name="City"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Qaulification" className="block text-sm font-medium text-gray-700">
                  Courses *
                </label>
                <div className="mt-1">
                <select id="Course"
                    name="Course"
                    required  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option >Select Course</option>
              <option value="English Grammar">English Grammar</option>
           <option value="Basic Mathematics">Basic Mathematics</option>
         <option value="Basic Scienece">Basic Scienece</option>     
        </select>                  
                </div>
              </div>
              <div>
                <label htmlFor="Qualification" className="block text-sm font-medium text-gray-700">
                Qualification *
                </label>
                <div className="mt-1">
                <select id="Qaulification"
                    name="Qaulification"
                    required  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Qaulification</option>
                  <option value="Other">Other</option>
              <option value="Class 5th">Class 5th</option>
           <option value="Class 6th">Class 6th</option>
         <option value="Class 7th">Class 7th</option>
         <option value="Class 8th">Class 8th</option>
         <option value="Class 9th">Class 9th</option>
         <option value="Class 8th">Class 8th</option>
         <option value="Class 9th">Class 9th</option>
         <option value="Matriculation">Matriculation</option>
         <option value="Intermediate">Intermediate</option>
         
        </select>                  
                </div>
              </div>

              <div>
                <label htmlFor="Picture" className="block text-sm font-medium text-gray-700">
                  Upload Picture *
                </label>
                <div className="mt-1">
                  <input
                    id="Picture "
                    name="Picture"
                    type="file"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
          
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              
                >
                  Submit
                </button>
              </div>
               <div className="mt-6 text-center text-sm text-slate-600">
               Already applied? 
                                  <Link href="/main/generateCard" className="font-medium text-[#4285f4]">Get Admit Card</Link>
                              </div>
              
            </form>
          </div>
        </div>
      </div>
      </div>
     
  );
};

export default AdmissionForm;