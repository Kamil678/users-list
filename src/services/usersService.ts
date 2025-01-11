import axios from "axios";
import { User } from "../types/User";

export const fetchUsers = async (limit = 1005): Promise<User[]> => {
  try {
    const response = await axios.get(
      `https://randomuser.me/api/?results=${limit}&inc=name,email,location,picture,login,nat,registered`
    );
    return response.data.results;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Błąd podczas pobierania danych"
    );
  }
};
