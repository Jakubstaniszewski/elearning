import React, { useState } from "react";
import { Sidebar } from "../components/UI/Sidebar";
import { TeacherSidebar } from "../components/UI/TeacherSidebar";
import { StudentSidebar } from "../components/UI/StudentSidebar";
import { cn } from "../utils/cn";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const isTeacher = user.email === "Staniszewski.jakub03@gmail.com";

  return (
    <div className={cn("w-screen h-screen flex")}>
      <Sidebar open={open} setOpen={setOpen}>
        {isTeacher ? <TeacherSidebar open={open} /> : <StudentSidebar open={open} />}
      </Sidebar>

      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-white mb-4">
          {isTeacher ? "Witaj, nauczycielu" : "Witaj, uczniu"}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          {isTeacher
            ? "Zarządzaj klasą, użytkownikami i materiałami."
            : "Zobacz swoje lekcje, testy i ogłoszenia."}
        </p>
      </main>
    </div>
  );
};

export default Dashboard;
