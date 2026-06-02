import { ImageResponse } from "next/og";

export const alt = "VUK'AFRIK 2026 social preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "56px 64px",
          background:
            "linear-gradient(135deg, #050505 0%, #081a54 58%, #003cff 100%)",
          color: "white",
          fontFamily: "Montserrat, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(0,207,255,0.28), transparent 24%), radial-gradient(circle at bottom left, rgba(255,255,255,0.08), transparent 18%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "28px",
            padding: "44px 46px",
            background: "rgba(5, 5, 5, 0.24)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "18px",
                background: "linear-gradient(135deg, #00cfff 0%, #003cff 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: 800,
              }}
            >
              V
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "18px",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              <span>Congolese Computer Community</span>
              <span>Kinshasa, RDC</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "26px",
                color: "#00cfff",
                fontWeight: 700,
              }}
            >
              <span>25-27 August 2026</span>
              <span style={{ color: "rgba(255,255,255,0.45)" }}>|</span>
              <span style={{ color: "white" }}>Pullman Hotel, Kinshasa</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "76px",
                lineHeight: 0.95,
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              {"VUK'AFRIK 2026"}
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "900px",
                fontSize: "28px",
                lineHeight: 1.35,
                color: "rgba(255,255,255,0.84)",
              }}
            >
              {"Foire de l'Innovation et de l'Entrepreneuriat"}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                maxWidth: "760px",
                fontSize: "22px",
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.76)",
              }}
            >
              Innovation, entrepreneuriat et transformation economique :
              construire les nouvelles dynamiques de croissance africaines.
            </div>
            <div
              style={{
                display: "flex",
                padding: "14px 20px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.1)",
                fontSize: "18px",
                color: "#ffffff",
              }}
            >
              www.congocs.org
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
