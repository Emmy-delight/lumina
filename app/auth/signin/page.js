import Link from "next/link";
import { FaGoogle } from "react-icons/fa";


export default function Signin () {
    return (
         <main className="min-h-[520px] flex justify-center bg-gray-300 py-8 px-2 ">
           <article>
                <div className="w-full md:w-[24em]  rounded-md bg-white p-4">
                   <h1 className="text-2xl mb-2">Sign into Lumina</h1>
                    <p className="text-sm text-gray-600 mb-4">Sign into using.....</p>
                
                <form className="mb-2">
                   <button type="submit"
                   className="w-full h-[3.2em] flex justify-center items-center gap-2 border-b-2 border-blue-500 bg-black rounded-md">
                        <FaGoogle  className="text-green-500 text-2xl"/>
                         <span className="text-white text-lg">Google account</span>
                   </button>
                </form>
                  <p className="text-gray-600 text-xs">By clicking on the signin button you confirm that you have read and agree with our {""}
                    <Link href="#" className="text-gray-800 underline">Terms of use</Link>{""} and {""}
                     <Link href="#" className="text-gray-800 underline">Privacy policy</Link>
                  </p>
                </div>
           </article>
         </main>
    )
}