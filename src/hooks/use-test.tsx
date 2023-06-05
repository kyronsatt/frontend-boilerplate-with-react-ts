import { useContextSelector } from 'use-context-selector';

import { TestContext } from '@contexts/test';
import { ITestContext } from '@contexts/test/types';

const useTest = (): ITestContext => {
  const testFunction = useContextSelector(TestContext, (test) => test.testFunction);

  return {
    testFunction,
  };
};

export default useTest;
