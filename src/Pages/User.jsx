import { useState } from "react";
import { useEffect } from "react";
import { GetData } from "../localData/API";
import styles from "./Home.module.css";
import UserTable from "../Components/UserTable";
import { Link } from "react-router-dom";

const dataFilter = {
  page: 0,
  gender: "",
  age: "",
};
export default function User() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(dataFilter);

  const getuser = async (page, gender, age) => {
    let res = await GetData(page, gender, age);
    setData(res.user);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setFilterData({ ...filterData, page: +value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getuser(filterData.page - 1, filterData.gender, filterData.age);
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilterData({ ...filterData, gender: value });
    getuser(filterData.page, value, filterData.age);
    console.log(e.target.value);
  };

  const handleFilterAge = (e) => {
    const { value } = e.target;
    setFilterData({ ...filterData, age: value });
    getuser(filterData.page, filterData.gender, value);
  };
  const handleDecrement = (e) => {
    e.preventDefault();
    if (filterData.page === 0) {
      alert("This is the first page go next !");
    } else {
      setFilterData({ ...filterData, page: filterData.page - 1 });
      getuser(filterData.page - 1, filterData.gender, filterData.age);
    }
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setFilterData({ ...filterData, page: filterData.page + 1 });
    getuser(filterData.page + 1, filterData.gender, filterData.age);
  };

  useEffect(() => {
    getuser(filterData.page, filterData.gender, filterData.age);
  }, []);

  return (
    <div className={styles.container}>
      <Link to="/">
        {" "}
        <button>Go Back</button>{" "}
      </Link>
      <h1>Users Details</h1>
      <div className={styles.filter}>
        <select onChange={handleFilterChange}>
          <option value={""}>Filter by Gender</option>
          <option value={"male"}>Male</option>
          <option value={"female"}>Female</option>
        </select>
        <select onClick={handleFilterAge}>
          <option value={""}>Filter by Age</option>
          <option value={-1}>High to low</option>
          <option value={1}>Low to High</option>
        </select>
      </div>
      <div className={styles.container2}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>City</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => (
              <UserTable key={el._id} {...el} />
            ))}
            {data.length == 0 ? (
              <h1>No data available please fetch data</h1>
            ) : (
              ""
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.filter}>
        <button onClick={handleDecrement} className={styles.Button}>
          Prev
        </button>

        <button onClick={handleIncrement} className={styles.Button}>
          Next
        </button>
        <div>
          <input onChange={handleChange} placeholder="Enter Page Number" />
          <button onClick={handleSubmit} className={styles.Button}>
            Go
          </button>
        </div>
      </div>
    </div>
  );
}
