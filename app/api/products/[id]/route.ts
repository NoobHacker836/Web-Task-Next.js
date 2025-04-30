import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define product type
type Product = {
  id: string;
  name: string;
  description: string;
};

// Mock product data with proper index signature
const mockProducts: { [key: string]: Product } = {
  '1': { id: '1', name: 'USB Rubber Ducky', description: 'A keystroke injection tool for pen testing.' },
  '2': { id: '2', name: 'WiFi Pineapple', description: 'Wireless auditing tool for red teaming.' },
  '3': { id: '3', name: 'Kali Linux Box', description: 'Preconfigured box with pentesting tools.' },
};

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = mockProducts[params.id];

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
