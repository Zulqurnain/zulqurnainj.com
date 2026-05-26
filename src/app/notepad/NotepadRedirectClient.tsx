"use client";

import { useEffect } from "react";

export function NotepadRedirectClient({ target }: { target: string }) {
  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return (
    <>
      {/* React 19 hoists <meta> to <head> — instant redirect for crawlers + no-JS browsers */}
      <meta httpEquiv="refresh" content={`0;url=${target}`} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          gap: 12,
          fontFamily: "system-ui,sans-serif",
        }}
      >
        <p style={{ fontSize: 14, color: "#6b7a8d", margin: 0 }}>
          Redirecting to NotePackz…
        </p>
        <a href={target} style={{ fontSize: 14, color: "#2563eb" }}>
          Click here if not redirected
        </a>
      </div>
    </>
  );
}
