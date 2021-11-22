import { useEffect, useState } from 'React';

export const useWindowHeight = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
};
