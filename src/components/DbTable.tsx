import { type ReactNode } from "react";

export function DbTable({
  tableName,
  columns,
  rows,
}: {
  readonly tableName: string;
  readonly columns: readonly string[];
  readonly rows: readonly (readonly ReactNode[])[];
}): ReactNode {
  return (
    <div>
      <div
        style={{
          fontSize: "14px",
          color: "#94a3b8",
          marginBottom: "4px",
          fontFamily: '"Fira Code", monospace',
        }}
      >
        {tableName}
      </div>
      <table className="db-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
