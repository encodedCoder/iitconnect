// src/pages/Messages.tsx
import React from "react";
import { Card } from "../components/ui/Card";
import { Avatar } from "../components/ui/Avatar";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Send } from "lucide-react";

interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  createdAt: string;
}

interface Chat {
  id: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  lastMessage?: Message;
  unreadCount: number;
}

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = React.useState<string | null>(null);
  const [message, setMessage] = React.useState("");

  // This would come from your API
  const chats: Chat[] = [];
  const messages: Message[] = [];

  const handleSend = () => {
    if (!message.trim()) return;
    // Send message logic here
    setMessage("");
  };

  return (
    <div className="flex gap-4 h-[calc(100vh-12rem)]">
      {/* Chat List */}
      <Card className="w-80 flex flex-col">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Messages</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 ${
                selectedChat === chat.id ? "bg-gray-50" : ""
              }`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <Avatar src={chat.user.avatar} alt={chat.user.name} />
              <div className="flex-1 text-left">
                <p className="font-medium">{chat.user.name}</p>
                {chat.lastMessage && (
                  <p className="text-sm text-gray-600 truncate">
                    {chat.lastMessage.content}
                  </p>
                )}
              </div>
              {chat.unreadCount > 0 && (
                <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-1">
                  {chat.unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </Card>

      {/* Chat Window */}
      <Card className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <div className="p-4 border-b">
              <h3 className="font-semibold">
                {chats.find((c) => c.id === selectedChat)?.user.name}
              </h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.senderId === "currentUser"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.senderId === "currentUser"
                        ? "bg-primary text-primary-foreground"
                        : "bg-gray-100"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {new Date(message.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1"
                />
                <Button type="submit">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </Card>
    </div>
  );
};

export default Messages;
