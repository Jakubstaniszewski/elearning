export const getUserRole = (): "teacher" | "student" => {
  if (typeof window === "undefined") return "student";
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return user?.role === "teacher" ? "teacher" : "student";
};
