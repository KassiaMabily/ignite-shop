import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
import { formatLineItems } from "use-shopping-cart/utilities";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cartDetails } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!cartDetails) {
    return res.status(400).json({ error: 'Products not found.' });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  console.log(cartDetails)

  let line_items = formatLineItems(cartDetails)

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: line_items
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}
