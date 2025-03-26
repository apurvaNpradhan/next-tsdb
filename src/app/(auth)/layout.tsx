import type React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-12 ">{children}</div>
  );
}
