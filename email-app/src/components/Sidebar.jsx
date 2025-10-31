import {
  ChevronDown,
  ChevronUp,
  Clock,
  Clock7,
  Inbox,
  MailPlus,
  Mails,
  Pencil,
  Plus,
  SendHorizontal,
  Settings,
  ShoppingBag,
  Star,
  StickyNote,
  Tag,
  Trash,
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className="h-full w-60 bg-white border-r border-r-gray-200 overflow-y-auto">
      <button className="flex items-center gap-3 shadow-md bg-black text-white px-6 py-3 rounded-md m-4">
        <Pencil size={18} /> Compose
      </button>
      <div>
        <ul>
          <li className="px-6 py-2">
            <button className="flex items-center gap-3 text-sm text-gray-600">
              <Inbox size={18} />
              Inbox
            </button>
          </li>
          <li className="px-6 py-2">
            <button className="flex items-center gap-3 text-sm text-gray-600">
              <Star size={18} />
              Starred
            </button>
          </li>
          <li className="px-6 py-2">
            <button className="flex items-center gap-3 text-sm text-gray-600">
              <Clock7 size={18} />
              Snoozed
            </button>
          </li>
          <li className="px-6 py-2">
            <button className="flex items-center gap-3 text-sm text-gray-600">
              <SendHorizontal size={18} />
              Sent
            </button>
          </li>
          <li className="px-6 py-2">
            <button className="flex items-center gap-3 text-sm text-gray-600">
              <StickyNote size={18} />
              Drafts
            </button>
          </li>
          <li className="px-6 py-2">
            <button className="flex items-center gap-3 text-sm text-gray-600">
              <ShoppingBag size={18} />
              Puchases
            </button>
          </li>
        </ul>
        <button
          className="flex items-center gap-3 text-md text-black font-medium px-6 py-2"
          onClick={handleExpansion}
        >
          {isExpanded ? (
            <>
              <ChevronUp size={18} />
              Less
            </>
          ) : (
            <>
              <ChevronDown size={18} />
              More
            </>
          )}
        </button>
        {isExpanded && (
          <ul>
            <li className="px-6 py-2">
              <button className="flex items-center gap-3 text-sm text-gray-600">
                <Tag size={18} />
                Important
              </button>
            </li>
            <li className="px-6 py-2">
              <button className="flex items-center gap-3 text-sm text-gray-600">
                <SendHorizontal size={18} />
                Scheduled
              </button>
            </li>
            <li className="px-6 py-2">
              <button className="flex items-center gap-3 text-sm text-gray-600">
                <Mails size={18} />
                All mail
              </button>
            </li>
            <li className="px-6 py-2">
              <button className="flex items-center gap-3 text-sm text-gray-600">
                <Clock size={18} />
                Spam
              </button>
            </li>
            <li className="px-6 py-2">
              <button className="flex items-center gap-3 text-sm text-gray-600">
                <Trash size={18} />
                Trash
              </button>
            </li>
            <li className="px-6 py-2">
              <button className="flex items-center gap-3 text-sm text-gray-600">
                <MailPlus size={18} />
                Manage subscriptions
              </button>
            </li>
            <li className="px-6 py-2">
              <button className="flex items-center gap-3 text-sm text-gray-600">
                <Settings size={18} />
                Manage labels
              </button>
            </li>
            <li className="px-6 py-2">
              <button className="flex items-center gap-3 text-sm text-gray-600">
                <Plus size={18} />
                Create new label
              </button>
            </li>
          </ul>
        )}

        <button className="flex items-center gap-3 text-md text-black font-medium px-6 py-2">
          Labels <Plus size={18} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
