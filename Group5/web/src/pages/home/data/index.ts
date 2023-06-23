import Hospital from "../../../entities/Hospital";

import image1 from "../../../assets/images/h1.jpg"
import image2 from "../../../assets/images/h2.jpg"
import image3 from "../../../assets/images/h3.jpg"
import image4 from "../../../assets/images/h4.jpg"
import image5 from "../../../assets/images/h5.jpg"

export const HospitalData = [
    new Hospital(
      '1',
      "Hopital central",
      "public",
      [image1]
      // 'Yaounde',
      // 6,
    ),
    new Hospital(
      '2',
      "Hopital General",
      "public",
      [image2]
      // 'Yaounde',
      // 8,
    ),
    new Hospital(
      '3',
      "Hopital des soeurs de Vogt-beti",
      "private",
      [image3]
      // 'Yaounde',
      // 12,
    ),
    new Hospital(
      '4',
      "Hopital general de Dschang",
      "private",
      [image4]
      // 'Dschang',
      // 12,
    ),
    new Hospital(
      '5',
      "Hopital la Quintini Douala",
      "private",
      [image4]
      // 'Douala',
      // 12,
    ),
    new Hospital(
      '6',
      "Hopital General",
      "public",
      [image5]
      // 'Yaounde',
      // 12,
    ),
    new Hospital(
      '7',
      "Hopital la Passerelle",
      "private",
      [image1]
      // 'Yaounde',
      // 12,
    ),
    
  ];