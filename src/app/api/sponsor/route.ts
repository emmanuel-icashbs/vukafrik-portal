import { createOrUpdateBrevoContact } from "@/services/brevo.service";
import { BREVO_CONTACT_TYPES, BREVO_LISTS } from "@/services/config";
import { SponsorFormType } from "@/utils/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data: SponsorFormType = await request.json();

    const {
      name,
      contact_person,
      email,
      phone,
      website,
      partnership_category,
      message,
      budget_range,
      preferred_visibility_zone,
      interest_sector,
      accept_review_and_contact,
    } = data;

    if (!name || !contact_person || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, contact person and email are required.",
        },
        { status: 400 },
      );
    }

    const response = await createOrUpdateBrevoContact({
      email,

      attributes: {
        NAME: name,
        CONTACT_PERSON: contact_person,
        PHONE: phone,
        WEBSITE: website,
        PARTNERSHIP_CATEGORY: partnership_category,
        MESSAGE: message,
        BUDGET_RANGE: budget_range,
        PREFERRED_VISIBILITY_ZONE: preferred_visibility_zone,
        INTEREST_SECTOR: interest_sector,
        ACCEPT_REVIEW_AND_CONTACT: accept_review_and_contact,
        CONTACT_TYPE: BREVO_CONTACT_TYPES.sponsor,
      },

      listIds: [BREVO_LISTS.sponsor],
    });

    return NextResponse.json(
      {
        success: response.success,
        data: response.data,
      },
      { status: response.status },
    );
  } catch (error) {
    console.error("Sponsor submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit sponsor form.",
      },
      { status: 500 },
    );
  }
}
