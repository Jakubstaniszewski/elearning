import { SidebarBody, SidebarLink } from "./Sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { LogoIcon } from "./LogoIcon";

export const SidebarMenu = ({ open }: { open: boolean }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Użytkownicy",
      href: "/users",
      icon: <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Ustawienia",
      href: "/settings",
      icon: <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Wyloguj się",
      href: "#",
      icon: <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
      onClick: () => {
        localStorage.removeItem("user");
        navigate("/");
      },
    },
  ];

  return (
    <SidebarBody className="justify-between gap-10">
      <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
        {open ? <Logo /> : <LogoIcon />}
        <div className="mt-8 flex flex-col gap-2">
          {links.map((link, idx) => (
            <SidebarLink
              key={idx}
              link={{
                ...link,
                active: location.pathname === link.href,
                onClick: link.onClick ? link.onClick : () => navigate(link.href),
              }}
            />
          ))}
        </div>
      </div>
      <div>
        <SidebarLink
          link={{
            label: "Twój profil",
            href: "#",
            icon: (
              <img
                src="https://assets.aceternity.com/manu.png"
                className="h-7 w-7 shrink-0 rounded-full"
                alt="Avatar"
              />
            ),
          }}
        />
      </div>
    </SidebarBody>
  );
};
