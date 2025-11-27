import React from 'react';
export default function UnderConstruction() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      color: "#fafafa",
      padding: "0 20px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Website in Progress</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        I’m currently building my portfolio website. Stay tuned!
      </p>
      <p style={{ fontSize: "1rem", color: "#fafafa" }}>
        Meanwhile, feel free to check my projects on GitHub:
        <br />
        <a href="https://github.com/yasser-ms" target="_blank" rel="noopener noreferrer" style={{color: "#fafafa", textDecoration: "underline"}}>
          github.com/yasser-ms
        </a>
      </p>
    </div>
  );
}
