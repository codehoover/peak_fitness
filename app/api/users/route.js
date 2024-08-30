import prisma from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, username, email, password } = body;

    // issue here
    //hashedPassword = await hash(password, 10);

    // const newUser = await prisma.user.create({
    //   data: { name, username, email, password },
    // });

    return NextResponse.json(body);
    // return NextResponse.json(
    //   { user: newUser, message: "user created successfully" },
    //   { status: 201 },
    // );
  } catch (error) {}
}
