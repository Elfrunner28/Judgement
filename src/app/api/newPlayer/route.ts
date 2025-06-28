import { connectToDB } from "@/lib/mongodb";
import { Player } from "@/models/playerSchema";
import { NextRequest, NextResponse } from "next/server";

const nextError = (error: any) => {
  return NextResponse.json({ message: "Error: ", error }, { status: 500 });
};

export async function GET() {
  try {
    await connectToDB();
    const players = Player.find({});
    return NextResponse.json(players);
  } catch (error) {
    return nextError(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const newUser = await Player.create(req.json);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return nextError(error);
  }
}
