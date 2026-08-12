import { createOrUpdateBrevoContact } from "@/services/brevo.service";
import { BREVO_CONTACT_TYPES, BREVO_LISTS } from "@/services/config";
import { AttendeeFormType } from "@/utils/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data: AttendeeFormType = await request.json();

    const {
      first_name,
      last_name,
      email,
      phone,
      organisation,
      function: contact_function,
      country,
      city,
      participant_type,
      participation_days,
      accept_review_and_contact,
    } = data;

    if (!first_name || !last_name || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "First name, last name and email are required.",
        },
        { status: 400 },
      );
    }

    const response = await createOrUpdateBrevoContact({
      email,

      attributes: {
        FIRST_NAME: first_name,
        LAST_NAME: last_name,
        PHONE: phone,
        ORGANISATION: organisation,
        FUNCTION: contact_function,
        COUNTRY: country,
        CITY: city,
        PARTICIPANT_TYPE: participant_type,
        PARTICIPATION_DAYS: participation_days,
        ACCEPT_REVIEW_AND_CONTACT: accept_review_and_contact,
        CONTACT_TYPE: BREVO_CONTACT_TYPES.attendee,
      },

      listIds: [BREVO_LISTS.attendee],
    });

    return NextResponse.json(
      {
        success: response.success,
        data: response.data,
      },
      { status: response.status },
    );
  } catch (error) {
    console.error("Attendee submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit attendee form.",
      },
      { status: 500 },
    );
  }
}
