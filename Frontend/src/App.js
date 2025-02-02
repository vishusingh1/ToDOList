import {React }from "react";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import ToDoList from "./Components/ToDoList";

function App() {

 
  return (
    <div>
     {/* <div className="bg-white" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <Header />
      </div>
     
   
     <MainContent />
     
      <Footer/> */}
      <ToDoList />
      
    </div>
  );
}

export default App;
