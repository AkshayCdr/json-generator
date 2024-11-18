import useEditor from "../hooks/useEditor";
import TextArea from "./textArea";

export type FormFieldType = {
    id: string;
    type:
        | "text"
        | "email"
        | "select"
        | "radio"
        | "textarea"
        | "checkbox"
        | "tel"
        | "file"
        | "url"
        | "color"
        | "date"
        | "image"
        | "range"
        | "time";
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

export default function JsonInput({
    json,
    setJson,
    setFormSchema,
}: JsonInputProps) {
    const {
        lineNumbersRef,
        lineCount,
        textareaRef,
        setError,
        handleScroll,
        error,
    } = useEditor({ json });

    return (
        <div className="flex flex-1 w-full h-full relative border-2">
            <TextArea
                lineNumbersRef={lineNumbersRef}
                lineCount={lineCount}
                textareaRef={textareaRef}
                setJson={setJson}
                setError={setError}
                setFormSchema={setFormSchema}
                handleScroll={handleScroll}
                json={json}
            />
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
