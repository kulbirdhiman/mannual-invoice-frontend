import AdminSidebar from '@/components/layout/admin/Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-0  bg p-4">{children}</main>
    </div>
  );
}
