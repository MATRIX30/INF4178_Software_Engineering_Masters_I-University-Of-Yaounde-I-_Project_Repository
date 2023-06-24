import { instance } from "..";

export const getHospitals = async () => {
  try {
    const response = await instance.get("/hospitals");

    if (response.status !== 200) return { error: "Error fetching hospitals" };

    return { data: response.data };
  } catch (error) {
    console.log(error);

    return { error };
  }
};

export const getBestHospitals = async (
  criteria: { criteria: string; priority: number }[],
  location: { latitude: number; longitude: number },
  city: string
) => {
  try {
    const criteriaPayload: Record<string, number> = {};

    criteria.forEach((c) => {
      criteriaPayload[c.criteria.toLowerCase()] = c.priority;
    });

    console.log(criteriaPayload)

    const response = await instance.get("/hospitals/ahp", {
      params: {
        ...criteriaPayload,
        userLatitude: location.latitude,
        userLongitude: location.longitude,
        city,
      },
    });

    if (response.status !== 200)
      return { error: "Error fetching best hospitals" };

    return { data: response.data };
  } catch (error) {
    console.log(error);

    return { error };
  }
};
