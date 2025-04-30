'use client';

import useSWR from 'swr';
import { useParams } from 'next/navigation';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ProductPage() {
  const { id } = useParams();

  const { data: product, error } = useSWR(
    id ? `/api/products/${id}` : null,
    fetcher
  );

  if (error) return <div className="text-red-500">Failed to load</div>;
  if (!product) return <div className="text-white">Loading...</div>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
