import { createStore } from './store';

interface Theme {
  active: boolean;
  backgroundColor: string;
  headerColor: string;
  button: string;
  TextColor: string;
  FieldColor: string;
  Border: string;
  modalBgColor: string;
  inputBg: string;
  HoverColor: string;
  fieldsBorder: string;
}

export const ThemeDefaultState: Theme = { 
    active: false, 
    backgroundColor: '#fff', 
    headerColor: '#ECEBEB' ,
    button: 'linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255))',
    TextColor: 'black',
    FieldColor: '#1a1a1a',
    Border: '3px solid #EEEEEE',
    modalBgColor: 'rgb(245,245,245)',
    inputBg: '#FAFAFA',
    HoverColor: '#222222',
    fieldsBorder: '2px solid #eee'
};




export const [useToggleTheme] = createStore(ThemeDefaultState);