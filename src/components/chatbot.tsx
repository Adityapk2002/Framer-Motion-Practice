import { useEffect, useState } from "react";
import { motion, useAnimate, stagger, AnimatePresence } from "framer-motion";
import { Bot, BotIcon, ChevronDown } from "lucide-react";

export const Grok = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute bottom-15 right-4">
      <motion.div
        animate={{ y: open ? 0 : "92%" }}
        initial={{ y: "92%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex flex-col justify-end items-end"
      >
        <motion.button
          onClick={() => setOpen(!open)}
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ opacity: { duration: 0.05, ease: "easeOut" } }}
          className="flex items-center justify-center size-12 rounded-2xl border border-neutral-600 shadow-xl cursor-pointer"
        >
          <Bot />
        </motion.button>

        <AnimatePresence>
          {open && <ChatWindow open={open} setOpen={setOpen} />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const ChatWindow = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const introMessage = "How can I help you today?";
  const [scope, animate] = useAnimate();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    animate(
      "span",
      { opacity: [0, 1] },
      { duration: 0.01,
        delay: stagger(0.02) }
    );
  }, [open]);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, input]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="w-[24rem] h-[32rem] bg-white shadow-lg rounded-2xl p-4 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BotIcon />
          <p className="text-lg font-medium">SuperGrok</p>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="h-6 w-6 flex items-center justify-center cursor-pointer rounded-full hover:bg-gray-100"
        >
          <ChevronDown />
        </button>
      </div>

      {/* Intro Message */}
      <div className="text-xl font-medium text-center mb-4">
        {introMessage.split("").map((char, idx) => (
          <motion.span key={idx} className="text-black" style={{ opacity: 0 }}>
            {char}
          </motion.span>
        ))}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto rounded-lg bg-neutral-100 p-2 mb-2 space-y-2">
        {messages.length === 0 ? (
          <p className="text-sm text-neutral-500 text-center mt-8">
            No messages yet
          </p>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              className="bg-amber-200 text-black p-2 rounded-xl self-end max-w-xs ml-auto"
            >
              {msg}
            </div>
          ))
        )}
      </div>

      {/* Input Field */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
        <button
          onClick={handleSend}
          className="px-3 py-2 bg-amber-300 rounded-xl text-sm font-medium hover:bg-amber-400 transition"
        >
          Send
        </button>
      </div>
    </motion.div>
  );
};