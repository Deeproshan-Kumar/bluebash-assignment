import { Inbox, Info, RotateCw, Star, Tag, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { emails } from "../mocks/emails";

const Main = ({ query }) => {
  const [data, setData] = useState(emails);
  const [filteredData, setFilteredData] = useState(emails);
  const [activeFilter, setActiveFilter] = useState("all");
  const [checkedEmails, setCheckedEmails] = useState([]);

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setCheckedEmails(filteredData.map((email) => email.id));
    } else {
      setCheckedEmails([]);
    }
  };

  // Filter functionality
  const filterEmails = (filterBy) => {
    setActiveFilter(filterBy);
    if (filterBy === "all") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((email) => email.category === filterBy);
      setFilteredData(filtered);
    }
  };

  // Bookmark functionality
  const handleBookmark = (id) => {
    const updatedData = data.map((email) =>
      email.id === id ? { ...email, bookmarked: !email.bookmarked } : email
    );
    setData(updatedData);

    let updatedFiltered = updatedData;

    if (activeFilter !== "all") {
      updatedFiltered = updatedFiltered.filter(
        (email) => email.category === activeFilter
      );
    }

    if (query) {
      updatedFiltered = updatedFiltered.filter((email) =>
        email.sender.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredData(updatedFiltered);
  };

  // Search functionality
  const handleSearch = (query) => {
    let newData = data;
    if (query) {
      newData = newData.filter((email) =>
        email.sender.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (activeFilter !== "all") {
      newData = newData.filter((email) => email.category === activeFilter);
    }

    setFilteredData(newData);
  };

  const categoryCounts = {
    all: data.length,
    Primary: data.filter((email) => email.category === "Primary").length,
    Promotions: data.filter((email) => email.category === "Promotions").length,
    Social: data.filter((email) => email.category === "Social").length,
    Updates: data.filter((email) => email.category === "Updates").length,
  };

  useEffect(() => {
    handleSearch(query);
  }, [query, activeFilter, data]);

  return (
    <main className="h-full flex-1 bg-gray-50 overflow-y-auto">
      <div className="h-full">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="check_all"
            id="check_all"
            className="cursor-pointer m-4"
            onChange={handleCheckAll}
            checked={
              filteredData.length > 0 &&
              checkedEmails.length === filteredData.length
            }
          />
          <button className="cursor-pointer">
            <RotateCw size={16} className="text-gray-600" />
          </button>
        </div>
        <div className="flex overflow-x-auto">
          <button
            className={`relative lg:min-w-60 flex flex-nowrap items-center gap-2 text-sm lg:text-md text-gray-600 p-4 border-b-4 transition-all duration-300 hover:bg-white ${
              activeFilter === "all" ? "border-b-4 border-b-blue-500" : ""
            }`}
            onClick={() => filterEmails("all")}
          >
            <span className="flex gap-2">
              <Inbox size={20} /> All
            </span>
            <span className="text-nowrap px-2 py-[2px] font-medium rounded-full text-xs text-white bg-blue-400">
              {categoryCounts.all} New
            </span>
          </button>
          <button
            className={`relative lg:min-w-60 flex flex-nowrap items-center gap-2 text-sm lg:text-md text-gray-600 p-4 border-b-4 transition-all duration-300 hover:bg-white ${
              activeFilter === "Primary" ? "order-b-4 border-b-blue-500" : ""
            }`}
            onClick={() => filterEmails("Primary")}
          >
            <span className="flex gap-2">
              <Inbox size={20} /> Primary
            </span>
            <span className="text-nowrap px-2 py-[2px] font-medium rounded-full text-xs text-white bg-blue-400">
              {categoryCounts.Primary} New
            </span>
          </button>
          <button
            className={`relative lg:min-w-60 flex flex-nowrap items-center gap-2 text-sm lg:text-md lg:text-md text-gray-600 p-4 border-b-4 transition-all duration-300 hover:bg-white ${
              activeFilter === "Promotions"
                ? "border-b-4 border-b-blue-500"
                : ""
            }`}
            onClick={() => filterEmails("Promotions")}
          >
            <span className="flex gap-2">
              <Tag size={20} /> Promotions
            </span>
            <span className="text-nowrap px-2 py-[2px] font-medium rounded-full text-xs text-white bg-green-400">
              {categoryCounts.Promotions} New
            </span>
          </button>
          <button
            className={`relative lg:min-w-60 flex flex-nowrap items-center gap-2 text-sm lg:text-md text-gray-600 p-4 border-b-4 transition-all duration-300 hover:bg-white ${
              activeFilter === "Social" ? "border-b-4 border-b-blue-500" : ""
            }`}
            onClick={() => filterEmails("Social")}
          >
            <span className="flex gap-2">
              <Users size={20} /> Social
            </span>
            <span className="text-nowrap px-2 py-[2px] font-medium rounded-full text-xs text-white bg-red-400">
              {categoryCounts.Social} New
            </span>
          </button>
          <button
            className={`relative min-w-60 flex flex-nowrap items-center gap-2 text-sm lg:text-md text-gray-600 p-4 border-b-4 transition-all duration-300 hover:bg-white ${
              activeFilter === "Updates" ? "border-b-4 border-b-blue-500" : ""
            }`}
            onClick={() => filterEmails("Updates")}
          >
            <span className="flex gap-2">
              <Info size={20} /> Updates
            </span>
            <span className="text-nowrap px-2 py-[2px] font-medium rounded-full text-xs text-white bg-orange-400">
              {categoryCounts.Updates} New
            </span>
          </button>
        </div>
        <div>
          <ul>
            {filteredData.length > 0 ? (
              filteredData.map((d) => {
                return (
                  <li
                    className="relative flex flex-nowrap items-center gap-2 p-3 border-b border-b-gray-200 overflow-hidden"
                    key={d?.id}
                  >
                    <input
                      type="checkbox"
                      name={`checbox_${d?.id}`}
                      id={`checkbox_${d?.id}`}
                      checked={checkedEmails.includes(d.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckedEmails((prev) => [...prev, d.id]);
                        } else {
                          setCheckedEmails((prev) =>
                            prev.filter((id) => id !== d.id)
                          );
                        }
                      }}
                    />
                    <button onClick={() => handleBookmark(d?.id)}>
                      <Star
                        size={14}
                        className={`${
                          d.bookmarked
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                    <p className="text-sm text-gray-800 font-medium text-nowrap">
                      <strong>{d?.sender || "Unknown User"}</strong>
                    </p>
                    <p className="text-sm text-gray-800 text-nowrap">
                      {d?.title || "No Title"} -{" "}
                      <span className="text-gray-400 truncate">
                        {d?.description || "No Description"}
                      </span>
                    </p>
                    <p className="absolute right-0 bg-gray-50 px-2 italic text-xs text-gray-800 text-nowrap">
                      {d?.time}
                    </p>
                  </li>
                );
              })
            ) : (
              <li className="flex flex-nowrap items-center justify-center gap-2 p-3 border-b border-b-gray-200">
                <p className="text-sm text-gray-800 font-medium text-nowrap">
                  <strong>No Email Found!</strong>
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;
