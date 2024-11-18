import FormOutput from "./formOutput";
import { FormSchema } from "./jsonInput";

type PreviewWebsiteArgs = {
    isSmallScreen: boolean;
    leftWidth: number;
    formSchema: FormSchema | null;
};

export default function PreviewWebsite({
    isSmallScreen,
    leftWidth,
    formSchema,
}: PreviewWebsiteArgs) {
    return (
        <section
            style={{
                height: isSmallScreen ? `${100 - leftWidth}%` : "100%",
                width: isSmallScreen ? "100%" : `${100 - leftWidth}%`,
            }}
            className="bg-white overflow-auto"
        >
            <div className="p-4">
                <h1 className="text-4xl mb-4 ">Preview</h1>
                <FormOutput formSchema={formSchema} />
            </div>
        </section>
    );
}
