import Link from 'next/link';
import { Button } from '@/components/ui/button'; // optional, if you use shadcn/ui

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center 
        dark:bg-black ">
      <h1 className="mb-4 text-9xl font-bold text-gray-900 dark:text-gray-50 tracking-widest">404</h1>
      <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
        Oops! Seems like you've ventured off the beaten path.
      </p>

      <Link href="/">
        <Button className='bg-black dark:bg-white dark:text-black cursor-pointer'>Back to Home</Button>
      </Link>
    </div>
  );
}