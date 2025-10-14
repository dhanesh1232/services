import { NextResponse } from "next/server";

/**
 * 🧩 Common response headers
 * Ensures all API responses are returned in consistent JSON format.
 */
const headers = {
  "Content-Type": "application/json",
};

/**
 * 🪄 ReturnResponse()
 * Generates a standardized JSON API response.
 *
 * @param {number} status - The HTTP status code (e.g., 200, 404, 500)
 * @param {string} message - A short, human-readable message
 * @param {object} [data] - Optional payload data
 * @returns {NextResponse} - A Next.js-compatible JSON response
 *
 * @example
 * return ReturnResponse(200, "User fetched successfully", { user });
 *
 * @example
 * return ReturnResponse(404, "User not found");
 */
const ReturnResponse = (status, message, data) => {
  return NextResponse.json(
    {
      success: status >= 200 && status < 300,
      message,
      ...(data && { data }),
    },
    { status, headers }
  );
};

/**
 * ❌ ErrorHandles
 * Predefined HTTP error responses for cleaner API route handling.
 *
 * Use these to instantly send semantic error responses in your route handlers.
 *
 * @example
 * import { ErrorHandles } from "@/lib/response";
 * if (!user) return ErrorHandles.NotFound("User not found");
 */
export const ErrorHandles = {
  /** 400 — Bad Request */
  BadRequest: (message = "Bad Request") => ReturnResponse(400, message),

  /** 401 — Unauthorized */
  Unauthorized: (message = "Unauthorized") => ReturnResponse(401, message),

  /** 403 — Forbidden */
  Forbidden: (message = "Forbidden") => ReturnResponse(403, message),

  /** 404 — Not Found */
  NotFound: (message = "Not Found") => ReturnResponse(404, message),

  /** 409 — Conflict */
  Conflict: (message = "Conflict") => ReturnResponse(409, message),

  /** 422 — Unprocessable Entity */
  UnprocessableEntity: (message = "Unprocessable Entity") =>
    ReturnResponse(422, message),

  /** 429 — Too Many Requests */
  TooManyRequests: (message = "Too Many Requests") =>
    ReturnResponse(429, message),

  /** 500 — Internal Server Error */
  InternalServer: (message = "Internal Server Error") =>
    ReturnResponse(500, message),

  /** 503 — Service Unavailable */
  ServiceUnavailable: (message = "Service Unavailable") =>
    ReturnResponse(503, message),
};

/**
 * ✅ SuccessHandles
 * Predefined success responses for consistency in API route results.
 *
 * @example
 * import { SuccessHandles } from "@/lib/response";
 * return SuccessHandles.Ok("User fetched successfully", users);
 */
export const SuccessHandles = {
  /** 200 — OK */
  Ok: (message = "Success", data = null) => ReturnResponse(200, message, data),

  /** 201 — Created */
  Created: (message = "Resource Created", data = null) =>
    ReturnResponse(201, message, data),

  /** 202 — Accepted */
  Accepted: (message = "Accepted", data = null) =>
    ReturnResponse(202, message, data),
};
