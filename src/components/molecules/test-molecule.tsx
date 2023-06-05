import TestAtom from '@components/atoms/test-atom';
import React from 'react';

const TestMolecule: React.FC = () => {
  return (
    <div className="w-full h-48 bg-pink-500 p-8">
      Molecule <TestAtom />
    </div>
  );
};

export default TestMolecule;
