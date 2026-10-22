import Home from "@/pages/Home";
import WhatsAppButton from "./whatsapp/WhatsAppButton";
import "./i18n";
import ScrollIndicator from "./ScrollIndicator";

function App() {
  return (
    <>
      <Home />
      <WhatsAppButton />
      <ScrollIndicator />
      {/* Modal global */}
    </>
  );
}

export default App;
