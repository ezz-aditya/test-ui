import React from "react";
import docs from "../../data/doc.js";

type DocEntry = {
  title?: string;
  description?: string;
  preview?: React.ComponentType<any>;
  previewProps?: Record<string, any>;
};

const entries = Object.entries(
  docs as Record<string, DocEntry>
).filter(([, item]) => Boolean(item.preview));

export default function TypeScriptTest() {
  return (
    <main style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>TatvaUI + React + TypeScript Test</h1>
      <p>
        Components found: {entries.length}. Check each preview for rendering
        errors or unexpected behavior.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {entries.map(([slug, item]) => {
          const Component = item.preview;

          return (
            <section
              key={slug}
              style={{
                border: "1px solid #ddd",
                borderRadius: 12,
                padding: 16,
                minWidth: 0,
              }}
            >
              <h2 style={{ fontSize: 18 }}>
                {item.title ?? slug}
              </h2>
              <p style={{ color: "#666", fontSize: 12 }}>{slug}</p>

              <div
                style={{
                  minHeight: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  padding: 8,
                }}
              >
                {Component ? (
                  <Component {...(item.previewProps ?? {})} />
                ) : (
                  <p>No preview available</p>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
