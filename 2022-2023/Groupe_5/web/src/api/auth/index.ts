import { instance } from "..";

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const login = async (email: string, password: string)  => {

    try {

      const response = await instance.post("/auth/login", {
        email,
        password,
      }, {
        headers: {
          "Access-Control-Allow-Credentials": true
        }
      });

      if(response.status === 200) {
        return { data: true, user: response.data };
      }

      return { data: false }

    } catch (error) {
      console.error(error);
  
      return { error: error };
    }
};