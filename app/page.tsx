import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from "./page.module.css";
import Image from 'next/image';
import fashion from '@/app/ui/home.module.css';
import {roboto} from '@/app/ui/fonts';
import {creepster} from '@/app/ui/fonts';
import {lusitana} from '@/app/ui/fonts';

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <Image 
//       src='/hero-desktop.png' /* ./ this means use relative path ( start from current file), here since we are using png from public folder thus use / ( this means start from the root and in this public folder 👍*/
//       alt = 'Hero Image ⚔️'
//       height = {1000}
//       width={800}
//       className="mx-auto mb-8 rounded-lg shadow-lg hidden md:block" /* this is hidden for below md size (768px) and visible for above. There are many more sizes like md avaiabile in tailwind */
//       />
//        <Image
//         src="/hero-mobile.png"
//         width={560}
//         height={620}
//         className="block md:hidden" /* this is only visible below md size (768px) and hidden for above. There are many more sizes like md avaiabile in tailwind */
//         alt="Screenshot of the dashboard project showing mobile version"
//       />
//       <h1 className={styles.title}>
//         Welcome to Empire's Gate

//       </h1>
//       <p className="mt-4 text-lg text-gray-700">
//         This is our homepage.
//       </p>
//       <Link href='/about'>Go to our about page</Link>
     
//     </div>
//   );
// }

export default function Page() {
   return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        { <AcmeLogo /> }
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}>{/*here in className using quotations will not work as we are using JavaScript varialbe inside so we have to use Backticks */}
            <strong>Welcome to Acme.</strong> This is the example for the 
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12"> {/*The image is at that particular postion because of this classname*/}
      {/* Add Hero Images Here */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
      </div>
      </div>
      
    </main>
  );
}

