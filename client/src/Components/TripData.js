import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getTripDataQuery } from '../queries/queries';

import { Card } from 'semantic-ui-react';
import LoadingSpinner from './LoadingSpinner';

export default function TripData() {
  const { loading, error, data } = useQuery(getTripDataQuery, {
    variables: {
      tripId: `476f4661-72da-5472-6970-49640000000f`,
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    return <p>Error! {error}</p>;
  } else {
    return (
      <div className="ui container">
        {console.log(data)}
        {console.log(data.car.tripDetails)}
        <Card.Group></Card.Group>
      </div>
    );
  }
}
