import Image from "next/image";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Tracker from "./components/Tracker";
export default function Home() {
  return (
    <main>
      <Register />
      <Login />
      <Tracker />
    </main>
  );
}
