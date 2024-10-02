"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const review = async (reviewDocUrl: string) => {
  const session = await auth();

  if (!session?.user.email) {
    return { error: "Unauthenticated" };
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { reviewDocUrl },
    });
    revalidatePath("/", "layout");
    // send email
    return { success: updatedUser.email };
  } catch (error) {
    return { error: "Server Error" };
  }
};

export const start = async (startDocUrl: string) => {
  const session = await auth();

  if (!session?.user.email) {
    return { error: "Unauthenticated" };
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { startDocUrl },
    });
    revalidatePath("/", "layout");
    // send email
    return { success: updatedUser.email };
  } catch (error) {
    return { error: "Server Error" };
  }
};
