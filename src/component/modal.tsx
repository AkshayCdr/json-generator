type ModalArgs = {
    formData: any;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ formData, setModalIsOpen }: ModalArgs) {
    return (
        <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 max-w-md">
                <h1 className="text-lg font-semibold mb-4">Form Data</h1>
                <p className="mb-4">{JSON.stringify(formData, null, 2)}</p>
                <div className="flex justify-between">
                    <button
                        onClick={() => setModalIsOpen(false)}
                        className="text-white bg-red-500 hover:bg-red-600 rounded-lg px-4 py-2"
                    >
                        Close
                    </button>
                </div>
            </div>
        </section>
    );
}
