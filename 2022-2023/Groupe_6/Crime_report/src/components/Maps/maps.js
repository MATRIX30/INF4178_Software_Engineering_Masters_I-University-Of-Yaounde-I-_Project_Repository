import axios from 'axios';
import React, { useEffect } from 'react';

function GoogleMap() {
  useEffect(() => {
    axios.get('http://localhost:5000/position').then((res) => {
      console.log(res.data);
      const ifameData = document.getElementById('iframeId');
      const lat = 3;
      const lon = 11;
      ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
    });
  });

  return (
    <div>
      <iframe id="iframeId" height="500px" width="100%"></iframe>
    </div>
  );
}
export default GoogleMap;
