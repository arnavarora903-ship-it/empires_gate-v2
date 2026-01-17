import {Inter} from 'next/font/google';
export const inter = Inter({subsets:['latin'], variable:"--font-inter"});
import {Roboto} from 'next/font/google';
export const roboto = Roboto({subsets: ['latin'], weight:['700']});
import {Creepster} from 'next/font/google';
export const creepster = Creepster({subsets: ['latin'], weight:['400'], variable:"--font-creepster"});
import {Lusitana} from 'next/font/google';
export const lusitana = Lusitana({subsets:['latin'],weight:['400','700'],variable:"--font-lusitana"});
/*This file has to export these constants like inter and roboto for other files to
import them.*/  