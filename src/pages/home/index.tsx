import useTest from '@hooks/use-test';
import React from 'react';

const Home: React.FC = () => {
  const { testFunction } = useTest();

  React.useEffect(() => {
    testFunction(null);
  }, []);

  return <div>Home</div>;
};

export default Home;
