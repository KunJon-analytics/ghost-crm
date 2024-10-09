import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

import { auth } from "@/auth";
import { sendDocumentUploaded } from "@/lib/mail";
import prisma from "@/lib/prisma";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  reviewUpload: f({
    pdf: { maxFileSize: "4MB", maxFileCount: 4 },
    text: { maxFileSize: "64KB", maxFileCount: 4 },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      // This code runs on your server before upload
      const session = await auth();

      // If you throw, the user will not be able to upload
      if (!session?.user?.email) throw new UploadThingError("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: session.user.id, userEmail: session.user.email };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userEmail);

      console.log("file url", file.url);
      const uploadedFile = await prisma.userFile.create({
        data: { purpose: "REVIEW", url: file.url, userId: metadata.userId },
      });
      await sendDocumentUploaded(metadata.userEmail, uploadedFile.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { fileUrl: file.url, fileName: file.name };
    }),
  startUpload: f({
    image: { maxFileSize: "4MB", maxFileCount: 5 },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      // This code runs on your server before upload
      const session = await auth();

      // If you throw, the user will not be able to upload
      if (!session?.user?.email) throw new UploadThingError("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: session.user.id, userEmail: session.user.email };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userEmail:", metadata.userEmail);

      console.log("file url", file.url);
      const uploadedFile = await prisma.userFile.create({
        data: { purpose: "START", url: file.url, userId: metadata.userId },
      });
      await sendDocumentUploaded(metadata.userEmail, uploadedFile.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { fileUrl: file.url, fileName: file.name };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
