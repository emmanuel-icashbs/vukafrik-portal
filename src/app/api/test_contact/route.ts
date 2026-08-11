import { NextResponse } from "next/server";
import { testBrevoContactCreation } from "@/services/brevo.service";

export async function POST() {
  const response = await testBrevoContactCreation();
  return NextResponse.json(
    {
      success: response.success,
      data: response.data,
    },
    { status: response.status },
  );
}
