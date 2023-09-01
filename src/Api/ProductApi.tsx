import axios from "axios";

const url: string = "http://localhost:2232/api/v1/get-product";
export const getProduct = async () => {
  try {
    return await axios.get(url).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};