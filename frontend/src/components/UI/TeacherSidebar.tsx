import { IconChalkboard } from "@tabler/icons-react";

export const TeacherDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <IconChalkboard className="h-7 w-7 text-indigo-600" />
        <h1 className="text-3xl font-bold text-indigo-800 dark:text-indigo-300">
          Panel nauczyciela
        </h1>
      </div>

      <div className="rounded-lg border border-indigo-300 bg-indigo-50 dark:bg-indigo-900/20 p-4 shadow-sm">
        <p className="text-indigo-700 dark:text-indigo-200 font-medium">
          Masz dostęp do funkcji administracyjnych:
        </p>
        <ul className="list-disc list-inside mt-2 text-sm text-indigo-600 dark:text-indigo-300 space-y-1">
          <li>Przeglądaj listę uczniów</li>
          <li>Przydzielaj lekcje i testy</li>
          <li>Zarządzaj kontami i dostępem</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Statystyki</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">Wkrótce tutaj będą metryki aktywności uczniów.</p>
        </div>

        <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Zarządzanie lekcjami</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">Dodawanie i edytowanie lekcji pojawi się tutaj.</p>
        </div>
      </div>
    </div>
  );
};
