import {
  Menu,
  Search,
  SlidersHorizontal,
  BadgeQuestionMark,
  Settings,
  Sparkle,
  Grip,
} from "lucide-react";

import ProfileImage from "../assets/img/profile.jpg";

const Header = ({
  query,
  setQuery,
}) => {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="p-4 border-b border-b-gray-200">
      <div className="flex items-center gap-4">
        <div className="relative w-auto lg:w-80 flex items-center gap-2">
          <button
            className="h-[45px] min-w-[45px] w-[45px] rounded-full bg-gray-100 flex justify-center items-center"
          >
            <Menu />
          </button>
          <h1 className="font-medium text-md lg:text-lg">Email</h1>
        </div>
        <div className="flex flex-1 gap-4">
          <div className="relative w-full">
            <Search className="absolute top-1/2 -translate-y-1/2 left-3" />
            <input
              type="search"
              name="search"
              id="search"
              value={query}
              onChange={handleSearch}
              placeholder="Search mail"
              className="w-full border border-gray-200 rounded-md p-3 px-11"
            />
            <button className="absolute top-1/2 -translate-y-1/2 right-3">
              <SlidersHorizontal />
            </button>
          </div>
        </div>
        <div className="relative w-auto lg:w-80">
          <div className="flex justify-end items-center gap-2">
            <button className="hidden md:block">
              <BadgeQuestionMark />
            </button>
            <button className="hidden md:block">
              <Settings />
            </button>
            <button className="hidden md:block">
              <Sparkle />
            </button>
            <button className="hidden md:block">
              <Grip />
            </button>
            <button className="h-[45px] min-w-[45px] w-[45px] rounded-full bg-gray-100 flex justify-center items-center overflow-hidden">
              <img
                src={ProfileImage}
                height={50}
                width={50}
                alt="Profile Pic"
                className="object-cover object-center"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
