//Context
import { useSite } from './Context';

export const SwitchLang = () => {
   const { theme, setLang } = useSite();

   return (
      <>
         <div className="ml-4 relative w-full lg:max-w-sm item  ">
            <select
               onChange={(e) => {
                  const selectedLang = e.target.value;
                  setLang(selectedLang);
               }}
               className={`w-full  p-1 pl-5 border rounded-md shadow-sm outline-none appearance-none mx-auto  ${
                  theme === 'light' ? 'bg-white' : 'bg-gray-700 text-gray-300 border-black'
               }`}
            >
               <option value="en">English</option>
               <option value="tr">Türkçe</option>
               <option value="rs">Русский</option>
               <option value="fr">Français</option>
            </select>
         </div>
      </>
   );
};
export default SwitchLang;
