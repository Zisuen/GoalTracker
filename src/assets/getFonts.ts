type PT_SANS =
  | 'PTSans-Bold'
  | 'PTSans-BoldItalic'
  | 'PTSans-Italic'
  | 'PTSans-Regular';

type GET_FONTS = {
  fontFamily?: PT_SANS;
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};

const getFonts = ({
  fontFamily = 'PTSans-Regular',
  fontSize = 15,
  fontWeight = 'normal',
}: GET_FONTS) => {
  const newFont = {
    fontFamily,
    fontSize,
    fontWeight,
  };
  return newFont;
};

export default getFonts;
