export default function JsonInput() {
    return (
        <div>
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
