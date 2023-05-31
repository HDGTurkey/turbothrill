import { IconButton } from "@mui/material";

//Context

//Icons
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useSite } from "./Context";

export const SwitchTheme = () => {
  const { theme, setTheme } = useSite();

  return (
    <>
      <button
        className={
          theme === "light"
            ? "bg-white"
            : "bg-gray-700 text-gray-300 border-black"
        }
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          height: "1.75rem",
          padding: "8px",
          verticalAlign: "middle",
        }}
      >
        {theme === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
      </button>
    </>
  );
};
