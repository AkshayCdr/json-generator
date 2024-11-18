import { useEffect, useRef, useState } from "react";
// import { FormSchema } from "../FormOutput/formOutput";

export type FormFieldType = {
    id: string;
    type: "text" | "email" | "select" | "radio" | "textarea";
    label: string;
    required: boolean;
    placeholder?: string;
    options?: Array<{ value: string; label: string }>;
    validation?: {
        pattern?: string;
        message?: string;
    };
};

export type FormSchema = {
    formTitle: string;
    formDescription: string;
    fields: FormFieldType[];
};

type JsonInputProps = {
    json: string;
    setJson: React.Dispatch<React.SetStateAction<string>>;

    setFormSchema: React.Dispatch<React.SetStateAction<FormSchema | null>>;
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

export default function JsonInput({
    json,
    setJson,
    setFormSchema,
}: JsonInputProps) {
    const [error, setError] = useState<Error | null>(null);
    const [lineCount, setLineCount] = useState(1);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const lineNumbersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const lines = (json.match(/\n/g) || []).length + 1;
        setLineCount(lines);
    }, [json]);

    const handleScroll = () => {
        if (lineNumbersRef.current && textareaRef.current) {
            lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
        }
    };

    return (
        <div className="flex flex-1 w-full h-full relative border-2">
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
                        handleJsonChange(
                            event,
                            setJson,
                            setError,
                            setFormSchema
                        )
                    }
                    onScroll={handleScroll}
                    className="p-4 text-textGrey dark:bg-backGroundDark dark:text-white flex flex-1 w-full h-full resize-none leading-6 border-l-2"
                    value={json}
                    aria-describedby="json-error"
                    spellCheck="false"
                ></textarea>
            </div>

            {error && (
                <label
                    id="json-error"
                    className="text-red-500 border-2 p-4 rounded-lg absolute bottom-4 bg-black opacity-80 left-1/2 transform -translate-x-1/2"
                    role="alert"
                >
                    {error.message}
                </label>
            )}
        </div>
    );
}
