// import Link from 'next/link'
// import React from 'react'
// import { FaXTwitter } from "react-icons/fa6";
// import { CiYoutube } from "react-icons/ci";
// import { FaTiktok } from "react-icons/fa";

// const year = new Date().getFullYear()

// function Footer() {
//   return (
//     <main className="grid grid-cols-1 gap-4  lg:gap-0 lg:grid-cols-3 py-4 px-2 md:px-8 lg:px-16">
//         <div>
//             <p className='text-2xl text-gray-800 font-bold'>Lumina</p>
//             <p className=''>&copy;{year} Lumina blog</p>
//         </div>
//         <div>
//             <p className='text-md text-gray-700'>Head office</p>
//             <p className='text-md text-gray-700'>Ladoke Akintola street,Victoria Island, Lagos</p>
//         </div>
//         <div>
//             <ul className='flex justify-end items-center gap-4'>
//                 <li><Link href="#"><FaXTwitter className='text-md'/></Link></li>
//                 <li><Link href="#"><CiYoutube className='text-md'/></Link></li>
//                 <li><Link href="#"><FaTiktok className='text-md'/></Link></li>
                
//             </ul>
//             <ul className='flex lg:justify-end items-center gap-4'>
//                <li><Link href="#" className='text-sm text-gray-600'>Terms of use</Link></li>
//                <li><Link href="#" className='text-sm text-gray-600'>Privacy Policy</Link></li>
//                <li><Link href="#" className='text-sm text-gray-600'>Bug bounty</Link></li>
//             </ul>
//         </div>

//     </main>
//   )
// }

// export default Footer
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

const year = new Date().getFullYear();

function Footer() {
  return (
    <main className="grid grid-cols-1 gap-4  lg:gap-0 lg:grid-cols-3 py-4 px-2 md:px-8 lg:px-16">
      <div>
        <p className="text-2xl text-gray-800 font-bold max-md:text-center">
          Lumina
        </p>
      </div>
      <div>
        <p className="text-md text-gray-700 text-center">Head office</p>
        <p className="text-md text-gray-700 text-center">
          Ladoke Akintola street,Victoria Island, Lagos
        </p>
      </div>
      <div>
        <ul className="flex justify-center max-md:py-3 items-center gap-4 lg:mb-2">
          <li>
            <Link href="#">
              <FaXTwitter className="text-md" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <CiYoutube className="text-md" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaTiktok className="text-md" />
            </Link>
          </li>
        </ul>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link href="#" className="text-sm text-gray-600">
              Terms of use
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm text-gray-600">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm text-gray-600">
              Bug bounty
            </Link>
          </li>
        </ul>
      </div>

      <p className="text-xs lg:text-sm max-md:text-center text-gray-500">&copy;{year} Lumina blog</p>
    </main>
  );
}

export default Footer;