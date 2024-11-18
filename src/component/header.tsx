import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

type HeaderArgs = {
    dark: boolean;
    darkModeHandler: () => void;
};

export default function Header({ dark, darkModeHandler }: HeaderArgs) {
    return (
        <header className="flex justify-between p-3 dark:bg-backGroundDark shrink-0">
            <h1 className="text-3xl font-bold dark:text-white">Json to Form</h1>
            <button
                onClick={darkModeHandler}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                {dark ? (
                    <FaMoon className="dark:text-white" />
                ) : (
                    <MdOutlineWbSunny />
                )}
            </button>
        </header>
    );
}
