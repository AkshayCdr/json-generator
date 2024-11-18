import { useState } from "react";

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

    return (
        <div>
            <textarea
                name="json-input"
                onChange={(event) =>
                    handleJsonChange(event, setJson, setError, setFormSchema)
                }
                className="p-4 text-textGrey dark:bg-backGroundDark dark:text-white flex flex-1 w-full h-full resize-none leading-6 border-l-2"
                value={json}
                aria-describedby="json-error"
                spellCheck="false"
            ></textarea>

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
