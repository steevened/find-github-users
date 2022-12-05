import React from 'react';
import { DotWave } from '@uiball/loaders';

const Loader = () => {
  return (
    <div className="flex fixed inset-0 items-center justify-center bg-black/75 backdrop-blur-sm h-full min-h-screen z-50">
      <DotWave size={47} speed={1} color="gray" />
    </div>
  );
};

export default Loader;
