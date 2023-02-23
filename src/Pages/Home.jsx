import styles from "./Home.module.css";
import { fetchData, deleteData } from "../localData/API";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState(false);

  const handleFetch = async (e) => {
    e.preventDefault();
    if (data) {
      alert("Request Processing...");
    } else {
      setData(true);
      let res = await fetchData();
        setData(false);
        if (res) {
            alert("User Data fetched Successfully !")
        } else {
            alert("something went wrong try again !")
        }
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    if (data) {
      alert("Request Processing...");
    } else {
      setData(true);
      let res = await deleteData();
        setData(false);
        if (res) {
          alert("User Data Deleted Successfully !");
        } else {
            alert("something went wrong try again !");
        }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Home Page </h1>
      <div className={styles.home}>
        <button onClick={handleFetch} className={styles.Button}>
          Fetch users
        </button>
        <button onClick={handleDelete} className={styles.Button}>
          Delete users
        </button>
        <Link to="/user" > <button  className={styles.Button}>Get users</button>  </Link>
      </div>
    </div>
  );
}
