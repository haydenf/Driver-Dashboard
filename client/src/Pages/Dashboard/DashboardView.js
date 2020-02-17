import React, { useState } from 'react';
import CarList from '../../Components/CarList';
import DashboardHeader from '../../Components/DashboardHeader';
import CarData from '../../Components/CarData';
import Footer from '../../Components/Footer';

export default function DashboardView() {
  const [vehicleIdSelectionState, setVehicleIdSelectionState] = useState(null);

  const selectVehicle = vehicleIdSelectionState => {
    setVehicleIdSelectionState(vehicleIdSelectionState.value);
    console.log(vehicleIdSelectionState);
  };

  if (vehicleIdSelectionState != null) {
    return (
      <>
        {/* <DashboardHeader /> */}
        <CarList test={selectVehicle} />
        <CarData />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        {/* <CarList action={handleChangeOnVehicleDropdown} /> */}
        {/* <DashboardHeader /> */}
        <CarList test={selectVehicle} />
        <div style={{ height: '500px', textAlign: 'center' }}>
          <h1>you must select a car</h1>
        </div>
        <Footer />
      </>
    );
  }
}
