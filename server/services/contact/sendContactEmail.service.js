const { Resend } = require("resend");

const AppError = require("../../utils/AppError");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  const { data, error } = await resend.emails.send({
    from: "Aivora <onboarding@resend.dev>",
    to: [process.env.CONTACT_EMAIL],
    replyTo: email,
    subject: `Aivora Contact: ${subject}`,

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>رسالة جديدة من Aivora</h2>

        <p>
          <strong>الاسم:</strong> ${name}
        </p>

        <p>
          <strong>البريد الإلكتروني:</strong> ${email}
        </p>

        <p>
          <strong>الموضوع:</strong> ${subject}
        </p>

        <hr />

        <p>
          <strong>الرسالة:</strong>
        </p>

        <p>
          ${message}
        </p>
      </div>
    `,
  });

  if (error) {
    throw new AppError(
      "تعذر إرسال الرسالة حالياً، حاول مرة أخرى لاحقاً.",
      503
    );
  }

  return data;
};

module.exports = sendContactEmail;