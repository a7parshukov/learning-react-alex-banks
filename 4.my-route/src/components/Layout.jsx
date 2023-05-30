import { Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";

export default function Layout() {
  return (
    <>
      <header>
        <CustomLink to="/" >Home</CustomLink>
        <CustomLink to="/blog" >Blogs</CustomLink>
        <CustomLink to="/about" >About</CustomLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>2023</footer>
    </>
  )
}