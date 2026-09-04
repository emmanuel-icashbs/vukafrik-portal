import { NextResponse } from "next/server";

import { createOrUpdateBrevoContact } from "@/services/brevo.service";
import { BREVO_CONTACT_TYPES, BREVO_LISTS } from "@/services/config";
import { VolunteerFormType } from "@/utils/types";

export async function POST(request: Request) {
  try {
    const data: VolunteerFormType = await request.json();

    const {
      full_name,
      email,
      phone,
      city,
      availability,
      interest_area,
      skills,
      previous_event_experience,
      accept_review_and_contact,
    } = data;

    if (!full_name || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Full name and email are required.",
        },
        { status: 400 },
      );
    }

    const response = await createOrUpdateBrevoContact({
      email,

      attributes: {
        NAME: full_name,
        PHONE: phone,
        WHATSAPP: phone,
        CITY: city,
        AVAILABILITY: availability,
        INTEREST_AREA: interest_area,
        SKILLS: skills,
        PREVIOUS_EVENT_EXPERIENCE: previous_event_experience,
        ACCEPT_REVIEW_AND_CONTACT: accept_review_and_contact,
        CONTACT_TYPE: BREVO_CONTACT_TYPES.volunteer,
      },

      listIds: [BREVO_LISTS.volunteer],
    });

    return NextResponse.json(
      {
        success: response.success,
        data: response.data,
      },
      { status: response.status },
    );
  } catch (error) {
    console.error("Volunteer submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit volunteer form.",
      },
      { status: 500 },
    );
  }
}
