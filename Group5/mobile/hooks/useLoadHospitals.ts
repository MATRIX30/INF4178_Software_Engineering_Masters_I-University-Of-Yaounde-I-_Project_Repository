import { useActions } from "@dilane3/gx";
import { useEffect } from "react";
import { getHospitals } from "../api/hospitals";
import Hospital from "../entities/hospital";

export const useLoadHospitals = () => {
  // Global actions
  const { setHospitals } = useActions("hospitals");

  useEffect(() => {
    handleLoadHospitals();
  }, []);

  // Handlers
  const handleLoadHospitals = async () => {
    const { data: response, error } = await getHospitals();

    if (error) return;

    const hospitals = response.data.map(
      (hospital: any) => new Hospital({ ...hospital, type: hospital.hospitalType.label })
    );

    setHospitals(hospitals);
  };
};
