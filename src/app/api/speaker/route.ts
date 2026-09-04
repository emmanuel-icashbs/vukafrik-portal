import { createOrUpdateBrevoContact } from "@/services/brevo.service";
import { BREVO_CONTACT_TYPES, BREVO_LISTS } from "@/services/config";
import { SpeakerFormType } from "@/utils/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data: SpeakerFormType = await request.json();

    const {
      name,
      email,
      phone,
      organisation,
      title,
      biography,
      proposed_topic,
      preference_of_session,
      linkedin_or_website,
      speaking_experience,
      additional_notes,
      accept_review_and_contact,
    } = data;

    if (!name || !email || !proposed_topic) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and proposed topic are required.",
        },
        { status: 400 },
      );
    }

    const response = await createOrUpdateBrevoContact({
      email,

      attributes: {
        NAME: name,
        PHONE: phone,
        WHATSAPP: phone,
        ORGANISATION: organisation,
        TITLE: title,
        BIOGRAPHY: biography,
        PROPOSED_TOPIC: proposed_topic,
        PREFERENCE_OF_SESSION: preference_of_session,
        LINKEDIN_OR_WEBSITE: linkedin_or_website,
        SPEAKING_EXPERIENCE: speaking_experience,
        ADDITIONAL_NOTES: additional_notes,
        ACCEPT_REVIEW_AND_CONTACT: accept_review_and_contact,
        CONTACT_TYPE: BREVO_CONTACT_TYPES.speaker,
      },

      listIds: [BREVO_LISTS.speaker],
    });

    return NextResponse.json(
      {
        success: response.success,
        data: response.data,
      },
      { status: response.status },
    );
  } catch (error) {
    console.error("Speaker submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit speaker form.",
      },
      { status: 500 },
    );
  }
}
