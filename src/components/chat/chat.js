import React, { useState, useEffect } from "react";
import styles from "../style.module.css";

function Chat() {
  const [response, setResponse] = useState("");

  const sendPrompt = async () => {
    const prompt = document.getElementById("user-input").value;
    const apiResponse = await fetch("http://127.0.0.1:5000/openai-gpt-3.5-turbo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    }).then((res) => res.json());

    setResponse(apiResponse + "\n Timestamp: " + new Date().toLocaleString('en-GB', { 
      day: 'numeric', 
      month: 'numeric', 
      year: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric',
      hour12: false
    }).replace(',', '').replace(/\//g, '-') + ' Hrs');
    
    
  };

  useEffect(() => {
    // Update the response div whenever the response state changes
    const responseDiv = document.getElementById("response");
    responseDiv.textContent = response;
  }, [response]);


  return (
    <>
      <div className={styles.aligncenter}>
        <p>Please enter your prompt:</p>

        <textarea id="user-input" rows="2" cols="50"  style={{ fontSize: "16px" }}  ></textarea>
      </div>
      <div className={styles.aligncenter}>
        <button className="btn-submit" onClick={sendPrompt}>
          Submit
        </button>
      </div>
<br></br>
      Response: <div id="response">{response}</div>
    </>
  );
}

export default Chat;
