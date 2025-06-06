import { IconNotebook } from "@tabler/icons-react";

export const StudentDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <IconNotebook className="h-7 w-7 text-emerald-600" />
        <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-300">
          Panel ucznia
        </h1>
      </div>

      <div className="rounded-lg border border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 p-4 shadow-sm">
        <p className="text-emerald-700 dark:text-emerald-200 font-medium">
          Witaj w Twojej przestrzeni edukacyjnej!
        </p>
        <ul className="list-disc list-inside mt-2 text-sm text-emerald-600 dark:text-emerald-300 space-y-1">
          <li>Przeglądaj przypisane lekcje</li>
          <li>Wykonuj testy i zadania domowe</li>
          <li>Otrzymuj wiadomości od nauczyciela</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Twoje lekcje</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">Wkrótce pojawią się tutaj przypisane materiały.</p>
        </div>

        <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Zadania i testy</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">Będziesz mógł wypełniać quizy i sprawdziany tutaj.</p>
        </div>
      </div>
    </div>
  );
};

