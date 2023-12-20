export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-center min-h-screen w-full my-10">
      <main>{children}</main>
    </div>
  );
}
