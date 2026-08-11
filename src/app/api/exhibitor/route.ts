import { createOrUpdateBrevoContact } from "@/services/brevo.service";
import { BREVO_CONTACT_TYPES, BREVO_LISTS } from "@/services/config";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      organisation,
      contact_person,
      email,
      phone,
      website,
      sector,
      product_service_description,
      preferred_format,
      specific_needs,
      social_media_links,
      no_of_participants,
      accept_review_and_contact,
    } = data;

    if (!organisation || !contact_person || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Organisation, contact person and email are required.",
        },
        { status: 400 },
      );
    }

    const response = await createOrUpdateBrevoContact({
      email,

      attributes: {
        ORGANISATION: organisation,
        CONTACT_PERSON: contact_person,
        PHONE: phone,
        WEBSITE: website,
        SECTOR: sector,
        PRODUCT_SERVICE_DESCRIPTION: product_service_description,
        PREFERRED_FORMAT: preferred_format,
        SPECIFIC_NEEDS: specific_needs,
        SOCIAL_MEDIA_LINKS: social_media_links,
        NO_OF_PARTICIPANTS: no_of_participants,
        ACCEPT_REVIEW_AND_CONTACT: accept_review_and_contact,
        CONTACT_TYPE: BREVO_CONTACT_TYPES.exhibitor,
      },

      listIds: [BREVO_LISTS.exhibitor],
    });

    return NextResponse.json(
      {
        success: response.success,
        data: response.data,
      },
      { status: response.status },
    );
  } catch (error) {
    console.error("Exhibitor submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit exhibitor form.",
      },
      { status: 500 },
    );
  }
}
