import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Inquiry from '@/lib/models/Inquiry';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { name, email, phone, message: projectMessage, projectType } = await request.json();

    if (!name || !email || !phone || !projectMessage || !projectType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Save to Database
    const inquiry = await Inquiry.create({ name, email, phone, projectType, message: projectMessage });

    // 2. Send SMS through Arkesel (Optional notification to owner)
    const ARKESEL_API_KEY = process.env.ARKESEL_API_KEY;
    const OWNER_PHONE = process.env.OWNER_PHONE;
    const SENDER_ID = process.env.ARKESEL_SENDER_ID || 'NewlandLab';

    if (ARKESEL_API_KEY && OWNER_PHONE) {
      const smsBody = `New Inquiry: ${name}\nPhone: ${phone}\nProject: ${projectType}\nMessage: ${projectMessage.substring(0, 50)}...`;
      
      try {
        await fetch('https://sms.arkesel.com/sms/api?action=send-sms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': ARKESEL_API_KEY
          },
          body: JSON.stringify({
            action: 'send-sms',
            to: OWNER_PHONE,
            from: SENDER_ID,
            sms: smsBody
          })
        });
      } catch (smsError) {
        console.error('Failed to send Arkesel SMS:', smsError);
      }
    }

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error: any) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json({ error: 'Failed to submit inquiry' }, { status: 500 });
  }
}
