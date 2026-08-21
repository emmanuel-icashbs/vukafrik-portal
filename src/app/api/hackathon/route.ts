import { createOrUpdateBrevoContact } from "@/services/brevo.service";
import { BREVO_CONTACT_TYPES, BREVO_LISTS } from "@/services/config";
import { HackathonTeamFormType } from "@/utils/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data: HackathonTeamFormType = await request.json();

    const {
      team_name,
      team_leader_name,
      team_leader_email,
      team_leader_phone,
      accept_review_and_contact,
    } = data;

    if (
      !team_name ||
      !team_leader_name ||
      !team_leader_email ||
      !team_leader_phone
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
        PHONE: team_leader_phone,
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
