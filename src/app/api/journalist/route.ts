import { NextResponse } from "next/server";

import { createOrUpdateBrevoContact } from "@/services/brevo.service";
import { BREVO_CONTACT_TYPES, BREVO_LISTS } from "@/services/config";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      organisation,
      name,
      email,
      phone,
      country,
      media_type,
      request_subject,
      previous_content_links,
      press_card_number,
      no_of_media_representatives,
      specific_technical_needs,
      accept_review_and_contact,
    } = data;

    if (!organisation || !name || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Organisation, name and email are required.",
        },
        { status: 400 },
      );
    }

    const response = await createOrUpdateBrevoContact({
      email,

      attributes: {
        ORGANISATION: organisation,
        NAME: name,
        PHONE: phone,
        COUNTRY: country,
        MEDIA_TYPE: media_type,
        REQUEST_SUBJECT: request_subject,
        PREVIOUS_CONTENT_LINKS: previous_content_links,
        PRESS_CARD_NUMBER: press_card_number,
        NO_OF_MEDIA_REPRESENTATIVES: no_of_media_representatives,
        SPECIFIC_TECHNICAL_NEEDS: specific_technical_needs,
        ACCEPT_REVIEW_AND_CONTACT: accept_review_and_contact,
        CONTACT_TYPE: BREVO_CONTACT_TYPES.journalist,
      },

      listIds: [BREVO_LISTS.journalist],
    });

    return NextResponse.json(
      {
        success: response.success,
        data: response.data,
      },
      { status: response.status },
    );
  } catch (error) {
    console.error("Journalist submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit journalist form.",
      },
      { status: 500 },
    );
  }
}
