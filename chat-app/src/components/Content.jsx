import Footer from "./Footer";
import Header from "./Header";
import { chatDetails } from "../mocks/chat-detail";
import { CheckCheck } from "lucide-react";
import { useState } from "react";

const Content = () => {
  const [chatDetail, setChatDetail] = useState(chatDetails);
  const handleSendMessage = (messageText) => {
    if (!messageText.trim()) return;

    const newMessage = {
      id: Date.now(),
      display_name: "Me",
      name: "You",
      message: messageText,
      last_seen: "Now",
      isIncoming: false,
      isSeen: true,
    };

    setChatDetail((prev) => [...prev, newMessage]);
  };
  return (
    <section className="relative flex-1 pt-[66px] lg:pt-[82px] pb-[66px] lg:pb-[94px]">
      <Header
        display_name={"DK"}
        name={"Deeproshan Kumar"}
        typing={false}
        last_seen={"12:00"}
      />
      <div className="h-full overflow-y-auto p-2 lg:p-4">
        {chatDetail &&
          chatDetail.map((chatDetail) => {
            return (
              <div
                key={chatDetail?.id}
                className={`flex gap-2 pt-4 ${
                  chatDetail?.isIncoming ? "justify-start" : "justify-end"
                }`}
              >
                <div className="h-[50px] w-[50px] min-w-[50px] rounded-full bg-blue-600 text-white flex justify-center items-center">
                  <span className="text-md font-semibold">
                    {chatDetail?.display_name || "?"}
                  </span>
                </div>
                <div
                  key={chatDetail?.id}
                  className={`relative flex justify-between items-center gap-4 max-w-xl rounded-xl rounded-t-none p-4 ${
                    chatDetail?.isIncoming ? "bg-gray-100" : "bg-blue-100"
                  }`}
                >
                  <div>
                    <h5 className="text-md font-semibold">
                      {chatDetail?.name || "Anonymous User"}
                    </h5>
                    <p className="text-sm text-gray-500 leading-normal">
                      {chatDetail?.message || ""}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 text-nowrap">
                    {chatDetail?.last_seen || ""}
                  </div>
                  {chatDetail?.isSeen && (
                    <CheckCheck
                      size={14}
                      className="absolute bottom-2 right-3 text-blue-600"
                    />
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <Footer onSendMessage={handleSendMessage} />
    </section>
  );
};

export default Content;
