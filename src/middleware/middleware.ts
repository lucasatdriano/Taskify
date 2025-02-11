// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(req: NextRequest) {
//     const token = req.cookies.get('token')?.value;

//     console.log('Middleware executado');
//     console.log('Token:', token);

//     if (!token) {
//         return NextResponse.redirect(new URL('/', req.url));
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/home', '/listTasks/:path*'],
// };
