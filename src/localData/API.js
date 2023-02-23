import axios from "axios";

export const fetchData = async () => {
  try {
    let res = await axios.post(
      "https://cute-cyan-lovebird-vest.cyclic.app/user"
    );
    return res.data;
  } catch (err) {
    return false;
  }
};

export const deleteData = async () => {
   try {
     let res = await axios.delete(
       "https://cute-cyan-lovebird-vest.cyclic.app/user"
     );
     return res.data;
   } catch (err) {
     return false;
   }
}


export const GetData = async (page, gender, age) => {
    if (page < 0) {
        page = 0;
    }
  try {
    let res = await axios.get(
      `https://cute-cyan-lovebird-vest.cyclic.app/user?page=${page}&gender=${gender}&age=${age}`
    );
    return res.data;
  } catch (err) {
    return false;
  }
};