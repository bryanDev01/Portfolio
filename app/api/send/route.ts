import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { ReactNode } from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, mail, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'bryanDev01 <onboarding@resend.dev>',
      to: ['breyessrr@gmail.com'],
      subject: subject,
      react: EmailTemplate({name, mail, subject, message}) as ReactNode,
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
