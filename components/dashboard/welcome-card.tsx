import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const WelcomeCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>
          If you want to visit more about {siteConfig.name}, please visit our
          website at{" "}
          <Link
            href="https://venturevolts.com/"
            target="_blank"
            className="underline text-blue-700 dark:text-blue-500"
          >
            www.venturevolts.com
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold leading-none tracking-tight">About Us</h3>
        <p className="text-sm text-muted-foreground">
          Join a company that appreciates your energy, drive and enthusiasm just
          as much as your skills, and yes, we offer competitive salaries and
          benefits. But even better - it{"'"}s our caring culture that defines
          who we are and why you {"'"}ll want to become part of our family. As
          we say, it{"'"}s different here at {siteConfig.name}.
        </p>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
