import { NextResponse } from 'next/server';
import { getAnalysisData } from '@/app/api/database/queries';

export async function GET() {
  try {
    const analysisData = await getAnalysisData();
    return NextResponse.json(analysisData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch analysis data' },
      { status: 500 }
    );
  }
}
