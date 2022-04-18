import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#0c4a6e" : "black",
          backgroundColor: match ? "#ffffff" : "#ede9fe",
          padding: match ? ".5rem 1rem" : "",
          borderRadius: match ? "6px" : "",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;