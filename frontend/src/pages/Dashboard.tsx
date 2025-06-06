import React, { useEffect, useState } from "react";
import { getUserRole } from "../utils/auth";
import { Sidebar } from "../components/UI/Sidebar";
import { TeacherDashboard } from "../components/UI/TeacherSidebar";
import { StudentDashboard } from "../components/UI/StudentSidebar";



const Dashboard = () => {
  const [role, setRole] = useState<"teacher" | "student">("student");

  useEffect(() => {
    const role = getUserRole();
    setRole(role);
  }, []);

  return (
    <div className="w-screen h-screen flex">
      <Sidebar open={true} setOpen={() => {}}>
        {role === "teacher" ? (
          <TeacherDashboard  />
        ) : (
          <StudentDashboard />
        )}
      </Sidebar>

      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-white mb-4">
          {role === "teacher" ? "Panel nauczyciela" : "Panel ucznia"}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          {role === "teacher"
            ? "Zarządzaj użytkownikami i materiałami."
            : "Twoje zadania, lekcje i testy będą tutaj."}
        </p>
      </main>
    </div>
  );
};

export default Dashboard;
