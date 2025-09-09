export const templates = {
  services: {
    contact_confirmation: {
      subject: "🤝 Thanks for Reaching Out to ECODrIx Services",
      html: ({ userName = "there", serviceType = "Web Development" }) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto;">
        <div style="background: #f9f9f9; padding: 30px; border-radius: 10px;">
          <h1 style="color: #2f80ed; text-align: center;">Thanks for Contacting ECODrIx</h1>
          <p>Hello <strong>${userName}</strong>,</p>
          <p>Thank you for reaching out about <strong>${serviceType}</strong>.</p>

          <p>Our team has received your message and will get back to you shortly. We're excited to learn more about your needs and explore how ECODrIx can help!</p>

          <div style="background: #fff; border-left: 4px solid #2f80ed; padding: 15px; margin: 20px 0; border-radius: 5px;">
            <p>In the meantime, feel free to explore our platform and learn more about what we offer:</p>
            <ul>
              <li><a href="https://app.ecodrix.com" style="color: #2f80ed;">Sign In to Your Dashboard</a></li>
              <li><a href="https://services.ecodrix.com/#contact" style="color: #2f80ed;">Contact Support</a></li>
            </ul>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://ecodrix.com" target="_blank" style="background: #2f80ed; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Visit Our Website
            </a>
          </div>

          <footer style="border-top: 1px solid #ddd; margin-top: 30px; padding-top: 20px; font-size: 12px; text-align: center; color: #888;">
            <p>This is an automated confirmation from ECODrIx.</p>
            <p>Need urgent help? Email us at <a href="mailto:support@ecodrix.com" style="color: #2f80ed;">support@ecodrix.com</a></p>
            <p>© ${new Date().getFullYear()} ECODrIx. All rights reserved.</p>
          </footer>
        </div>
      </body>
      </html>
    `,
    },
    newsletter: {
      subject: "📰 Welcome to ECODrIx Services Newsletter!",
      html: ({ userName = "there" }) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto;">
        <div style="background: #f9f9f9; padding: 30px; border-radius: 10px;">
          <h1 style="color: #2f80ed; text-align: center;">Welcome to Our Newsletter!</h1>
          <p>Hello <strong>${userName}</strong>,</p>
          <p>Thank you for subscribing to the ECODrIx newsletter! We're thrilled to have you join our community.</p>

          <p>You'll now receive regular updates about:</p>
          <ul style="background: #fff; border-left: 4px solid #2f80ed; padding: 15px 35px; margin: 20px 0; border-radius: 5px;">
            <li>Latest tech trends and insights</li>
            <li>New service announcements</li>
            <li>Tips and best practices</li>
            <li>Special offers and promotions</li>
          </ul>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://services.ecodrix.com/services" target="_blank" style="background: #2f80ed; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Check Out Our Services
            </a>
          </div>

          <footer style="border-top: 1px solid #ddd; margin-top: 30px; padding-top: 20px; font-size: 12px; text-align: center; color: #888;">
            <p>You're receiving this because you subscribed to ECODrIx newsletter.</p>
            <p>To unsubscribe, click <a href="{unsubscribe_url}" style="color: #2f80ed;">here</a></p>
            <p>© ${new Date().getFullYear()} ECODrIx. All rights reserved.</p>
          </footer>
        </div>
      </body>
      </html>
    `,
    },
  },
};
