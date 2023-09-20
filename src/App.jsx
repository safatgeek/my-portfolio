import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import ProfilePic from "./components/ProfilePic";
import Sidebar from './components/Sidebar';

function App() {
  return <div>
    <Header />
    <Sidebar />
    <div className=" ml-[110.99px] grid grid-cols-1 md:grid-cols-3">
      <div className=" col-span-2">
        <Introduction />
        <About />
      </div>
      <div className=" hidden md:block">
        <ProfilePic />
      </div>
    </div>
  </div>;
}

export default App;
