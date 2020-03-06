import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getDashboardAllDataQuery } from '../queries/queries';
import { Card } from 'semantic-ui-react';
import LoadingSpinner from './LoadingSpinner';
import LastFillUpCard from './Card/LastFillUpCard';
import FuelLeftCard from './Card/FuelLeftCard';
import DiagnosticCard from './Card/DiagnosticCard';
import BusinessRatioCard from './Card/BusinessRatioCard';
import AverageSpeedCard from './Card/AverageSpeedCard';
import TravelDistanceTotalCard from './Card/TravelDistanceTotalCard';
import TimeInCarCard from './Card/TimeInCarCard';
import EmissionsCard from './Card/EmissionsCard';
import FuelEconomyCard from './Card/FuelEconomyCard';
import GoogleMap from './GoogleMap/GoogleMap';
import AntdTableComponent from './AntdTable/AntdTableComponent';

export default function CarData(props) {
  const { loading, error, data } = useQuery(getDashboardAllDataQuery, {
    variables: {
      vehicleId: props.vehicleIdState.value,
    },
  });


  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    return <p>Error! {error}</p>;
  } else {
    return (
      <div className="ui container">

        <Card.Group>
          <LastFillUpCard lastFillUpData={data.car.refillData} />
          <FuelLeftCard
            fuelLeft={data.car.kmsLeft}
            travelSince={data.car.recentTrip}
            lastRefillOdo={data.car.refillData}
            currentOdo={data.car.odometer}
            refillData={data.car.refillData} 
            trips={data.car.trips}
            allData={data.car}
          />
          <DiagnosticCard diagnosticIssue={data.car.diagnosticIssue} />
          <BusinessRatioCard
            businessRatio={data.car.businessRatio}
            businessTotal={data.car.businessTotal}
          />
          <AverageSpeedCard speed={data.car.averageSpeed} />
          <TravelDistanceTotalCard
              distanceTotal={data.car.travelDistanceTotal}
              distanceTotalThisYear={data.car.travelDistanceThisYear}
            />
          <EmissionsCard emission={data.car.emissions} />
        </Card.Group>
        <div className="ui container">
          <GoogleMap trips={data.car.trips} />
        </div>
        <div className="ui container">
          <AntdTableComponent tripData={data.car.trips} />
        </div>
      </div>
    );
  }
}
