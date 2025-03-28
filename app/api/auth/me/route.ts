import { authOptions } from '@/constants/auth-options';
import { prisma } from '@/prisma/prisma-client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: any, res: any) {
  try {
    const user = await getServerSession(req, res, authOptions);

    if (!user) {
      return NextResponse.json(
        { message: 'Вы не авторизованы' },
        { status: 401 }
      );
    }

    const data = await prisma.user.findUnique({
      where: {
        id: Number(user.user.id)
      },
      select: {
        fullName: true,
        email: true,
        password: false
      }
    });

    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: '[USER_GET] Server error' },
      { status: 500 }
    );
  }
}
