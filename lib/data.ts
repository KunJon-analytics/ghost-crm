import { NavItem } from "@/types";
import { siteConfig } from "./config";

export const documentsToReview = [
  {
    fileName: "offer-letter.pdf",
    description: `By clicking 'accept', I agree to and accept employment with ${siteConfig.name} on the terms and conditions set forth in this offer letter. I understand and agree that my employment with the Company is at will. I also consent to signing or acknowledging ${siteConfig.name} documents electronically, and I agree that my electronic signature will have the same legal effect as a hand-written signature.`,
  },
  {
    fileName: "mutual-agreement.pdf",
    description: `By clicking 'accept', I acknowledge that i have carefully read the Mutual Agreement to Arbitrate Claims and understand its terms, and agree to be bound by them. By clicking accept, I also consent to signing or acknowledging ${siteConfig.name} documents electronically, and I agree that my electronic signature will have the same legal effect as a hand-written signature.`,
  },
  {
    fileName: "confidentiality-agreement.pdf",
    description: `By clicking 'accept', I acknowledge that i have carefully read the Confidentiality Agreement and understand its terms, and agree to be bound by them. By clicking accept, I also consent to signing or acknowledging ${siteConfig.name} documents electronically, and I agree that my electronic signature will have the same legal effect as a hand-written signature.`,
  },
] as const;

export const tasks = [
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

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Tasks",
    href: "/dashboard/tasks",
    icon: "tasks",
    label: "tasks",
  },

  // {
  //   title: "Profile",
  //   href: "/dashboard/profile",
  //   icon: "profile",
  //   label: "profile",
  // },
];
