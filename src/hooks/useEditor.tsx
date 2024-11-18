import { useEffect, useRef, useState } from "react";

export default function useEditor({ json }: { json: string }) {
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

    return {
        lineNumbersRef,
        lineCount,
        textareaRef,
        setError,
        handleScroll,
        error,
    };
}
