//Context
import { useSite } from "./Context";

export const SwitchLang = () => {
  const { theme, setLang } = useSite();

  return (
    <>
      <div className="item relative ml-4 w-full lg:max-w-sm  ">
        <select
          onChange={(e) => {
            const selectedLang = e.target.value;
            setLang(selectedLang);
          }}
          className={`mx-auto  w-full appearance-none rounded-md border p-1 pl-5 shadow-sm outline-none  ${
            theme === "light"
              ? "bg-white"
              : "border-black bg-gray-700 text-gray-300"
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
