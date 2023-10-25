import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

// Initialize AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email } = req.body;

  const params = {
    Destination: {
      ToAddresses: [email]
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from ACDC Cooksite!'
        }
      },
      Subject: {
        Data: 'Welcome to ACDC Cooksite'
      }
    },
    Source: 'msimon@acdc.digital'
  };

  try {
    await ses.sendEmail(params).promise();
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
