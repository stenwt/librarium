import { useEffect } from "react";
import spectrocloudLogo from "@site/static/assets/spectrocloud-logo.png";

export const MENDABLE_SCRIPT_URL =
  "https://unpkg.com/@mendable/search@0.0.125/dist/umd/mendable-bundle.min.js";

export default function MendableAIWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = MENDABLE_SCRIPT_URL;
    script.async = true;

    document.body.appendChild(script);
    script.onload = () => {
      if (window.Mendable) {
        window.Mendable.initialize({
          anon_key: "c89d7afc-d41c-445c-8331-628d8883c55c",
          type: "floatingButton",
          dialogPlaceholder: "What is Palette?",
          floatingButtonStyle: {
            color: "#FFFFFF",
            backgroundColor: "#3E4FB5",
            icon: spectrocloudLogo,
          },
          style: { accentColor: "#3E4FB5" },
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
