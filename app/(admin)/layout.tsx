export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-root bg-[var(--background)] min-h-screen">
      {children}
    </div>
  );
}
