const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  };

  export const device = {   
    desktop: `(max-width: ${sizes.desktop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    laptop: `(max-width: ${sizes.laptop})`,
    tablet: `(max-width: ${sizes.tablet})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileS: `(max-width: ${sizes.mobileS})`,
  };