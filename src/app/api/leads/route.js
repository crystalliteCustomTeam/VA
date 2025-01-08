// Utils
import mail from "@/src/helpers/mail"
// Next
import { NextResponse } from "next/server"
export async function POST(request) {
  try {
    const requestBody = await request.json()
    const { page_url, user_ip, lead_data } = requestBody
    const { name, email, phone, message } = lead_data
    const mailResponse = await mail({
      page_url,
      user_ip,
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
