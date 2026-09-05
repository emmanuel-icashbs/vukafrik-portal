import { validateContactFields } from "@/utils/contactFields";
import { createOrUpdateBrevoContact } from "@/services/brevo.service";
import { BREVO_CONTACT_TYPES, BREVO_LISTS } from "@/services/config";
import { HackathonTeamFormType } from "@/utils/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data: HackathonTeamFormType = await request.json();

    const validation = validateContactFields(data, false);
    if (validation.error) {
      return NextResponse.json({ success: false, message: validation.error, field: validation.field }, { status: 400 });
    }

    const {
      team_name,
      team_leader_name,
      team_leader_email,
      accept_review_and_contact,
    } = data;

    if (
      !team_name ||
      !team_leader_name ||
      !team_leader_email ||
      !validation.phone
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Team name, leader name, leader email and leader phone are required.",
        },
        { status: 400 },
      );
    }

    const response = await createOrUpdateBrevoContact({
      email: team_leader_email,

      attributes: {
        ORGANISATION: team_name,
        CONTACT_PERSON: team_leader_name,
        PHONE: validation.phone,
        WHATSAPP: validation.phone,
        ACCEPT_REVIEW_AND_CONTACT: accept_review_and_contact,
        CONTACT_TYPE: BREVO_CONTACT_TYPES.hackathon,
      },

      listIds: [BREVO_LISTS.hackathon],
    });

    return NextResponse.json(
      {
        success: response.success,
        data: response.data,
      },
      { status: response.status },
    );
  } catch (error) {
    console.error("Hackathon team submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit hackathon team form.",
      },
      { status: 500 },
    );
  }
}
