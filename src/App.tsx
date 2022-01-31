import { tw } from "twind";
import { setup } from "@twind/tailwind";

setup({});

export default function App() {
  return (
    <div className={tw("max-w-prose")}>
      <h1 className={tw("font-extrabold text-gray-900 text-3xl")}>
        Hello CodeSandbox
      </h1>
      <h2 className={tw("font-bold text-gray-600 text-xl")}>
        Start editing to see some magic happen!
      </h2>
    </div>
  );
}
