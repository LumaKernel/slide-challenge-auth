import { type ReactNode } from "react";

export function LoginForm({
  label,
}: {
  readonly label?: string;
}): ReactNode {
  return (
    <div
      style={{
        background: "#f8fafc",
        border: "1px solid #cbd5e1",
        borderRadius: "12px",
        padding: "20px 24px",
        width: "280px",
        fontFamily: '"Noto Sans JP", sans-serif',
      }}
    >
      {label != null && (
        <div
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#0f172a",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          {label}
        </div>
      )}
      <div style={{ marginBottom: "8px" }}>
        <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "2px" }}>
          User ID
        </div>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
            padding: "6px 10px",
            fontSize: "14px",
            color: "#334155",
          }}
        >
          alice
        </div>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "2px" }}>
          Password
        </div>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
            padding: "6px 10px",
            fontSize: "14px",
            color: "#334155",
          }}
        >
          ********
        </div>
      </div>
      <div
        style={{
          background: "#38bdf8",
          color: "#fff",
          borderRadius: "6px",
          padding: "6px",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        Login
      </div>
    </div>
  );
}
