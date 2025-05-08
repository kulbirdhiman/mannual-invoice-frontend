'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Users,
  FilePlus2,
  BarChart2,
  Bell,
  Settings,
  ScrollText,
  User,
  LogOut,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';

const menu = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  {
    label: 'Invoices',
    icon: FileText,
    children: [
      { label: 'Create Invoice', path: '/admin/invoices/create', icon: PlusCircle },
      { label: 'View Invoices', path: '/admin/invoices', icon: FileText },
    ],
  },
  { label: 'Users', path: '/admin/users', icon: Users },
  { label: 'Templates', path: '/admin/templates', icon: FilePlus2 },
  { label: 'Reports', path: '/admin/reports', icon: BarChart2 },
  { label: 'Notifications', path: '/admin/notifications', icon: Bell },
  { label: 'Settings', path: '/admin/settings', icon: Settings },
  { label: 'Audit Logs', path: '/admin/audit-logs', icon: ScrollText },
  { label: 'Profile', path: '/admin/profile', icon: User },
  { label: 'Logout', path: '/logout', icon: LogOut, danger: true },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleMenu = (label: string) =>
    setExpanded(prev => (prev === label ? null : label));

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden p-4 bg-black text-white  flex justify-between items-center">
        <h2 className="text-xl font-bold">Admin</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-40 h-screen w-64 bg-[#111827] text-white transform ${
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } transition-transform duration-200 ease-in-out`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
          <nav className="space-y-2">
            {menu.map(item => {
              const Icon = item.icon;
              const isParent = !!item.children;
              const isExpanded = expanded === item.label;

              if (isParent) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => toggleMenu(item.label)}
                      className="flex w-full items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 text-gray-300"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                      <span className="ml-auto">{isExpanded ? <ChevronDown /> : <ChevronRight />}</span>
                    </button>
                    {isExpanded && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.children.map(child => {
                          const ChildIcon = child.icon;
                          const isActive = pathname === child.path;
                          return (
                            <Link
                              key={child.path}
                              href={child.path}
                              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                                isActive
                                  ? 'bg-gray-800 text-white font-semibold'
                                  : 'hover:bg-gray-700 text-gray-300'
                              }`}
                            >
                              <ChildIcon className="w-4 h-4" />
                              <span>{child.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    item.danger
                      ? 'text-red-500 hover:bg-red-600 hover:text-white'
                      : isActive
                      ? 'bg-gray-800 text-white font-semibold'
                      : 'hover:bg-gray-700 text-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
