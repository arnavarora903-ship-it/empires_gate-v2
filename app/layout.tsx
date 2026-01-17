import '@/app/ui/global.css';

import {inter} from '@/app/ui/fonts';
import navLinks from '@/app/ui/dashboard/nav-links';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={/*here the inter variable is the javascript/typescript variable */ 
        `${inter.variable}font-sans`
        /*this injects the primary font in the body elements so that 
        they are available through out the app but it is not what is applying 
        that as font-primary */}>
      {children}
      </body>
    </html>
  );
}
