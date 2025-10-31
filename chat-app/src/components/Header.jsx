import { useState } from "react";
import { Search, Phone, Video, EllipsisVertical, X } from "lucide-react";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = ({ display_name, name, typing, last_seen }) => {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const isOnline = useOnlineStatus();

  const enableSearch = () => {
    setIsSearchEnabled(true);
  };
  const disableSearch = () => {
    setIsSearchEnabled(false);
  };
  return (
    <header className="absolute top-0 left-0 w-full shadow-sm p-2 lg:p-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="h-[50px] w-[50px] min-w-[50px] rounded-full bg-blue-600 text-white flex justify-center items-center">
            <span className="text-lg font-semibold">{display_name || "?"}</span>
          </div>
          <div className="px-2 lg:px-3">
            <h5 className="text-md lg:text-lg font-semibold">{name}</h5>
            <p className="text-sm text-gray-500 leading-none">
              {isOnline
                ? "online"
                : typing
                ? "typing..."
                : last_seen
                ? last_seen
                : ""}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-5">
          {isSearchEnabled && (
            <div className="flex items-center">
              <input
                type="search"
                placeholder="Search..."
                className="border-0 border-b border-b-gray-200 outline-0 text-sm text-black py-2"
              />
              <button onClick={disableSearch}>
                <X />
              </button>
            </div>
          )}
          <button onClick={enableSearch}>
            <Search />
          </button>
          <button>
            <Phone />
          </button>
          <button>
            <Video />
          </button>
          <button>
            <EllipsisVertical />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
