import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ section: string }> }
) {
    const { section } = await params;
    const jsonDirectory = path.join(process.cwd(), 'data');
    const filePath = path.join(jsonDirectory, `${section}.json`);

    try {
        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        return NextResponse.json(data);
    } catch {
        return NextResponse.json(
            { error: 'Section not found' },
            { status: 404 }
        );
    }
}

export async function POST(
    request: Request,
    { params }: { params: Promise<{ section: string }> }
) {
    const { section } = await params;
    const jsonDirectory = path.join(process.cwd(), 'data');
    const filePath = path.join(jsonDirectory, `${section}.json`);

    try {
        const newData = await request.json();
        await fs.writeFile(filePath, JSON.stringify(newData, null, 2), 'utf8');
        return NextResponse.json({ success: true, message: 'Content updated successfully' });
    } catch {
        return NextResponse.json(
            { error: 'Failed to update content' },
            { status: 500 }
        );
    }
}
