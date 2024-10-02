import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { Button } from "../ui/button";

const tasks = [
  {
    id: 1,
    task: "Review Documents",
    jobTitle: "US Rater",
    jobReq: "Req_00141951",
    status: "Not Reviewed",
    dateAssigned: "September 18, 2024",
    actionButton: "Review",
    link: "/dashboard/tasks/review",
  },
  {
    id: 2,
    task: "Complete Questionnaire",
    jobTitle: "US Rater",
    jobReq: "Req_00141951",
    status: "Not Started",
    dateAssigned: "September 18, 2024",
    actionButton: "Start",
    link: "/dashboard/tasks/start",
  },
];

export function TasksTable() {
  return (
    <Table>
      <TableHeader className="hidden lg:table-header-group">
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Job Title</TableHead>
          <TableHead>Job Req</TableHead>
          <TableHead>Task Status</TableHead>
          <TableHead>Date Assigned</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>
              <div className="font-medium"> {task.task}</div>
              <div className="text-sm md:hidden">
                <TaskStatusBadge status={task.status} />
              </div>
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              {task.jobTitle}
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              {task.jobReq}
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <TaskStatusBadge status={task.status} />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              {task.dateAssigned}
            </TableCell>
            <TableCell>
              <Button
                className="w-20 rounded-2xl font-bold"
                size={"sm"}
                asChild
              >
                <Link href={task.link}>{task.actionButton}</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function TaskStatusBadge({ status }: { status: string }) {
  const isDestructive = status.includes("Not");

  return (
    <Badge variant={isDestructive ? "destructive" : "success"}>{status}</Badge>
  );
}
