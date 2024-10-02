import { TasksTable } from "@/components/tables/tasks-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TasksCard = () => {
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
            <TabsTrigger value="todo">To Do (2)</TabsTrigger>
            <TabsTrigger value="completed">Completed (0)</TabsTrigger>
          </TabsList>
          <TabsContent value="todo" className="space-y-4">
            <TasksTable />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TasksCard;
