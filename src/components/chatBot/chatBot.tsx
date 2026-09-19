"use client";

import { useState ,useRef, useEffect } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! 👋 I'm Ask Vishnu. How can I help you?",
    },
  ]);

  const [input, setInput] = useState("");

  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

  function getBotResponse(message: string) {
    const text = message.toLowerCase();

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      return "Hello! 👋 Nice to meet you.";
    }

    if (text.includes("name") || text.includes("who are you")) {
      return "I'm Ask Vishnu 🤖, Vishnu's portfolio assistant.";
    }
    if (text.includes("how")) {
      return "I'm good, thanks !!!";
    }

    if (text.includes("vishnu")) {
      return "Vishnu is an amazing Frontend developer who has has 4 years of experience";
    }

    if (text.includes("angular")) {
      return "Vishnu has extensive experience working with Angular.";
    }

    if (text.includes("react")) {
      return "Vishnu has experience working with React.";
    }

    if (
      text.includes("experience") ||
      text.includes("years")
    ) {
      return "Vishnu has 4 years of frontend development experience.";
    }

    if (text.includes("skill")) {
      return "Vishnu's skills include Angular, React, Flutter, Vue, React Native and Next.js.";
    }

    if (text.includes("game")) {
      return "You can check out the games section to play Tic Tac Toe, Guess the Movie and Snake Battle! 🎮";
    }

    if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("linkedin")
    ) {
      return "You can contact Vishnu through the Contact page.";
    }

    return "I'm still learning 🤔. Try asking me about Vishnu's skills, experience, Angular, React or games.";
  }

  function sendMessage() {
    if (!input.trim()) return;

    const userText = input.trim();

    const userMessage: Message = {
      sender: "user",
      text: userText,
    };

    const botMessage: Message = {
      sender: "bot",
      text: getBotResponse(userText),
    };

    setMessages((current) => [
      ...current,
      userMessage,
      botMessage,
    ]);

    setInput("");
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <>
      {/* =========================
          CHAT POPUP
      ========================== */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[100] w-[350px] max-w-[calc(100vw-32px)] overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl shadow-black/50 backdrop-blur-xl">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
                🤖
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Ask Vishnu
                </h3>

                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                  <span className="text-[10px] text-gray-500">
                    Portfolio Assistant
                  </span>
                </div>
              </div>

            </div>

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-lg text-gray-500 transition hover:bg-white/5 hover:text-white"
              aria-label="Close chatbot"
            >
              ×
            </button>

          </div>

          {/* Messages */}
          <div className="chat-scroll h-[350px] space-y-3 overflow-y-auto p-4">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                    message.sender === "user"
                      ? "rounded-br-sm bg-red-500 text-white"
                      : "rounded-bl-sm border border-white/10 bg-white/[0.05] text-gray-300"
                  }`}
                >
                  {message.text}
                </div>

              </div>
            ))}
            <div ref={messagesEndRef} />

          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-white/10 p-3"
          >
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 focus-within:border-red-500/40">

              <input
                type="text"
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                placeholder="Ask something..."
                className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-gray-600"
              />

              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-white transition hover:bg-red-400 disabled:opacity-30"
              >
                ↑
              </button>

            </div>
          </form>

        </div>
      )}

      {/* =========================
          FLOATING CHAT BUTTON
      ========================== */}
      <button
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-6 right-6 z-[101] flex h-14 w-14 items-center justify-center rounded-full border border-red-500/40 bg-black/80 text-2xl shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-red-500 hover:bg-red-500/10"
        aria-label={
          isOpen
            ? "Close chatbot"
            : "Open Ask Vishnu chatbot"
        }
      >
        {isOpen ? "🇽" : "🤖"}
      </button>

    </>
  );
}