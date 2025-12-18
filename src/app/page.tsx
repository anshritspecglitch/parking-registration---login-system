import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, GraduationCap, Briefcase, Shield, Clock, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] -z-10 opacity-50" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">ParkSRM</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link href="/student">
                <Button size="sm">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
                <Shield className="w-4 h-4" />
                Secure Campus Parking
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                Smart Parking for
                <span className="text-primary block">SRM Community</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Register your vehicle, manage your parking permit, and enjoy hassle-free campus parking. 
                Designed exclusively for SRM students and faculty.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/student">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Student Registration
                  </Button>
                </Link>
                <Link href="/faculty">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                    <Briefcase className="w-5 h-5" />
                    Faculty Registration
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-center mb-12">Choose Your Registration Type</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/student" className="group">
                <Card className="h-full border-primary/20 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-display">Student Registration</CardTitle>
                    <CardDescription>For SRM students with valid RA numbers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Register with RA Number
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Use SRM Email (@srmist.edu.in)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Vehicle details & department info
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/faculty" className="group">
                <Card className="h-full border-chart-2/20 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-chart-2/50 hover:shadow-xl hover:shadow-chart-2/5">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-chart-2/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-7 h-7 text-chart-2" />
                    </div>
                    <CardTitle className="text-xl font-display">Faculty Registration</CardTitle>
                    <CardDescription>For SRM faculty and staff members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-chart-2" />
                        Register with Employee ID
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-chart-2" />
                        Department assignment
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-chart-2" />
                        Priority parking zones
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-center mb-4">Why ParkSRM?</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Streamlined parking management for the entire SRM campus community
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-chart-4/20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-chart-4" />
                </div>
                <h3 className="font-semibold mb-2">Quick Registration</h3>
                <p className="text-sm text-muted-foreground">Register in under 2 minutes with your campus credentials</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-chart-3/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Safe</h3>
                <p className="text-sm text-muted-foreground">Your data is encrypted and stored securely</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-chart-5/20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-chart-5" />
                </div>
                <h3 className="font-semibold mb-2">Easy Access</h3>
                <p className="text-sm text-muted-foreground">Seamless entry and exit with registered vehicles</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">Already Registered?</h2>
            <p className="text-muted-foreground mb-6">Access your parking dashboard and manage your account</p>
            <Link href="/login">
              <Button size="lg" variant="outline" className="gap-2">
                Login to Dashboard
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold">ParkSRM</span>
            </div>
            <p className="text-sm text-muted-foreground">
              SRM Institute of Science and Technology Campus Parking System
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
