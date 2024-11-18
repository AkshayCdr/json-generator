import { useForm } from "react-hook-form";

export default function FormOutput() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        alert(data);
    };
    return (
        <form
            className="flex flex-1 flex-col border-b-gray-100 p-10 max-w-2xl shadow-2xl gap-1"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 id="form-title" className="text-2xl font-bold">
                {formSchema.formTitle}
            </h1>
            <button
                className="mx-auto text-white w-24 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none "
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}
