import style from "./conference.module.css";

export default function ConferenceLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <section>{children}</section>
      </>
    );
  }