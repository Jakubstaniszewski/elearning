import { SidebarMenu } from "./SidebarMenu";

export const TeacherSidebar = ({ open }: { open: boolean }) => {
  return <SidebarMenu open={open} role="teacher" />;
};
