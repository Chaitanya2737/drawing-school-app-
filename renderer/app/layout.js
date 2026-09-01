import './globals.css';
import  { Metadata } from 'next';

export const metadata = {
  title: 'Drawing School Desk',
  description: 'Local front-desk manager',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}