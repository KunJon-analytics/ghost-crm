import { notFound } from "next/navigation";

import { auth } from "@/auth";
import { TasksTable } from "@/components/tables/tasks-table";
import { tasks } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getUserByEmail } from "@/services/user";

const TasksCard = async () => {
  const session = await auth();

  if (!session?.user.email) {
    notFound();
  }

  const user = await getUserByEmail(session.user.email);

  const userTasks = tasks.map((task) => {
    let status = task.actionButton === "Start" ? "Not Started" : "Not Reviewed";
    if (task.actionButton === "Start" && !!user?.startDocUrl) {
      status = "Completed";
    }
    if (task.actionButton === "Review" && !!user?.reviewDocUrl) {
      status = "Completed";
    }
    return {
      ...task,
      status,
      dateAssigned:
        user?.emailVerified?.toDateString() || new Date().toDateString(),
    };
  });

  const todoTasks = userTasks.filter((task) => task.status !== "Completed");
  const completedTasks = userTasks.filter(
    (task) => task.status === "Completed"
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Tasks</CardTitle>
        <CardDescription>
          Thank you for applying. Please review the checklist below to complete
          any assigned tasks related to your job application.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="todo" className="space-y-4">
          <TabsList>
            <TabsTrigger value="todo">To Do ({todoTasks.length})</TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completedTasks.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="todo" className="space-y-4">
            <TasksTable tasks={todoTasks} />
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            <TasksTable tasks={completedTasks} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TasksCard;
