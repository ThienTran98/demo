import React from "react";

export default function HomePage() {
  return (
    <div>
      <div>
        <label htmlFor="files" className="btn">
          Select Image
        </label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
      </div>
    </div>
  );
}
