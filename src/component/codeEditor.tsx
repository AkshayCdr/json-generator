type CodeEditorArgs = {
    isSmallScreen: boolean;
    leftWidth: number;
};

export default function CodeEditor({
    isSmallScreen,
    leftWidth,
}: CodeEditorArgs) {
    return (
        <section
            style={{
                height: isSmallScreen ? `${leftWidth}%` : "100%",
                width: isSmallScreen ? "100%" : `${leftWidth}%`,
            }}
            className="relative flex bg-black dark:bg-backGroundDark"
        ></section>
    );
}
