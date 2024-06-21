import React from 'react'

const useMedia = (media) => {
  const [match, setMatch] = React.useState(true);

  React.useEffect(() => {
    function checkMediaQuery() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    checkMediaQuery();
    window.addEventListener('resize', checkMediaQuery);
    return () => {
      window.removeEventListener('resize', checkMediaQuery);
    };
  }, [media]);

  return match;
};

export default useMedia