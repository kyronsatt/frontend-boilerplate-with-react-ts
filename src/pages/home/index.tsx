import React from 'react';

import useTest from '@hooks/use-test';

import TestOrganism from '@components/organisms/test-organism';

const Home: React.FC = () => {
  const { testFunction } = useTest();

  React.useEffect(() => {
    testFunction(null);
  }, []);

  return (
    <div>
      Home <TestOrganism />
    </div>
  );
};

export default Home;
