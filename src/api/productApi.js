import axios from "axios";

export async function fetchProduct() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("something went wrong :" , error);
    return [];
  }
}
