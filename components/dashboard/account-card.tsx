import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";

const AccountCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Account</CardTitle>
        <CardDescription>
          To update your personal information, click Update Contact information.
          To change the email address for your account, click Edit Account
          Settings.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col md:flex-row justify-start gap-4">
        <Button
          variant="secondary"
          className="w-full md:w-auto rounded-2xl"
          asChild
        >
          <Link href={"/dashboard/profile"}>Update Contact Information</Link>
        </Button>
        <Button
          variant="secondary"
          className="w-full md:w-auto rounded-2xl"
          asChild
        >
          <Link href={"/dashboard/profile"}>Edit Account Settings</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AccountCard;
