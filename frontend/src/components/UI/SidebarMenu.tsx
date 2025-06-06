import { SidebarBody, SidebarLink } from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { LogoIcon } from "./LogoIcon";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

type Props = {
  open: boolean;
  role: "teacher" | "student";
};

export const SidebarMenu = ({ open, role }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const teacherLinks = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconBrandTabler className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Użytkownicy",
      href: "/users",
      icon: <IconUserBolt className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Ustawienia",
      href: "/settings",
      icon: <IconSettings className="h-5 w-5 shrink-0" />,
    },
    {
        label: "Wyloguj się",
        href: "", // usuń #
        icon: <IconArrowLeft className="h-5 w-5 shrink-0 text-red-500" />,
        onClick: (e?: React.MouseEvent) => {
            e?.preventDefault(); // zabezpieczenie
            localStorage.removeItem("user");
            navigate("/");
        },
    }

  ];

  const studentLinks = [
    {
      label: "Moje lekcje",
      href: "/dashboard",
      icon: <IconBrandTabler className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Ustawienia",
      href: "/settings",
      icon: <IconSettings className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Wyloguj się",
      href: "#",
      icon: <IconArrowLeft className="h-5 w-5 shrink-0 text-red-500" />,
      onClick: () => {
        localStorage.removeItem("user");
        navigate("/");
      },
    },
  ];

  const links = role === "teacher" ? teacherLinks : studentLinks;

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
    </SidebarBody>
  );
};
