import { EmailTemplate } from '@/components/EmailTemplate';
import { emailSchema } from '@/lib/emailSchema';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { ReactNode } from 'react';

export async function POST(request: Request) {
  try {
    // Validate on the server: client-side Zod checks are easily bypassed.
    const parsed = emailSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request payload' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Constructed per-request so a missing key never crashes the build.
    const resend = new Resend(apiKey);
    const { name, mail, subject, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: 'bryanDev01 <onboarding@resend.dev>',
      to: ['breyessrr@gmail.com'],
      replyTo: mail,
      subject: subject,
      react: EmailTemplate({ name, mail, subject, message }) as ReactNode,
    });

    if (error) {
      return NextResponse.json({ error: error.message || "Failed to send mail" }, {status: 500});
    }
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error inesperado:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
