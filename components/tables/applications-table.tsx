import { Eye } from "lucide-react";
import { notFound } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { auth } from "@/auth";
import { getUserByEmail } from "@/services/user";

import { Button } from "../ui/button";

const applications = [
  {
    id: 1,
    jobTitle: "Virtual Assistant",
    jobReq: "Req_00141951",
    status: "Offer Generated",
    dateSubmitted: "September 17, 2024",
  },
];

export async function ApplicationsTable() {
  const session = await auth();

  if (!session?.user.email) {
    notFound();
  }

  const user = await getUserByEmail(session.user.email);

  return (
    <Table>
      <TableHeader className="hidden lg:table-header-group">
        <TableRow>
          <TableHead>Job Title</TableHead>
          <TableHead>Job Req</TableHead>
          <TableHead>My Application Status</TableHead>
          <TableHead>Date Submitted</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((application) => (
          <TableRow key={application.id}>
            <TableCell>
              <div className="font-medium"> {application.jobTitle}</div>
              <div className="text-sm md:hidden">
                <TaskStatusBadge status={application.status} />
              </div>
            </TableCell>

            <TableCell className="hidden lg:table-cell">
              {application.jobReq}
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <TaskStatusBadge status={application.status} />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              {user?.emailVerified?.toDateString() || new Date().toDateString()}
            </TableCell>
            <TableCell>
              <Button variant={"ghost"} size={"icon"}>
                <Eye />
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
