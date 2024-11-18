import { useEffect, useRef, useState } from "react";
import "./App.css";

const handleMouseDown = (
    e: React.MouseEvent,
    setLeftWidth: React.Dispatch<React.SetStateAction<number>>,
    leftWidthRef: React.RefObject<number>
) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = leftWidthRef.current;
    const isSmallScreen = window.innerWidth < 640;

    const handleMouseMove = (moveEvent: MouseEvent) => {
        moveEvent.preventDefault();

        if (isSmallScreen) {
            const deltaY = moveEvent.clientY - startY;
            const newHeight = startWidth + (deltaY / window.innerHeight) * 100;
            setLeftWidth(Math.min(Math.max(newHeight, 30), 70));
        } else {
            const deltaX = moveEvent.clientX - startX;
            const newWidth = startWidth + (deltaX / window.innerWidth) * 100;
            setLeftWidth(Math.min(Math.max(newWidth, 30), 70));
        }
    };

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.body.style.cursor = "default";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = isSmallScreen ? "row-resize" : "col-resize";
};

export default function App() {
    const [leftWidth, setLeftWidth] = useState(50);
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

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <main className="flex flex-col sm:flex-row flex-1 overflow-hidden"></main>
        </div>
    );
}
