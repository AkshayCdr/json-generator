import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormSchema } from "../component/jsonInput";

const isValidSchema = (schema: FormSchema): boolean => {
    const requiredFieldKeys = ["id", "type", "label", "required"];

    return schema.fields?.every((field) => {
        return (
            requiredFieldKeys.every((key) => key in field) &&
            ["text", "email", "select", "radio", "textarea"].includes(
                field.type
            )
        );
    });
};

type useFormOutputArgs = {
    formSchema: FormSchema | null;
};

export default function useFormOutput({ formSchema }: useFormOutputArgs) {
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState<any>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        setModalIsOpen(true);
        setFormData(data);
    };

    const isValid = formSchema && isValidSchema(formSchema);

    return {
        isModalOpen,
        formData,
        register,
        handleSubmit,
        errors,
        onSubmit,
        isValid,
        setModalIsOpen,
    };
}
