import { FormSchema } from "./jsonInput";
import FormField from "./formFields";
import Modal from "./modal";
import useFormOutput from "../hooks/useFormOutput";

type FormInputProps = {
    formSchema: FormSchema | null;
};

export default function FormOutput({ formSchema }: FormInputProps) {
    const {
        isValid,
        handleSubmit,
        onSubmit,
        isModalOpen,
        register,
        errors,
        formData,
        setModalIsOpen,
    } = useFormOutput({ formSchema });

    return (
        <div className=" flex justify-center">
            {isValid && formSchema && (
                <form
                    className="flex flex-1 flex-col border-b-gray-100 p-10 max-w-2xl shadow-2xl gap-1 rounded-lg"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 id="form-title" className="text-2xl font-bold">
                        {formSchema.formTitle}
                    </h1>
                    <p className="mb-3">{formSchema.formDescription}</p>
                    {formSchema.fields?.map((field) => (
                        <FormField
                            key={field.id}
                            field={field}
                            register={register}
                            errors={errors}
                        />
                    ))}
                    <button
                        className="mx-auto text-white w-24 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none "
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            )}
            {!isValid && (
                <h1 className="text-lg md:text-2xl text-red-700 font-bold border-2 p-4 rounded-lg shadow-lg">
                    ! Enter valid JSON to generate the form
                </h1>
            )}
            {isModalOpen && (
                <Modal formData={formData} setModalIsOpen={setModalIsOpen} />
            )}
        </div>
    );
}
