import { Link, useMatch } from "react-router-dom";

export default function CustomLink({ children, to, ...props }) {
  const match = useMatch(to);
  console.log({ match });

  return (
    <Link
      to={to}
      style={{ color: match ? "var(--color-active)" : "white" }}
      {...props}
    >
      {children}
    </Link>
  )
};