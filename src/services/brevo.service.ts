const BREVO_API_URL = "https://api.brevo.com/v3";

function getBrevoApiKey(): string {
  const apiKey = process.env.BREVO_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured on the server.");
  }

  return apiKey;
}

export interface BrevoContactData {
  email: string;
  attributes?: Record<string, string | number | boolean | null>;
  listIds: number[];
}

class BrevoApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "BrevoApiError";
    this.status = status;
  }
}

export async function createOrUpdateBrevoContact(data: BrevoContactData) {
  const requestData = JSON.stringify({
    email: data.email,
    attributes: data.attributes ?? {},
    listIds: data.listIds,
    updateEnabled: true,
  });
  const response = await fetch(`${BREVO_API_URL}/contacts`, {
    method: "POST",

    headers: {
      accept: "application/json",
      "api-key": getBrevoApiKey(),
      "content-type": "application/json",
    },

    body: requestData,
  });

  console.log("Request & Response >> ", {
    Request: requestData,
    Response: response,
  });

  const hasBody =
    response.status !== 204 &&
    response.status !== 205 &&
    response.status !== 304;

  let result: Record<string, unknown> = {
    message: "Brevo contact created or updated successfully.",
  };

  if (hasBody) {
    const text = await response.text();

    if (text) {
      try {
        result = JSON.parse(text);
      } catch {
        result = { message: text };
      }
    }
  }

  if (!response.ok) {
    throw new BrevoApiError(
      typeof result.message === "string"
        ? result.message
        : "Failed to create/update Brevo contact",
      response.status,
    );
  }

  return {
    data: result,
    status: response.status === 204 ? 200 : response.status,
    success: response.ok,
  };
}

export async function testBrevoConnection() {
  const response = await fetch(`${BREVO_API_URL}/account`, {
    method: "GET",
    headers: {
      accept: "application/json",
      "api-key": getBrevoApiKey(),
    },
  });
  const result = await response.json();
  if (!response.ok) {
    throw new BrevoApiError(
      result?.message ?? "Failed to connect to Brevo API",
      response.status,
    );
  }
  return { data: result, status: response.status, success: response.ok };
}

export async function testBrevoContactCreation() {
  const payload = {
    email: "test_prince@vukafrik2026.com",

    attributes: {
      NAME: "Contact Test Prince Ilunga",
      PHONE: "+243000000000",
      REQUEST_TYPE: "Test",
      MESSAGE: "Ceci est un contact de test Vukafrik2026.",
      ACCEPT_REVIEW_AND_CONTACT: true,
      CONTACT_TYPE: "GENERAL",
    },

    listIds: [44],

    updateEnabled: true,
  };

  const response = await fetch(`${BREVO_API_URL}/contacts`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": getBrevoApiKey(),
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  return { data, status: response.status, success: response.ok };
}
