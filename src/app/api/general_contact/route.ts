import { validateContactFields } from "@/utils/contactFields";
import { createOrUpdateBrevoContact } from "@/services/brevo.service";
import { BREVO_CONTACT_TYPES, BREVO_LISTS } from "@/services/config";
import { GeneralContactFormType } from "@/utils/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data: GeneralContactFormType = await request.json();

    const validation = validateContactFields(data, false);
    if (validation.error) {
      return NextResponse.json({ success: false, message: validation.error, field: validation.field }, { status: 400 });
    }

    const {
      name,
      email,
      request_type,
      message,
      accept_review_and_contact,
    } = data;

    // Validation minimale
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and message are required.",
        },
        { status: 400 },
      );
    }

    const result = await createOrUpdateBrevoContact({
      email,

      attributes: {
        NAME: name,
        PHONE: validation.phone,
        WHATSAPP: validation.phone,
        REQUEST_TYPE: request_type,
        MESSAGE: message,
        ACCEPT_REVIEW_AND_CONTACT: accept_review_and_contact,
        CONTACT_TYPE: BREVO_CONTACT_TYPES.general,
      },

      listIds: [BREVO_LISTS.general],
    });

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("General contact submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit contact form.",
      },
      { status: 500 },
    );
  }
}
