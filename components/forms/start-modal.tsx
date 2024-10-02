"use client";

import { toast } from "sonner";

import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";

import { Button } from "../ui/button";
import { UploadDropzone } from "../uploadthing";

const StartModal = () => {
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button className="w-20 rounded-2xl font-bold" size={"sm"}>
          Start
        </Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Complete Questionnaire</CredenzaTitle>
          <CredenzaDescription>
            <span className="font-bold">Job Title:</span> US Rater
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <p className="text-sm text-muted-foreground">
            Please upload a clear copy of the IDs or documents that you used to
            complete your I-9 Form.
          </p>
          <p className="text-sm mt-2">
            Upload a photo of your ID <span className="text-red-700">*</span>
          </p>
          <UploadDropzone
            endpoint="startUpload"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              toast.success("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              toast.error(`ERROR! ${error.message}`);
            }}
          />
        </CredenzaBody>
        <CredenzaFooter className="flex flex-col md:flex-row">
          <CredenzaClose asChild>
            <Button
              variant={"secondary"}
              className="w-full md:w-20 rounded-2xl font-bold"
              size={"sm"}
            >
              Cancel
            </Button>
          </CredenzaClose>
          <Button className="w-full md:w-20 rounded-2xl font-bold" size={"sm"}>
            Submit
          </Button>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
};

export default StartModal;
