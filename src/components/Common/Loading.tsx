import React from 'react';

function Loading() {
  return (
    <div className="flex justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
}

export default Loading;
