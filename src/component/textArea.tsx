import { FormSchema } from "./jsonInput";

type TextAreaArgs = {
    lineNumbersRef: React.RefObject<HTMLDivElement>;
    lineCount: number;
    textareaRef: React.RefObject<HTMLTextAreaElement>;
    setJson: React.Dispatch<React.SetStateAction<string>>;
    setError: React.Dispatch<React.SetStateAction<Error | null>>;
    setFormSchema: React.Dispatch<React.SetStateAction<FormSchema | null>>;
    handleScroll: () => void;
    json: string;
};

type ValidateJson = (input: string) => [FormSchema | null, Error | null];

const validateJson: ValidateJson = (input) => {
    try {
        const formSchema = JSON.parse(input);

        return [formSchema, null];
    } catch (error) {
        return [null, new Error("Invalid JSON: " + (error as Error).message)];
    }
};

const handleJsonChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    setJson: React.Dispatch<React.SetStateAction<string>>,
    setError: React.Dispatch<React.SetStateAction<Error | null>>,
    setFormSchema: React.Dispatch<React.SetStateAction<FormSchema | null>>
) => {
    const input = event.target.value;

    if (!input.length) {
        setJson("");
        setError(null);
        setFormSchema(null);
        return;
    }

    setJson(input);
    const [parsedSchema, err] = validateJson(input);

    if (err) {
        setError(err);
        setFormSchema(null);
        return;
    }

    setFormSchema(parsedSchema);
    setError(null);
};

export default function TextArea({
    lineNumbersRef,
    lineCount,
    textareaRef,
    setJson,
    setError,
    setFormSchema,
    handleScroll,
    json,
}: TextAreaArgs) {
    return (
        <div className="flex flex-1 border-2 relative">
            <div
                ref={lineNumbersRef}
                className="select-none p-4 pr-2 text-gray-500 bg-gray-100 dark:bg-gray-800 overflow-hidden"
                style={{
                    width: "3rem",
                    textAlign: "right",
                    userSelect: "none",
                }}
            >
                {Array.from({ length: lineCount }, (_, i) => (
                    <div key={i + 1} className="leading-6">
                        {i + 1}
                    </div>
                ))}
            </div>

            <textarea
                ref={textareaRef}
                name="json-input"
                onChange={(event) =>
                    handleJsonChange(event, setJson, setError, setFormSchema)
                }
                onScroll={handleScroll}
                className="p-4 text-textGrey dark:bg-backGroundDark dark:text-white flex flex-1 w-full h-full resize-none leading-6 border-l-2"
                value={json}
                aria-describedby="json-error"
                spellCheck="false"
            ></textarea>
        </div>
    );
}
