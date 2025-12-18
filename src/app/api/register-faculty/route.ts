import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { employee_id, name, vehicle_type, department, gender, number_plate, password } = body

    if (!employee_id || !name || !vehicle_type || !department || !gender || !number_plate || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
    }

    const { data: existingEmployee } = await supabaseAdmin
      .from("faculty")
      .select("id")
      .eq("employee_id", employee_id)
      .single()

    if (existingEmployee) {
      return NextResponse.json({ error: "Employee ID already registered" }, { status: 400 })
    }

    const password_hash = await bcrypt.hash(password, 12)

    const { data, error } = await supabaseAdmin
      .from("faculty")
      .insert({
        employee_id,
        name,
        vehicle_type,
        department,
        gender,
        number_plate,
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
      user: { id: data.id, name: data.name, employee_id: data.employee_id } 
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
