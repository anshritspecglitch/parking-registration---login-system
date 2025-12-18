"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, LogOut, User, Building, Hash, Calendar } from "lucide-react"

export function DashboardPage() {
  const [message, setMessage] = useState("Login successful! Your parking registration is active.")
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Welcome to your parking dashboard.")
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">ParkSRM</span>
            </div>
            <Link href="/login">
              <Button variant="ghost" size="sm" className="gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold mb-2">Parking Dashboard</h1>
            <p className="text-muted-foreground">{message}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-primary/20 bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Profile Information
                </CardTitle>
                <CardDescription>Your registered details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Registered User</p>
                    <p className="text-sm text-muted-foreground">Parking Permit Active</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-chart-2/20 bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-chart-2" />
                  Vehicle Details
                </CardTitle>
                <CardDescription>Your registered vehicle</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Hash className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Vehicle Number: Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Department: Assigned</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Valid Until: Dec 2025</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 border-chart-3/20 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Parking Status</CardTitle>
              <CardDescription>Your current parking permit status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <div>
                  <p className="font-medium text-primary">Active Permit</p>
                  <p className="text-sm text-muted-foreground">Your vehicle is registered for campus parking</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
