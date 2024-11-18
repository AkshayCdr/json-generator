type DividerArgs = {
    setLeftWidth: React.Dispatch<React.SetStateAction<number>>;
    leftWidthRef: React.MutableRefObject<number>;
};

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

export default function Divider({ setLeftWidth, leftWidthRef }: DividerArgs) {
    return (
        <div
            className="hover:bg-blue-400 active:bg-blue-600 bg-gray-300 cursor-col-resize"
            style={{ width: "5px" }}
            onMouseDown={(event) =>
                handleMouseDown(event, setLeftWidth, leftWidthRef)
            }
        />
    );
}
