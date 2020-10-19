import React from 'react';
function useMultiplier({ initialNum = 1 } = {}) {
  const [num, setNum] = React.useState(initialNum);
  const multiply = factor => setNum( initialNum * factor );
  return { num, multiply }
}
export {useMultiplier};
