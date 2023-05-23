import React, { useState } from "react";
import "./App.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMic } from "react-icons/bs";

const App = () => {
  //const [searched, setSearched] = useState('')
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #f3904f , #3b4371)",
        // /width:'100vw',
        height: "100vh",
        margin: "0",
        position: "relative",
      }}
    >
      <div
        style={{
          //background:'purple',
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "75px",
            marginBottom: "55px",
          }}
        >
          Google
        </h1>
        <div
          
        >
          <div
          style={{
            width: "45%",
           //height: "55px",
            marginLeft: "auto",
              marginRight: "auto",
            borderRadius: "50px",
            padding:'16px',
            paddingRight:'22px',
            backgroundColor: "white",
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between'
          }}>
          <AiOutlineSearch size={24} />
          <input
            style={{
              border: "none",
              outline: "none",
              width:'80%',
              height:'100%',
              background:'none',
              fontSize:'18px'
             
            }}
            type="text"
            placeholder="Search Google or type a URL"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <BsMic size={24} style={{color:'blue'}}/>
          </div>
          <div
            style={{
              maxWidth: "300px",
              overflowWrap: "break-word",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
              fontSize: "30px",
              fontWeight: "bold",
              marginTop: "20px",
              padding: "50px",
            }}
          >
            {searchTerm}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
