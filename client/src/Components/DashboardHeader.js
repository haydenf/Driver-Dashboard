import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getDashboardAllDataQuery } from '../queries/queries';
import LoadingSpinner from './LoadingSpinner';
import { Statistic, Header, Divider } from 'semantic-ui-react';

export default function DashboardHeader(props) {
  const { loading, error, data } = useQuery(getDashboardAllDataQuery, {
    variables: {
      vehicleId: `${props.state}`,
    },
  });
  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    return <p>Error! {error}</p>;
  } else {
    return (
      <div className="hero-img">
        <Header as="h1">Welcome back!</Header>
        <div className="hero-img-car-data">
          <h3>Car's Lifetime Statistics from GOFAR</h3>
          <Divider hidden />
          <Statistic.Group size="mini">
            <Statistic>
              <Statistic.Value>{data.car.trips.length}</Statistic.Value>
              <Statistic.Label> Total trips </Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                {data.car.travelDistanceTotal} KM
              </Statistic.Value>
              <Statistic.Label>Total Distance</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{data.car.timeInCar} </Statistic.Value>
              <Statistic.Label>Time in Car (hrs) </Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </div>
      </div>
    );
  }
}
