import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Topbar from "./Components/Topbar";
import Settings from "./Components/Settings";
import Login from "./Components/Login";
import Single from "./Components/Single";
import Register from "./Components/Register";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Components/Modal";
import Privacy from "./Components/Privacy";
import Footer from './Components/Footer'


export default function App() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://blogproject-5047e-default-rtdb.firebaseio.com/user.json").then(response => {
      var x = Object.values(response.data)
      setUserData(x)
      setLoading(false);
    })
  }, []);

  useEffect(() => {
    axios.get('https://blogproject-5047e-default-rtdb.firebaseio.com/post.json').then(response => {
      var x = Object.values(response.data)
      setData(x)
      setLoading(false);
    })
  }, []);
  if (loading) {
    return <p className="h-[40vh]">Loading...</p>;
  }
  console.log(data);
  return (
    <>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home data={data} setData={setData} />} />
        <Route path="/posts" element={<Home data={data} />} />
        <Route
          path="/register"
          element={
            localStorage.getItem('currentUser') ? (
              <Home data={data} />
            ) : (
              <Register data={userData} />
            )
          }
        />
        <Route path="/login" element={localStorage.getItem('currentUser') ? <Home data={data} /> : <Login data={userData} setData={setUserData} />} />
        <Route path="/post/:id" element={<Single data={data} />} />
        <Route
          path="/write"
          element={localStorage.getItem('currentUser') ? <Modal /> : <Login data={userData} setData={setUserData} />}
        />
        <Route
          path="/settings"
          element={localStorage.getItem('currentUser') ? <Settings userData={userData} setUserData={setUserData} /> : <Login data={userData} setData={setUserData} />}
        />
        <Route
          path="/privacy"
          element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}
