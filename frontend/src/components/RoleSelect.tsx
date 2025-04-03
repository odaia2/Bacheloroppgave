import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/RoleSelect.css";

const RoleSelect = () => {
  const navigate = useNavigate();

  const handleSelect = (role: string) => {
    navigate("/questions", { state: { role } }); // Send valgt rolle
  };

  return (
    <div className="role-container">
      <div className="role-card">
        <h3>Velg den rollen som best beskriver deg:</h3>
        <div className="role-buttons">
          <button onClick={() => handleSelect("trener")}>Trener</button>
          <button onClick={() => handleSelect("helsepersonell")}>Helsepersonell</button>
        </div>
        <p>Klikk på en av alternativene for å fortsette</p>
      </div>
    </div>
  );
};

export default RoleSelect;
