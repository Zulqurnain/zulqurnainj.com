import type { Metadata } from "next";
import { NotepadRedirectClient } from "./NotepadRedirectClient";

const TARGET = "https://tools.zulqurnainj.com/notepackz";

export const metadata: Metadata = {
  title: "NotePackz — Free Online Notepad",
  alternates: { canonical: TARGET },
  robots: { index: false, follow: true },
};

export default function NotepadRedirectPage() {
  return <NotepadRedirectClient target={TARGET} />;
}
