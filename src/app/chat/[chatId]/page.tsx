import ChatComponent from "@/components/ChatComponent";
import ChatSideBar from "@/components/ChatSideBar";
import PDFViewer from "@/components/PDFViewer";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { auth, authMiddleware } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    chatId: string;
    isPro?: boolean,
  };
};

const ChatPage = async ({ params: { chatId } }: Props) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/sign-in");
  }

  const _chats = await db.select().from(chats).where(eq(chats.userId, userId));

  // Initialize currentChat to null, so it will be null if no chats are found
  let currentChat = null;

  // If chats exist for the user, find the one with the given chatId
  if (_chats && _chats.length > 0) {
    currentChat = _chats.find((chat) => chat.id === parseInt(chatId));
  }

  return (
    <div className="flex flex-col max-h-screen overflow-scroll bg-[#323232]">
      <div className="flex w-full max-h-screen overflow-scroll">
        {/* chat sidebar */}
        <div className="w-1/4 max-h-screen overflow-scroll">
          <ChatSideBar chats={_chats || []} chatId={parseInt(chatId)} />
        </div>
        {/* pdf viewer */}
        <div className="max-h-screen mt-6 pb-5 overflow-scroll flex-[5]">
          <PDFViewer pdf_url={currentChat?.pdfUrl || ""} />
        </div>
        {/* chat component */}
        <div className="flex-[3] pt-3">
          <ChatComponent chatId={parseInt(chatId)} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
