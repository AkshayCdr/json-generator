import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./component/header";
import CodeEditor from "./component/codeEditor";
import Divider from "./component/divider";
import PreviewWebsite from "./component/previewWebsite";

export default function App() {
    const [leftWidth, setLeftWidth] = useState(50);
    const [dark, setDark] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    };

    const leftWidthRef = useRef(leftWidth);
    leftWidthRef.current = leftWidth;

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <Header dark={dark} darkModeHandler={darkModeHandler} />

            <main className="flex flex-col sm:flex-row flex-1 overflow-hidden">
                <CodeEditor
                    isSmallScreen={isSmallScreen}
                    leftWidth={leftWidth}
                />

                <Divider
                    leftWidthRef={leftWidthRef}
                    setLeftWidth={setLeftWidth}
                />

                <PreviewWebsite
                    isSmallScreen={isSmallScreen}
                    leftWidth={leftWidth}
                />
            </main>
        </div>
    );
}
