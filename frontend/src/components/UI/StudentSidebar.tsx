import { SidebarMenu } from "./SidebarMenu";

export const StudentSidebar = ({ open }: { open: boolean }) => {
  return <SidebarMenu open={open} role="student" />;
};
