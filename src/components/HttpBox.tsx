import { type ReactNode } from "react";

export function HttpBox({
  children,
  title,
  flex,
}: {
  readonly children: ReactNode;
  readonly title?: string;
  readonly flex?: string;
}): ReactNode {
  return (
    <div style={{ flex: flex ?? "1 1 0", minWidth: 0 }}>
      {title != null && (
        <div
          style={{
            fontSize: "14px",
            color: "#94a3b8",
            marginBottom: "4px",
            fontFamily: '"Noto Sans JP", sans-serif',
          }}
        >
          {title}
        </div>
      )}
      <div className="http-box">{children}</div>
    </div>
  );
}
