import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
     <header className='bg-slate-800 mb-10 '>
      <nav className=' p-8 container flex items-center text-sm font-medium tracking-wider uppercase text-white mx-auto'>
        <ul className='flex justify-center gap-8'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/posts'>Blog</Link>
          </li>
        </ul>
     
      </nav>
    </header>
  );

 

  return (
    <html>
      <head />
      <body>
        <div className="mr-auto  max-w-10xl px-6">
          {header}
          {children}
          
        </div>
      </body>
    </html>
  );
}
