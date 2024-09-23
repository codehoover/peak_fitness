"use strict";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
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
    const { name, username, email, pass, role } = body;

    let hash;
    try {
      hash = await bcrypt.hash(pass, 10);
      console.log("hash: ", hash);
    } catch (error) {
      console.log(error);
    }

    //case where user cannot have the same username
    const exisitingUsername = await prisma.user.findUnique({
      where: { username: username },
    });

    //if true - if username exists
    if (exisitingUsername) {
      return NextResponse.json(
        { user: null, message: "This username already exists" },
        { status: 409 },
      );
    }

    try {
      const user = await prisma.user.create({
        data: {
          email,
          name,
          pass: String(hash),
          username,
          // role: "CLIENT",
          role,
          createdAt: new Date(Date.now()),
        },
      });
      console.log("user: ", user);
    } catch (error) {
      console.log(error);
    }

    return NextResponse.json(
      { user, message: "user created successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error, message: "user creation unsuccessful" });
  }
}
