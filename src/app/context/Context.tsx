import { createContext, useContext, useEffect, useState } from 'react';

interface ContextProps {
   theme: string;
   setTheme: (theme: string) => void;
   lang: string;
   setLang: (lang: string) => void;
}

const defaultValue: ContextProps = {
   theme: 'light',
   setTheme: () => {},
   lang: 'en',
   setLang: () => {}
};

type Props = {
   children?: JSX.Element | JSX.Element[];
};

export const Provider = ({ children }: Props) => {
   useEffect(() => {
      setTheme(localStorage.getItem('theme') || 'light');
   }, []);

   const [theme, setTheme] = useState('light');
   const [lang, setLang] = useState('en');

   const data = {
      theme,
      setTheme,
      lang,
      setLang
   };

   //Local Storage Dark Theme Start
   useEffect(() => {
      localStorage.setItem('theme', theme);
   }, [theme]);

   //Local Storage Dark Theme End

   return (
      <Context.Provider value={data}>
         <div className="App" id={theme}>
            {children}
         </div>
      </Context.Provider>
   );
};

export const Context = createContext<ContextProps>(defaultValue);

export const useSite = () => useContext(Context);

export default Provider;
