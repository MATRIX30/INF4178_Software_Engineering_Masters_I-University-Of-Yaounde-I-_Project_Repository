import { instance } from "..";
import Hospital from "../../entities/Hospital";

/**
 * Creation of a new hospital type on the server side
 * @param {*} payload The hospital data
 * @param {*} token The user action permission identifier
 * @returns 
 */
 export const createHospitalType= async (payload: Hospital) => {
  try {
    console.log(payload);
    const response = await instance.post("/hospitaltypes", payload, {
      timeout: 30000,
      headers: {
        "Access-Control-Allow-Credentials": true
      }
    }, );

    console.log(response.data);
    

    if (response.data) {
      return { data: response.data };
    }

    return { error: "Something went wrong" };
  } catch (error) {
    console.error(error);

    return { error: error };
  }
};

/**
 * Creation of a new hospital type on the server side
 * @returns 
 */
export const getHospitalTypes = async () => {
  try {
    const response = await instance.get("/hospitaltypes", { timeout: 30000 });

    if (response.data) {
      return { data: response.data };
    }
    return { error: "Something went wrong" };
  } catch (error) {
    console.error(error);

    return { error: error };
  }
};