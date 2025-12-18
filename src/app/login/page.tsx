"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogIn, ArrowLeft, Loader2, GraduationCap, Briefcase } from "lucide-react"

export function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [userType, setUserType] = useState<"student" | "faculty">("student")
  const [formData, setFormData] = useState({
    identifier: "",
    password: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_type: userType,
          identifier: formData.identifier,
          password: formData.password
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Login failed")
      }

      router.push("/dashboard")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-chart-3/20 via-background to-background">
      <div className="w-full max-w-md">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <Card className="border-chart-3/20 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-12 h-12 rounded-xl bg-chart-3/20 flex items-center justify-center mb-4">
              <LogIn className="w-6 h-6 text-chart-3" />
            </div>
            <CardTitle className="text-2xl font-display">Welcome Back</CardTitle>
            <CardDescription>Login to access your parking dashboard</CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs value={userType} onValueChange={(v) => setUserType(v as "student" | "faculty")} className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student" className="gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="faculty" className="gap-2">
                  <Briefcase className="w-4 h-4" />
                  Faculty
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="student" className="mt-4">
                <p className="text-sm text-muted-foreground text-center">
                  Login with your SRM Email address
                </p>
              </TabsContent>
              
              <TabsContent value="faculty" className="mt-4">
                <p className="text-sm text-muted-foreground text-center">
                  Login with your Employee ID
                </p>
              </TabsContent>
            </Tabs>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="identifier">
                  {userType === "student" ? "SRM Email" : "Employee ID"}
                </Label>
                <Input
                  id="identifier"
                  type={userType === "student" ? "email" : "text"}
                  placeholder={userType === "student" ? "yourname@srmist.edu.in" : "EMP001234"}
                  value={formData.identifier}
                  onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full bg-chart-3 hover:bg-chart-3/90" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href={userType === "student" ? "/student" : "/faculty"} className="text-chart-3 hover:underline">
                  Register here
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default LoginPage
