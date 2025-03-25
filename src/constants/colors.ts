export type Base1 = {
  default: string;
  light1: string;
  light2: string;
  dark1: string;
  dark2: string;
  dark3: string;
  dark4: string;
};

export type Base2 = {
  default: string;
  dark1: string;
  light3: string;
  light4: string;
  light5: string;
  light6: string;
  light7: string;
};

export type Neutral = {
  neutral1: string;
  neutral2: string;
  neutral3: string;
  neutral4: string;
  neutral5: string;
  neutral6: string;
  neutral7: string;
  neutral8: string;
  neutral9: string;
  neutral10: string;
};

export type Accents = {
  bubble1: string;
  bubble2: string;
  Highlight1: string;
  Highlight2: string;
};

export type Success = {
  main: string;
  light: string;
};

export type Error = {
  main: string;
  light: string;
};

export type Warning = {
  main: string;
};

export type Info = {
  main: string;
};

export type Link = {
  main: string;
  light: string;
};

type Colors = {
  base1: Base1;
  base2: Base2;
  neutral: Neutral;
  accents: Accents;
  success: Success;
  error: Error;
  warning: Warning;
  info: Info;
  link: Link;
};

export const colors: Colors = {
  base1: {
    default: '#3366CC',
    light1: '#5C85D6',
    light2: '#A1B9E8',
    dark1: '#254A99',
    dark2: '#244891',
    dark3: '#1C3870',
    dark4: '#152B56'
  },
  base2: {
    default: '#487CB5',
    dark1: '#38608C',
    light3: '#65AFFF',
    light4: '#98C9FF',
    light5: '#CFE6FF',
    light6: '#F0F7FF',
    light7: '#A6A6A6'
  },
  neutral: {
    neutral1: '#383C42',
    neutral2: '#4B4F58',
    neutral3: '#5E636E',
    neutral4: '#707784',
    neutral5: '#868C98',
    neutral6: '#9BA0AA',
    neutral7: '#B2B6BD',
    neutral8: '#C8CBD0',
    neutral9: '#DEE0E3',
    neutral10: '#F4F5F6'
  },

  accents: {
    bubble1: '#C8D051',
    bubble2: '#E6E9AF',
    Highlight1: '#E2911A',
    Highlight2: '#FDE1B9'
  },
  success: {
    main: '#46BB2F',
    light: '#A6E599'
  },
  error: {
    main: '#9C2116',
    light: '#EF978F'
  },
  warning: {
    main: '#FF9F1C'
  },
  info: {
    main: '#B8DAFF'
  },
  link: {
    main: '#3366CC',
    light: '#0D0D78'
  }
};
