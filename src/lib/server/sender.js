// lib/server/mailSender.js

import { templates } from "@/lib/server/template";
import { sendMail } from "@/lib/server/mailer"; // your nodemailer wrapper
import { businessEmails } from "@/lib/config/mail";

/**
 * @param {Object} params
 * @param {string} params.template - e.g., "newsletter.early_access"
 * @param {string} params.to - recipient email
 * @param {Object} [params.variables] - dynamic content for html templating
 */

export const mailSender = async ({ template, to, variables = {} }) => {
  if (!template || !to)
    throw new Error("Template and recipient email are required");
  const [category, key] = template.split(".");
  const templateObj = templates?.[category]?.[key];

  if (!templateObj) {
    throw new Error(`Template '${template}' not found in useTemplates`);
  }

  const html =
    typeof templateObj.html === "function"
      ? templateObj.html(variables)
      : templateObj.html;

  // Default from based on category
  const defaultFrom = {
    newsletter: businessEmails.newsletter,
    support: businessEmails.support,
    billing: businessEmails.billing,
    system: businessEmails.noreply,
    services: businessEmails.services,
  }[category];

  await sendMail({
    to,
    subject: templateObj.subject,
    html,
    fromName: defaultFrom.name,
    fromMail: defaultFrom.email,
  });
};
