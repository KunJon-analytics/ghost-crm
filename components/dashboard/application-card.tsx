import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { ApplicationsTable } from "../tables/applications-table";

const ApplicationCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Applications</CardTitle>
        <CardDescription>
          Please contact your recruiter if you have any additional questions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active" className="space-y-4">
          <TabsList>
            <TabsTrigger value="active">Active (1)</TabsTrigger>
            <TabsTrigger value="inactive">Inactive (0)</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="space-y-4">
            <ApplicationsTable />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ApplicationCard;
