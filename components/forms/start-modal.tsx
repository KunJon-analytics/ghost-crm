"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
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
import { start } from "@/actions/tasks";
import { Button } from "../ui/button";
import { UploadDropzone } from "../uploadthing";

const StartModal = () => {
  const [serverData, setServerData] = useState<
    { fileName: string; fileUrl: string } | undefined
  >(undefined);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = () => {
    if (!serverData) {
      toast.error("Please upload your documents");
      return;
    }

    startTransition(async () => {
      const result = await start(serverData.fileUrl);
      if (!!result.success) {
        toast.success("Task Completed");
        router.refresh();
        return;
      }
      toast.error(result.error);
    });
  };
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
          {!!serverData?.fileName ? (
            <p>UploadedFile: {serverData.fileName}</p>
          ) : (
            <UploadDropzone
              endpoint="startUpload"
              disabled={!!serverData?.fileName}
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setServerData(res[0].serverData);
                toast.success("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                toast.error(`ERROR! ${error.message}`);
              }}
            />
          )}
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
          <Button
            onClick={onSubmit}
            className="w-full md:w-20 rounded-2xl font-bold"
            size={"sm"}
          >
            Submit
          </Button>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
};

export default StartModal;
