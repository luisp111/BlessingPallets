import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const images = formData.getAll('images') as File[];

    // Convert images to base64 for attachment
    const attachments = await Promise.all(
      images.map(async (image) => {
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        return {
          filename: image.name,
          content: buffer,
        };
      })
    );

   const { data, error } = await resend.emails.send({
  from: 'contact@blessingpallets.com',
  to: 'blessingpallets48@gmail.com',
  subject: `New Contact Form Submission: ${subject}`,
  html: `
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
    ${images.length > 0 ? `<p><strong>Attached Images:</strong> ${images.map(img => img.name).join(', ')}</p>` : ''}
  `,
  text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
${images.length > 0 ? `Attached Images: ${images.map(img => img.name).join(', ')}` : ''}
  `,
  attachments: attachments,
  headers: {
    'List-Unsubscribe': '<mailto:unsubscribe@blessingpallets.com>',
  },
});


    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 