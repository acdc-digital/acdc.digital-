"use client";
import { DrizzleChat } from "@/lib/db/schema";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { User, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import FileUpload from "./FileUpload";

type Props = {
  chats: DrizzleChat[];
  chatId: number;
  isPro?: boolean,
};

const ChatSideBar = ({ chats, chatId, isPro }: Props) => {
  return (
    <div className="w-full h-screen flex flex-col p-4 text-gray-200 bg-[#323232]">
      {/* Mini Navbar */}
      <div className="flex justify-between mb-2">
        <div className="flex">
          <Link href="/">
            <Home className="w-6 h-6 text-white cursor-pointer" />
          </Link>
          {/* Commented out the account link and icon */}
          {/* 
          <Link href="/user-account">
            <User className="w-6 h-6 text-white cursor-pointer ml-4" />
          </Link> */}
        </div>
      </div>
      <hr className="mb-4 border-t border-white"/>
      {/* File Upload Component */}
      <FileUpload />
      {/* Chat List */}
      <div className="flex flex-col gap-1 mt-0 overflow-scroll flex-grow">
        {chats.map((chat) => (
          <Link key={chat.id} href={`/chat/${chat.id}`}>
            <div
              className={cn("rounded-lg p-2 text-slate-200 flex items-center cursor-pointer", {
                "border border-white": chat.id === chatId,
                "hover:text-white": chat.id !== chatId,
              })}
            >
              <div className={cn("mr-2 w-4 h-4 rounded-full", {
                "border border-white border-opacity-50": chat.id !== chatId,
                "bg-white": chat.id === chatId
              })}></div>
              <p className="w-full text-sm truncate whitespace-nowrap text-ellipsis">
                {chat.pdfName}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/* Help Documentation Button */}
      <div className="w-full pt-4">
        <hr className="mb-4 border-t border-white"/>
        <Link href="/help">
          <Button className="w-full border-solid bg-[#323232] border-white border cursor-pointer">
            Help Documentation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ChatSideBar;
