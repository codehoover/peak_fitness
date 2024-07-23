import Image from "next/image";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Tracker from "./components/Tracker";
import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <main>
      <NavBar />
      <Register />
      <Login />
      <Tracker />
    </main>
  );
}
