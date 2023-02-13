import React from 'react';
import { useGetEnginesQuery } from './graphql/generated/schema';

export const Engines: React.FC = () => {
  const { data, loading, error } = useGetEnginesQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <div>
      <h2>Engines</h2>
      <ul>
        {data.rockets.map(engine => (
          <li key={engine.id}>{engine.name}</li>
        ))}
      </ul>
    </div>
  );
};