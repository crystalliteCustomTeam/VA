// Utils
import mail from "@/src/helpers/mail"
// Next
import { NextResponse } from "next/server"
export async function POST(request) {
  try {
    const requestBody = await request.json()
    const { name, email, phone, message, IP, currentdate, pageUrl } =
      requestBody
    const mailResponse = await mail({
      currentdate,
      pageUrl,
      IP,
      name,
      email,
      phone,
      message,
    })
    if (mailResponse) return NextResponse.json({ success: true, status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 })
  }
}
