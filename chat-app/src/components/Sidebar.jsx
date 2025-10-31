import { Plus, Search, CheckCheck, Check } from "lucide-react";
import { chats } from "../mocks/sidebar-chats";
import { useState } from "react";

const Sidebar = () => {
  const [chatList, setChatList] = useState(chats);
  const [query, setQuery] = useState("");

  const searchContact = (e) => {
    setQuery(e.target.value);
    const name = e.target.value.toLowerCase();

    const filtered = chats.filter((f) => f.name.toLowerCase().includes(name));

    setChatList(filtered);
  };

  return (
    <aside className="relative w-80 border-r border-r-gray-200 hidden md:block">
      <header className="absolute top-0 left-0 w-full bg-white p-2 lg:p-4">
        <div className="flex justify-between items-center gap-4 mb-2 lg:mb-4">
          <h1 className="text-md lg:text-lg font-bold text-black">Chats</h1>
          <button className="text-black">
            <Plus />
          </button>
        </div>
        <div className="relative h-[40px] lg:h-[50px] border border-1-gray-200 rounded-md ps-10">
          <input
            type="search"
            name="search-chats"
            value={query}
            className="h-full w-full text-sm lg:text-md px-2 lg:px-4 text-gray-500 border-0 outline-0"
            id="search-chats"
            placeholder="Search..."
            onChange={searchContact}
          />
          <Search className="absolute top-1/2 -translate-y-1/2 left-2 lg:left-3 text-gray-500" />
        </div>
      </header>
      <div className="h-full pt-[88px] lg:pt-[126px] overflow-y-auto">
        {chatList.length > 0 ? (
          chatList.map((chat, index) => {
            return (
              <div
                key={chat?.id}
                className={`flex justify-between items-center gap-4 p-2 lg:p-4 transition-bg duration-500 cursor-pointer hover:bg-gray-100 ${
                  index === 0 &&
                  "border-l-4 border-l-blue-500 bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <div className="h-[50px] w-[50px] min-w-[50px] rounded-full bg-blue-600 text-white flex justify-center items-center">
                    <span className="text-lg font-semibold">
                      {chat?.display_name || "?"}
                    </span>
                  </div>
                  <div className="px-2 lg:px-3">
                    <h5 className="font-semibold text-sm md:text-md xl:text-lg leading-normal">
                      {chat?.name || "Anonymous User"}
                    </h5>
                    <p className="text-xs lg:text-md text-gray-500 leading-none">
                      {chat?.message || ""}
                    </p>
                  </div>
                </div>
                <div className="text-gray-500 text-sm">
                  {chat?.last_seen || ""}
                  {chat?.isSeen ? (
                    <CheckCheck size={14} className="text-blue-600" />
                  ) : (
                    <Check size={14} className="text-gray-400" />
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-gray-500 py-10">
            No contacts found!
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
