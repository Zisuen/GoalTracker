export type THEME = {
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
  inactive: string;
  placeholderText: string;
};

export const dark: THEME = {
  background: '#1b1a3b',
  primary: '#2f2e66',
  secondary: '#42c6d2',
  tertiary: '#214229',
  text: '#ffffff',
  inactive: 'rgba(255, 255, 255, 0.3)',
  placeholderText: '#585858',
};

export const light: THEME = {
  background: '#a2dbff',
  primary: '#7fb5d7',
  secondary: '#dd5555',
  tertiary: '#d782c8',
  text: '#000000',
  inactive: 'rgba(0, 0, 0, 0.5)',
  placeholderText: '#727272',
};
