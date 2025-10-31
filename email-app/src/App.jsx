import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="h-full">
      <Header
        query={query}
        setQuery={setQuery}
      />
      <div className="flex" style={{ height: "calc(100% - 83px)" }}>
        <Sidebar/>
        <Main query={query} />
      </div>
    </div>
  );
};

const App = () => {
  return <Layout />;
};

export default App;
