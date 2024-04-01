import { connect } from "@/db/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function GET(request: NextRequest) {
  try {
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
