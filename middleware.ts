import withAuth from "next-auth/middleware"

export default withAuth({
  secret: process.env.NEXTJS_SECRET,

})

export const config = {
  matcher: ['/admin/:path*', '/admin'],
};




