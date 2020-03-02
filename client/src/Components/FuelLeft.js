import React from 'react';
// import LoadingSpinner from './LoadingSpinner';


export default function(props) {
    const refillData = props.refillData
    const trips = props.trips
    const refillStamp = new Date(refillData[0].timestamp)

  
    const filteredTrips = trips.filter((trips) => {
        return refillStamp <= new Date(trips.endTime)
    })  

    return (
      <div style={{ padding: '10px 140px 0px 140px' }}>
          {console.log(refillStamp)}
          {console.log(`this is from filter`,filteredTrips)}
          {console.log(totalLitres)}
      </div>
    );
  }
