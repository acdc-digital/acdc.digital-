// Navbar.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserButton, useUser } from "@clerk/nextjs";
import 'dotenv/config';

const Navbar = () => {
  const { user } = useUser(); // Get the user object

  // Assume chatId is 1 for demonstration; replace with actual logic
  const chatId = 1; // You can dynamically fetch this based on user's chat history

  return (
    <div>
      {/* New Row Above Navbar */}
      <div className="bg-[#E9E9E5] text-black p-1 text-left ml-40 border-b-1 border-black">
        Ⓒ ACDC.digital 2021 - 2023:  Atlantic Canadas Digital Consultants
      </div>
      {/* Navbar */}
      <nav className="bg-black text-white p-3 border-b border-black">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center pl-20">
            <Link href="/" passHref>
              <div className="text-xl font-semibold rounded-3xl border border-white px-6 py-1 cursor-pointer">
                ACDC.digital
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-xl">
            <Link href="/sign-in" passHref>
              <div className="ml-5 text-xl rounded-3xl bg-white text-black font-semibold border border-white px-7 py-1 cursor-pointer login-hover">
                Login
              </div>
            </Link>
            <Link href="/sign-up" passHref>
              <div className="ml-5 text-xl rounded-3xl border border-white px-7 py-1 cursor-pointer signup-hover">
                Sign-Up
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Additional Rows */}
      <div className="bg-[#646464] p-2 border-b border-black">
        <div className="mx-0">
          {/* Content for the first additional row */}
        </div>
      </div>
      
      <div className="bg-[#848484] p-2 border-b border-black pl-20 flex justify-between items-center pr-20">
        <div></div> {/* Empty div to take up space */}
        <div className="flex items-center space-x-4">
          <div className="chip">
            Start chatting with your documents. Now.
          </div>
          {user && (
            <Link href={`/chat/${chatId}`} passHref>
            <div className="chip chip-hover cursor-pointer">
              Go to Chats!
            </div>
          </Link>
          )}
          <div className={user ? "border border-white rounded-full" : ""}>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style tsx>{`
        .custom-hover:hover::after {
          content: "";
          display: block;
          margin: auto;
          height: 1px;
          width: 95%;
          background-color: white;
        }
        .login-hover:hover {
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
        }
        .signup-hover:hover {
          background-color: rgba(255, 255, 255, 0.7);
          color: white;
        }
        .chip {
          display: inline-block;
          padding: 1px 20px;
          margin: 2px auto;
          border-radius: 25px;
          background-color: #848484;
          color: white;
          max-width: 100%;
          text-align: left;
          border: 1px solid white;
        }
        .chip-hover:hover {
          background-color: rgba(255, 255, 255, 0.7);
          color: white;
        }        
      `}</style>
    </div>
  );
};

export default Navbar;


