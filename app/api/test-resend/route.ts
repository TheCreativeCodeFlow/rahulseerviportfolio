import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_2sSbRjur_B42kQHMQ8U5wzPwqtmYvfPLQ"

  // Basic validation
  const isValidFormat = RESEND_API_KEY.startsWith("re_")
  const keyLength = RESEND_API_KEY.length

  return NextResponse.json({
    status: "✅ Resend API Key Test",
    hasKey: !!RESEND_API_KEY,
    keyLength: keyLength,
    validFormat: isValidFormat,
    keyPreview: RESEND_API_KEY ? `${RESEND_API_KEY.substring(0, 12)}...` : "Not set",
    expectedFormat: "re_xxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxxxxx",
    actualFormat: isValidFormat ? "✅ Valid" : "❌ Invalid",
    timestamp: new Date().toISOString(),
  })
}

export async function POST(request: NextRequest) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_2sSbRjur_B42kQHMQ8U5wzPwqtmYvfPLQ"

    if (!RESEND_API_KEY.startsWith("re_")) {
      return NextResponse.json({
        testStatus: "❌ FAILED",
        error: "Invalid API key format. Resend keys should start with 're_'",
        providedKey: `${RESEND_API_KEY.substring(0, 12)}...`,
        timestamp: new Date().toISOString(),
      })
    }

    // Try to initialize Resend
    const { Resend } = await import("resend")
    const resend = new Resend(RESEND_API_KEY)

    console.log("🧪 Testing Resend API key:", RESEND_API_KEY.substring(0, 12) + "...")

    // Test with a simple API call to validate the key
    try {
      const { data, error } = await resend.emails.send({
        from: "Test <onboarding@resend.dev>",
        to: ["delivered@resend.dev"], // Resend's test email that always works
        subject: "🧪 API Key Test",
        html: "<p>✅ This is a test email to validate the API key.</p>",
      })

      if (error) {
        console.error("❌ Test email failed:", error)
        return NextResponse.json({
          testStatus: "❌ FAILED",
          error: "API key authentication failed",
          details: error.message,
          timestamp: new Date().toISOString(),
        })
      }

      console.log("✅ Test email sent successfully:", data?.id)

      return NextResponse.json({
        testStatus: "✅ SUCCESS",
        message: "API key is valid and working perfectly!",
        emailId: data?.id,
        keyValid: true,
        timestamp: new Date().toISOString(),
      })
    } catch (resendError: unknown) {
      console.error("💥 Resend service error:", resendError)
      return NextResponse.json({
        testStatus: "❌ FAILED",
        error: "Resend service error",
        details: resendError instanceof Error ? resendError.message : String(resendError),
        timestamp: new Date().toISOString(),
      })
    }
  } catch (error: unknown) {
    return NextResponse.json(
      {
        testStatus: "💥 ERROR",
        error: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
