import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json(
      { message: "URL is required as a query parameter." },
      {
        status: 400,
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
  }

  if (
    !url.startsWith("https://github.com/") &&
    !url.startsWith("https://api.github.com/")
  ) {
    return NextResponse.json(
      { message: "URL must start with 'https://github.com/'" },
      {
        status: 400,
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
  }

  try {
    const response = await fetch(url);
    // console.log(url);
    // console.log(response.status);
    // If the request is successful, the URL exists
    return NextResponse.json(
      { exists: response.status === 200 },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
  } catch (error) {
    // If the request fails, the URL does not exist or is not reachable
    return NextResponse.json(
      { exists: false },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
  }
}
