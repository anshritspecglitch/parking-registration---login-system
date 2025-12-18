import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { user_type, identifier, password } = body

    if (!user_type || !identifier || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (user_type === "student") {
      const { data: student, error } = await supabaseAdmin
        .from("students")
        .select("*")
        .eq("srm_mail", identifier)
        .single()

      if (error || !student) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
      }

      const isValidPassword = await bcrypt.compare(password, student.password_hash)

      if (!isValidPassword) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
      }

      return NextResponse.json({
        message: "Login successful",
        user: {
          id: student.id,
          name: student.name,
          email: student.srm_mail,
          ra_number: student.ra_number,
          department: student.department,
          vehicle_type: student.vehicle_type,
          vehicle_number: student.vehicle_number,
          type: "student"
        }
      })
    } else if (user_type === "faculty") {
      const { data: faculty, error } = await supabaseAdmin
        .from("faculty")
        .select("*")
        .eq("employee_id", identifier)
        .single()

      if (error || !faculty) {
        return NextResponse.json({ error: "Invalid Employee ID or password" }, { status: 401 })
      }

      const isValidPassword = await bcrypt.compare(password, faculty.password_hash)

      if (!isValidPassword) {
        return NextResponse.json({ error: "Invalid Employee ID or password" }, { status: 401 })
      }

      return NextResponse.json({
        message: "Login successful",
        user: {
          id: faculty.id,
          name: faculty.name,
          employee_id: faculty.employee_id,
          department: faculty.department,
          vehicle_type: faculty.vehicle_type,
          number_plate: faculty.number_plate,
          type: "faculty"
        }
      })
    }

    return NextResponse.json({ error: "Invalid user type" }, { status: 400 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
