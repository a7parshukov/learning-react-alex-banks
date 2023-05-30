import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h1>Oops...</h1>
      <div>Return <Link to="/">home page</Link></div>
    </>
  )
}