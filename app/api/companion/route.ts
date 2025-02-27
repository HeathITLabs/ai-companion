
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { checkSubscription } from "@/lib/subscription";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = "";
    const { src, name, description, instructions, seed, categoryId } = body;
    console.dir("body: " + body)
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!src || !name || !description || !instructions || !seed || !categoryId) {
      return new NextResponse("Missing required fields", { status: 400 });
    };

    const isPro = true; //await checkSubscription();

    if (!isPro) {
      return new NextResponse("Pro subscription required", { status: 403 });
    }

    const companion = await prismadb.companion.create({
      data: {
        categoryId,
        userId: "0",
        userName: "user.firstName",
        src,
        name,
        description,
        instructions,
        seed,
      }
    });
    return NextResponse.json(companion);
  } catch (error) {
    console.log("create companion error: " + error)
    return new NextResponse("Internal Error", { status: 500 });
  }
};
