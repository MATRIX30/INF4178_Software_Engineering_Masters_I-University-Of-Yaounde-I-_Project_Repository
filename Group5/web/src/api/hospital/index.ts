import { instance } from "..";
// import { CreateHospitalDto } from "../../entities/CreateHospitalDto";

/**
 * Creation of a new hospital on the server side
 * @param {*} payload The hospital data
 * @param {*} token The user action permission identifier
 * @returns 
 */
 export const createHospital = async (
  payload: FormData
  ) => {

  try {
    const response = await instance.post("/hospitals", payload, {
      timeout: 30000,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
      // headers: {
      //   "Access-Control-Allow-Credentials": true
      // }
    });

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
 * Creation of a new hospital on the server side
 * @returns 
 */
export const getHospitals = async () => {
  try {
    const response = await instance.get("/hospitals", { timeout: 30000 });

    if (response.data) {
      return { data: response.data };
    }

    return { error: "Something went wrong" };
  } catch (error) {
    console.error(error);

    return { error: error };
  }
};