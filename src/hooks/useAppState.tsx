import { useEffect, useRef, useState } from "react";

export default function useAppState() {
    const [dark, setDark] = useState(false);
    const [json, setJson] = useState("");
    const [leftWidth, setLeftWidth] = useState(50);
    const [formSchema, setFormSchema] = useState<FormSchema | null>(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

    const leftWidthRef = useRef(leftWidth);
    leftWidthRef.current = leftWidth;

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    };

    return {
        dark,
        setDark,
        json,
        setJson,
        leftWidth,
        setLeftWidth,
        formSchema,
        setFormSchema,
        isSmallScreen,
        setIsSmallScreen,
        darkModeHandler,
        leftWidthRef,
    };
}
