import Button from "../../components/buttons";
import Layout from "../../components/layout";
import { Colors } from "../../utils/Colors";
import { BsFillPlusCircleFill } from "react-icons/bs";
import ModalContainer from "../../components/modal";
import { useCallback, useEffect, useState } from "react";
import CreateHospital from "../../components/modal/contents/createHospital";
import ShowHospital from "../../components/modal/contents/showHospital";
import {HospitalComponent} from "./hospital"
import styles from "./styles/home.module.css";
import { useActions, useSignal } from "@dilane3/gx";
import { HospitalState } from "../../gx/signal/hospital";
import Hospital from "../../entities/Hospital";
import hospital_vector from '../../assets/images/hospital_vector.jpg'
import { Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../../utils/Functions";
import { getHospitals } from "../../api/hospital";
import Address from "../../entities/Address";
import { getHospitalTypes } from "../../api/hospitalTypes";
import HospitalType from "../../entities/HospitalType";
import HospitalSkeleton from "./hospitalSkeleton";

enum ModalType {
  CREATE_HOSPITAL = "create-hospital",
  SHOW_HOSPITAL = "show-hospital",
  DEFAULT = "default",
}

export default function Home() {
  // Local state
  // const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(ModalType.DEFAULT);

  const [filterType, setFilterType] = useState<string>("all");

  const { hospitals, hospitalsLoading, searchHospitalText } = useSignal<HospitalState>("hospitals");
  const hospitalTypes = useSignal<Array<HospitalType>>("hospitalTypes");
  const showModal = useSignal("modal");
 
  const { loadHospitals, selectHospital, setLoading } = useActions("hospitals", "loadHospitals", "selectHospital", "setLoading");
  const { loadHospitalTypes } = useActions("hospitalTypes", "loadHospitalTypes");
  const { toggleShowModal } = useActions("modal", "toggleShowModal");

  useEffect(() => {
    fetchHospitalTypes();
    fetchHospitals();
    
    return () => {
      console.log("Unmounted");
    }
  }, []);
  
  const fetchHospitalTypes = async () => {

    const hospitalTypesList: HospitalType[] = [];

    const { data } = await getHospitalTypes();

    if(data.length > 0) {
      data.map((e: HospitalType) => {
        const newHospitalType = new HospitalType(e.id, e.label, e.createdAt, e.updatedAt);
        hospitalTypesList.push(newHospitalType);
      });
    }  

    loadHospitalTypes(hospitalTypesList);

  }
  
  const fetchHospitals = async () => {

    setLoading(true);

    const fetchedHospitalsList: Hospital[] = [];

    const { data } = await getHospitals();

    if(data.totalCount > 0) {
      data.data.map((e: any) => {

        const newHospitalAddress = new Address(
          e.latitude.toString(),
          e.longitude.toString(),
          e.street,
          e.city,
          e.postalCode ?? '',
          "Cameroun"
        )

        const newHospital = new Hospital(
          e.id, 
          e.name, 
          e.hospitalType.label, 
          [e.photo ?? ''],
          e.notice ?? 0,
          e.phoneNumber ?? '',
          e.cost ?? 0,
          e.website ?? '',
          newHospitalAddress
        );

        fetchedHospitalsList.push(newHospital);

      });

      loadHospitals(fetchedHospitalsList);

    } else {
      loadHospitals([]);
    }
    setLoading(false)
  }

  /** 
   * Generate the content of the modal
   * @returns {JSX.Element} The content of the modal
   */
  const generateModal = useCallback(() => {
    switch (modalType) {
      case ModalType.CREATE_HOSPITAL:
        return <CreateHospital />;
      case ModalType.SHOW_HOSPITAL:
        return <ShowHospital />;
      default:
        return null;
    }
  }, [modalType]);

  // Local functions

  /**
   * Open the modal to create a new hospital
   */
  const handleOpenCreateHospitalModal = () => {
    setModalType(ModalType.CREATE_HOSPITAL);
    toggleShowModal(true);

    console.log(modalType)
  }

  /**
   * Open the modal to show a hospital
   */
  const handleOpenShowHospitalModal = () => {
    setModalType(ModalType.SHOW_HOSPITAL);
    
    toggleShowModal(true);
  }

  const searchFilteredHospitals = useCallback((): Hospital[] => {

    let searchFilteredHospitalsList: Hospital[] = [];
    if(searchHospitalText.length > 0) {

      hospitals.map(elmt => {
        if(elmt.name.toLowerCase().includes(searchHospitalText) || 
            elmt.phoneNumber?.toLowerCase().includes(searchHospitalText) ||
            elmt.cost?.toString()?.toLowerCase().includes(searchHospitalText) ||
            elmt.website?.toLowerCase().includes(searchHospitalText) ||
            elmt.address?.street?.toLowerCase().includes(searchHospitalText) ||
            elmt.address?.city?.toLowerCase().includes(searchHospitalText) ||
            elmt.address?.postalCode?.toLowerCase().includes(searchHospitalText) ||
            elmt.address?.country?.toLowerCase().includes(searchHospitalText)
        ) {

          searchFilteredHospitalsList.push(elmt);
        }
      });

      if(filterType != 'all') {
        searchFilteredHospitalsList = searchFilteredHospitalsList.filter(e => e.type == filterType);
      }

      return searchFilteredHospitalsList;
    } else if(filterType != 'all') {

      hospitals.map(elmt => {
        if(elmt.type == filterType) {
          searchFilteredHospitalsList.push(elmt);
        }
      })
      return searchFilteredHospitalsList;
    } else {
      return hospitals;
    }
  }, [hospitals, searchHospitalText, filterType]);

  return (
    <Layout>
      
        <section className={styles.homeHeader}>
          <span className={styles.homeTitle}>Liste des hopitaux ({searchFilteredHospitals().length})</span>

          <Button
            text="Nouvel Hopital"
            width={200}
            onClick={handleOpenCreateHospitalModal}
          >
            <BsFillPlusCircleFill size={24} color={Colors.white} />
          </Button>
        </section>

        <section style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: '2rem',
          marginBottom: '1rem'
        }}>
          <span style={{ paddingRight: 5 }}>Filter:</span>
          <select onChange={(e) => setFilterType(e.target.value)} className={styles.filterSelect} defaultValue={""}>
            <option value="" disabled={true} key={"type"}>Hospital Type</option>
            <option value="all" key={"all-default"}>All</option>
            {
              hospitalTypes && hospitalTypes.map((type, index) => (
                <>
                  <option key={`${index}-${type.label}`} value={type.label}>{capitalizeFirstLetter(type.label)}</option>
                </>
              ))
            }
          </select>
        </section>

        <section className={styles.hospitalContent} >

          { hospitalsLoading ?
            [1, 2, 3, 4].map((elmt) => (
              <HospitalSkeleton key={elmt+"10"}/>
            )) : 

          searchFilteredHospitals().length > 0 ? 
            searchFilteredHospitals().map((hospital: Hospital, i: number) => (
            <HospitalComponent key={hospital.name + i} hospital={hospital} onShow={() => {
              selectHospital(hospital)
              handleOpenShowHospitalModal()
            }} /> 
          )) : <div style={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem'
          }}>
            <img style={{
              width: "40em",
              height: "auto"
            }} src={hospital_vector} alt="hosptal vector image" loading={"lazy"} />
            <Typography style={{ fontWeight: 700 }} variant="h4">No Hospital found</Typography>
          </div> 
        }
          
        </section>

        <ModalContainer open={showModal} onClose={() => toggleShowModal(false)}>
          {generateModal()}
        </ModalContainer>
      
    </Layout>
  );
}
