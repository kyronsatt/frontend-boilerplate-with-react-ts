import TestMolecule from '@components/molecules/test-molecule';

const TestOrganism: React.FC = () => {
  return (
    <div className="w-full h-64 bg-blue-500 p-8">
      Organism <TestMolecule />
    </div>
  );
};

export default TestOrganism;
