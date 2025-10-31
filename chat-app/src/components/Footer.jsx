import { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { Paperclip, Smile, SendHorizontal } from "lucide-react";

const Footer = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const inputTypeFileRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Handling Send Button Functionality
  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
      setShowEmojiPicker(false);
    }
  };

  // Handling Enter Key Functionality
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
      setMessage("");
      setShowEmojiPicker(false);
    }
  };

  // Handling Media Upload Functionality
  const handleMediaUpload = () => {
    inputTypeFileRef.current.click();
  };
 
  // Handling Emoji Picker Functionality
  const handleEmojiPicker = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };
  return (
    <footer className="absolute bottom-0 left-0 w-full bg-blue-200 p-2 lg:p-4">
      <div className="flex items-stretch">
        {showEmojiPicker && (
          <div className="absolute bottom-[70px] right-14 z-50">
            <EmojiPicker onEmojiClick={handleEmojiPicker} />
          </div>
        )}
        <div className="relative h-[50px] lg:h-[60px] w-full border border-1-gray-50">
          <input type="file" ref={inputTypeFileRef} hidden />
          <button
            className="absolute top-1/2 left-3 -translate-y-1/2 p-2"
            onClick={handleMediaUpload}
          >
            <Paperclip />
          </button>
          <input
            type="text"
            name="message"
            className="h-full w-full border-0 outline-0 text-md lg:text-lg ps-14"
            id="message"
            placeholder="Type message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 p-2"
            onClick={() => setShowEmojiPicker((prev) => !prev)}
          >
            <Smile />
          </button>
        </div>
        <button
          className="bg-blue-500 border-0 outline-0 px-4"
          onClick={handleSend}
        >
          <SendHorizontal className="text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
