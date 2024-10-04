"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { documentsToReview } from "@/lib/data";
import { ReviewSchema } from "@/lib/schemas";
import { Separator } from "@/components/ui/separator";
import { UploadButton } from "../uploadthing";
import { review } from "@/actions/tasks";

const ReviewForm = () => {
  const [serverData, setServerData] = useState<
    { fileName: string; fileUrl: string } | undefined
  >(undefined);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof ReviewSchema>>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: { documentsToReview: [] },
  });

  const onSubmit = () => {
    if (!serverData) {
      return toast.error(
        "Please upload the completed I9 documents before submitting"
      );
    }

    startTransition(async () => {
      const result = await review(serverData.fileUrl);
      if (!!result.success) {
        toast.success("Task Completed");
        router.push("/dashboard");
        return;
      }
      toast.error(result.error);
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CardContent>
          <FormField
            control={form.control}
            name="documentsToReview"
            render={() => (
              <FormItem>
                {documentsToReview.map((document) => (
                  <div
                    className="flex flex-col gap-8 items-start"
                    key={document.fileName}
                  >
                    <div className="flex items-center space-x-4">
                      <FileText className="h-16 w-16" />
                      <Link
                        href={`/${document.fileName}`}
                        className="text-sm underline font-medium leading-none"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {document.fileName}
                      </Link>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {document.description}
                    </p>
                    <FormField
                      key={document.fileName}
                      control={form.control}
                      name="documentsToReview"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={document.fileName}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(
                                  document.fileName
                                )}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value,
                                        document.fileName,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== document.fileName
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              I Agree <span className="text-red-700">*</span>
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                    <Separator />
                  </div>
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-8 items-start mt-8">
            <p className="text-sm text-muted-foreground">
              If you don{"'"}t know how to complete the I9, please download the
              following document.
            </p>
            <div className="flex items-center space-x-4">
              <FileText className="h-16 w-16" />
              <Link
                href="/i-9.pdf"
                className="text-sm underline font-medium leading-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                i-9.pdf
              </Link>
            </div>
            <h3 className="font-bold">Attachments</h3>
            <h3 className="font-bold">
              Upload either DOC, DOCX, HTML, PDF, or TXT file types (4MB max){" "}
              <span className="text-red-700">*</span>
            </h3>

            {!!serverData?.fileName ? (
              <p>UploadedFile: {serverData.fileName}</p>
            ) : (
              <UploadButton
                endpoint="reviewUpload"
                disabled={!!serverData?.fileName}
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  console.log("Files: ", res);
                  setServerData(res[0].serverData);
                  toast.success("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  console.log(error);
                  toast.error(`ERROR! ${error.message}`);
                }}
              />
            )}

            <Separator />
          </div>
        </CardContent>
        <CardFooter className="flex justify-start gap-4">
          <Button
            disabled={isPending}
            type="submit"
            className="rounded-2xl w-24"
          >
            Ok
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="rounded-2xl w-24"
            asChild
          >
            <Link href={"/dashboard"}>Cancel</Link>
          </Button>
        </CardFooter>
      </form>
    </Form>
  );
};

export default ReviewForm;
