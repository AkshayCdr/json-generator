import "./App.css";
import Header from "./component/header";
import CodeEditor from "./component/codeEditor";
import Divider from "./component/divider";
import PreviewWebsite from "./component/previewWebsite";
import useAppState from "./hooks/useAppState";

export default function App() {
    const {
        dark,
        darkModeHandler,
        json,
        setJson,
        setFormSchema,
        isSmallScreen,
        leftWidth,
        setLeftWidth,
        leftWidthRef,
        formSchema,
    } = useAppState();

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <Header dark={dark} darkModeHandler={darkModeHandler} />

            <main className="flex flex-col sm:flex-row flex-1 overflow-hidden">
                <CodeEditor
                    json={json}
                    setJson={setJson}
                    setFormSchema={setFormSchema}
                    isSmallScreen={isSmallScreen}
                    leftWidth={leftWidth}
                />

                <Divider
                    leftWidthRef={leftWidthRef}
                    setLeftWidth={setLeftWidth}
                />

                <PreviewWebsite
                    isSmallScreen={isSmallScreen}
                    leftWidth={leftWidth}
                />
            </main>
        </div>
    );
}
