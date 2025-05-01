'use server';

import { format } from 'date-fns';
import { google } from 'googleapis';

import { orderLetter } from '@/features/letters/components/order-letter';
import type { OrderFormSchema } from '@/features/order-form/lib';
import type { ProductDef } from '@/features/product/lib';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_USER,
} from '@/shared/config/env';
import { makeBody } from '@/shared/lib/email';

export async function orderProduct({
  fullName,
  companyName,
  budget,
  email,
  phone,
  website,
  product,
}: OrderFormSchema & { product: ProductDef }) {
  try {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      EMAIL_CLIENT_ID,
      EMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();

    if (!accessToken.token) {
      throw new Error('Failed to generate access token.');
    }

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const adminBody = makeBody({
      to: EMAIL_USER,
      from: EMAIL_USER,
      subject: 'New Order in ProWorkforceX',
      message: `
       <p><b>Full Name:</b> ${fullName}</p>
       <p><b>Product:</b> ${product.title}</p>
       <p><b>Total amount:</b> ${product.cost}</p>
       <p><b>Email:</b> ${email}</p>
       <p><b>Phone:</b> ${phone}</p>
       <p><b>Company Name:</b> ${companyName ?? 'None'}</p>
       <p><b>Website:</b> ${website ?? 'None'}</p>
       <p><b>Budget:</b> ${budget}</p>`,
    });

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: adminBody,
      },
    });

    const userEmailBody = makeBody({
      to: email,
      from: EMAIL_USER,
      subject: 'Thank You for Order in ProWorkforceX',
      message: orderLetter({
        username: fullName,
        orderDate: format(new Date(), 'MMMM dd, yyyy'),
        service: product.title,
        total: `${product.cost.from ? 'from ' : ''}${product.cost.price}`,
        orderNumber: String(Date.now()),
      }),
    });

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: userEmailBody },
    });

    if (res.status !== 200) {
      throw new Error(`Failed to send email. Status: ${res.status}`);
    }

    return { data: res.data, status: res.statusText };
  } catch (err: unknown) {
    console.error('Error order product:', err);

    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error('Unknown error occurred.');
  }
}
