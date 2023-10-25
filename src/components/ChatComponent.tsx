"use client";
import React from "react";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import MessageList from "./MessageList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Message } from "ai";

type Props = { chatId: number };

const ChatComponent = ({ chatId }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      const response = await axios.post<Message[]>("/api/get-messages", {
        chatId,
      });
      return response.data;
    },
  });

  const { input, handleInputChange, handleSubmit, messages } = useChat({
    api: "/api/chat",
    body: {
      chatId,
    },
    initialMessages: data || [],
  });

  React.useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-[99vh] bg-[#323232] text-gray-200">
      {/* header */}
      <div className="sticky top-0 inset-x-0 pl-3 bg-[#323232] h-fit">
        <h3 className="text-lg p-1 text-white">Chat History</h3>
        <hr className="mb-4 border-t border-white"/>
      </div>

      {/* message list */}
      <div className="flex-grow overflow-y-auto" id="message-container">
        <MessageList messages={messages} isLoading={isLoading} />
      </div>

      {/* Spacing Element: Added this to separate messages from input */}
      <div className="h-4"></div>

      {/* input form */}
      <form onSubmit={handleSubmit} className="px-2 py-4 ml-5 mr-5 bg-[#323232] border-t border-white">
        <div className="flex">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask any question..."
            className="w-full bg-[#323232] text-white rounded-md"
          />
          <Button className="bg-[#3E28DE] ml-2 mb-1 rounded-lg">
            <Send className="h-4 w-4 text-white" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatComponent;
