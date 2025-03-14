import React from "react";

const UserFooter = () => {
  return (
    <footer
      className="py-4"
      style={{
        background: "linear-gradient(to right, #582105, #a44a1e)",
        color: "white",
      }}
    >
      <div className="container text-center">
        <p className="mb-0">
          &copy; 2023 Fire Safety Certificate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default UserFooter;
