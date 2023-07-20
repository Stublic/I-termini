'use client';
import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share Ai prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>

       <body>
               {children}
 
      </body>

   
  </html>
);

export default RootLayout;
