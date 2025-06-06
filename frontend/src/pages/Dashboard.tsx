import React, { useState } from "react";
import { Sidebar } from "../components/UI/Sidebar";
import { SidebarMenu } from "../components/UI/SidebarMenu";
import { cn } from "../utils/cn";
import { useLocation } from "react-router-dom";

export function DashboardPage() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarMenu open={open} />
      </Sidebar>

      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-white mb-4">
          {location.pathname === "/dashboard" && "Panel główny"}
          {location.pathname === "/users" && "Lista użytkowników"}
          {location.pathname === "/settings" && "Ustawienia konta"}
        </h1>

        <p className="text-neutral-600 dark:text-neutral-300">
          {location.pathname === "/dashboard" && "Witamy w panelu administratora."}
          {location.pathname === "/users" && "Tutaj pojawią się dane użytkowników."}
          {location.pathname === "/settings" && "Tu skonfigurujesz swój profil."}
        </p>
      </div>
    </div>
  );
}
