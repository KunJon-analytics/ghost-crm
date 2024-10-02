import AccountCard from "@/components/dashboard/account-card";
import ApplicationCard from "@/components/dashboard/application-card";
import TasksCard from "@/components/dashboard/tasks-card";
import WelcomeCard from "@/components/dashboard/welcome-card";

export default function DashboardPage() {
  return (
    <>
      <TasksCard />
      <ApplicationCard />
      <AccountCard />
      <WelcomeCard />
    </>
  );
}
