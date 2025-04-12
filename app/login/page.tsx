import Link from 'next/link'
import { login} from './actions'
import { Suspense } from 'react'
import Footer from '../conponents/subFooter'
import SubHeader from '../conponents/subHeader'




export default function LoginPage() {

  return (

        <section> 

         <Suspense fallback={<div className="relative flex justify-center my-52 items-center">
         <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
         <img src="/Logo.png"  className="rounded-full h-28 w-28"/>
     </div>}>
     <SubHeader/>
     <br/>
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
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Login 
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  minLength={6}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                formAction={login}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
             Login In
              </button>
            </div>
            <div className="mt-6 text-center text-sm text-slate-600">
                    Don't have an account?
                    <Link href="/signUp" className="font-medium text-[#4285f4]">Sign Up </Link>
                </div>
            
          </form>
        </div>
      </div>
   
    </div>
    </Suspense>
    <Footer/>
    </section>
  )
}



