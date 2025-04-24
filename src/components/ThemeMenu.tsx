import { forwardRef } from "react";

interface ThemeMenuProps {
  onThemeSelect: (theme: string) => void;
}

export const ThemeMenu = forwardRef<HTMLDivElement, ThemeMenuProps>(
  ({ onThemeSelect }, ref) => {
    const themes = [
      { name: "Default Mode", theme: "default" },
      { name: "Dark Mode", theme: "dark" },
      { name: "Harvest Green", theme: "harvest" },
      { name: "Buoyant Blue", theme: "buoyant" },
      { name: "Open Orange", theme: "orange" },
      { name: "Popping Purple", theme: "purple" },
    ];

    return (
      <div
        ref={ref}
        className="fixed top-[80px] right-4 z-50 w-[90%] sm:w-auto 
                 p-4 rounded-xl shadow-lg"
        style={{
          color: "var(--foreground)",
          fontFamily: "var(--font-family)",
          backgroundColor: "var(--theme-border-color)",
          border: "1px solid var(--theme-border-color)",
          zIndex: "50"
        }}
      >
        <h2 className="text-lg font-bold mb-2 theme-navbar-background">Choose Theme</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {themes.map(({ name, theme: t }) => (
            <button
              key={t}
              onClick={() => onThemeSelect(t)} // Pass the selected theme to the parent function
              className="text-sm font-medium p-2 rounded-md theme-highlight"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    );
  }
);

ThemeMenu.displayName = "ThemeMenu";
