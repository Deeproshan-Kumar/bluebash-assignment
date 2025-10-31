import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const ChatAppLayout = () => {
  return (
    <div className="h-full flex">
      <Sidebar />
      <Content />
    </div>
  );
};

const App = () => {
  return <ChatAppLayout />;
};

export default App;
