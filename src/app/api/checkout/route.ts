import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.lineItems.length === 0) {
    return new Response("Error", {
      status: 405,
    });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "");

    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      line_items: body.lineItems,
      mode: "payment",
    });

    console.log("Session Object:", session);
    return NextResponse.json({ session });
  } catch (err) {
    console.error("Error in /api/checkout:", err);
    return new Response("Error", {
      status: 405,
    });
  }
}
