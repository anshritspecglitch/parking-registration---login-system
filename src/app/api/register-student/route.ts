import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { ra_number, department, vehicle_type, name, srm_mail, gender, vehicle_number, password } = body

    if (!ra_number || !department || !vehicle_type || !name || !srm_mail || !gender || !vehicle_number || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!srm_mail.endsWith("@srmist.edu.in")) {
      return NextResponse.json({ error: "Please use a valid SRM email address" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
    }

    const { data: existingEmail } = await supabaseAdmin
      .from("students")
      .select("id")
      .eq("srm_mail", srm_mail)
      .single()

    if (existingEmail) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 })
    }

    const { data: existingRa } = await supabaseAdmin
      .from("students")
      .select("id")
      .eq("ra_number", ra_number)
      .single()

    if (existingRa) {
      return NextResponse.json({ error: "RA Number already registered" }, { status: 400 })
    }

    const password_hash = await bcrypt.hash(password, 12)

    const { data, error } = await supabaseAdmin
      .from("students")
      .insert({
        ra_number,
        department,
        vehicle_type,
        name,
        srm_mail,
        gender,
        vehicle_number,
        password_hash
      })
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Registration failed. Please try again." }, { status: 500 })
    }

    return NextResponse.json({ 
      message: "Registration successful", 
      user: { id: data.id, name: data.name, srm_mail: data.srm_mail } 
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
