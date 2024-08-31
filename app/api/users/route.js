import prisma from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = {
    email: "joe@aol.com",
    name: "bassam",
    pass: "tester123",
    createdAt: new Date(Date.now()),
    username: "bassamanator",
    role: "CLIENT",
  };

  try {
    const body = await req.json();
    const { name, username, email, password } = body;

    // issue here
    //hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      // data: { name, username, email, password: "tester123" },
      data: data,
    });

    //return NextResponse.json(body);
    return NextResponse.json(
      { user, message: "user created successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error, message: "user creation unsuccessful" });
  }
}
