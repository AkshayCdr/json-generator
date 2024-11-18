type ModalArgs = {
    formData: any;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const downloadJson = (formData: any) => {
    const blob = new Blob([JSON.stringify(formData, null, 2)], {
        type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formData.json";
    a.click();
    URL.revokeObjectURL(url);
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
                    <button
                        onClick={() => downloadJson(formData)}
                        className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2"
                    >
                        Download Data
                    </button>
                </div>
            </div>
        </section>
    );
}
