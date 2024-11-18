import JsonInput, { FormSchema } from "./jsonInput";

type CodeEditorArgs = {
    json: string;
    setJson: React.Dispatch<React.SetStateAction<string>>;
    setFormSchema: React.Dispatch<React.SetStateAction<FormSchema | null>>;
    isSmallScreen: boolean;
    leftWidth: number;
};

export default function CodeEditor({
    json,
    setJson,
    setFormSchema,
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
        >
            <JsonInput
                json={json}
                setJson={setJson}
                setFormSchema={setFormSchema}
            />
        </section>
    );
}
