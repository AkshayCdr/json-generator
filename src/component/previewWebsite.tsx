type PreviewWebsiteArgs = {
    isSmallScreen: boolean;
    leftWidth: number;
};

export default function PreviewWebsite({
    isSmallScreen,
    leftWidth,
}: PreviewWebsiteArgs) {
    return (
        <section
            style={{
                height: isSmallScreen ? `${100 - leftWidth}%` : "100%",
                width: isSmallScreen ? "100%" : `${100 - leftWidth}%`,
            }}
            className="bg-white overflow-auto"
        ></section>
    );
}
