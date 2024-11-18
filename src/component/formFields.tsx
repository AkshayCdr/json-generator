import { FormFieldType } from "./jsonInput";

export default function FormField({
    field,
    register,
    errors,
}: {
    field: FormFieldType;
    register: any;
    errors: any;
}) {
    const { id, type, label, required, placeholder, options, validation } =
        field;

    const inputBaseStyles =
        "w-full sm:w-2/3 bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ";

    return (
        <div className="form-field mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
            <label
                className="text-sm sm:text-base font-medium w-full sm:w-1/3"
                htmlFor={id}
            >
                {label}
                {required && <span className="text-red-600 ml-1">*</span>}
            </label>

            <div className="w-full sm:w-2/3">
                {(() => {
                    switch (type) {
                        case "text":
                        case "email":
                        case "checkbox":
                        case "tel":
                        case "file":
                        case "url":
                            return (
                                <input
                                    id={id}
                                    type={type}
                                    placeholder={placeholder}
                                    className={inputBaseStyles}
                                    {...register(id, {
                                        required:
                                            required &&
                                            "This field is required",
                                        pattern: validation?.pattern
                                            ? {
                                                  value: new RegExp(
                                                      validation.pattern
                                                  ),
                                                  message: validation.message,
                                              }
                                            : undefined,
                                    })}
                                />
                            );

                        case "select":
                            return (
                                <select
                                    id={id}
                                    className={inputBaseStyles}
                                    {...register(id, {
                                        required:
                                            required &&
                                            "This field is required",
                                    })}
                                >
                                    <option value="">Select an option</option>
                                    {options?.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            );

                        case "radio":
                            return (
                                <div className="flex flex-col gap-2">
                                    {options?.map((option) => (
                                        <div
                                            key={option.value}
                                            className="flex items-center gap-2"
                                        >
                                            <input
                                                id={`${id}-${option.value}`}
                                                type="radio"
                                                value={option.value}
                                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                {...register(id, {
                                                    required:
                                                        required &&
                                                        "This field is required",
                                                })}
                                            />
                                            <label
                                                htmlFor={`${id}-${option.value}`}
                                                className="text-sm sm:text-base "
                                            >
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            );

                        case "textarea":
                            return (
                                <textarea
                                    id={id}
                                    placeholder={placeholder}
                                    className={`${inputBaseStyles} min-h-[100px] resize-vertical`}
                                    {...register(id, {
                                        required:
                                            required &&
                                            "This field is required",
                                    })}
                                />
                            );

                        default:
                            return null;
                    }
                })()}

                {errors[id] && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors[id]?.message}
                    </p>
                )}
            </div>
        </div>
    );
}
