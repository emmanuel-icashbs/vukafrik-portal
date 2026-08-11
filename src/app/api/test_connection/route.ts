import { NextResponse } from "next/server";
import { testBrevoConnection } from "@/services/brevo.service";

export async function GET() {
  const response = await testBrevoConnection();

  return NextResponse.json(response.data, { status: response.status });
}
