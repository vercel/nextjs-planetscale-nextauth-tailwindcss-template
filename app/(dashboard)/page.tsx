import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsTable } from './products-table';

export const products = [
  {
    id: 1,
    name: 'Product 1',
    status: 'Available',
    price: '$10.00',
    totalSales: 100,
    createdAt: '2023-01-01'
  },
  {
    id: 2,
    name: 'Product 2',
    status: 'Out of Stock',
    price: '$20.00',
    totalSales: 50,
    createdAt: '2023-02-01'
  },
  {
    id: 3,
    name: 'Product 3',
    status: 'Available',
    price: '$30.00',
    totalSales: 200,
    createdAt: '2023-03-01'
  }
];

export const totalProducts = 5;

export default async function ProductsPage(props: {
  searchParams: Promise<{ q: string; offset: string }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Archived
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <ProductsTable
          products={products}
          offset={0}
          totalProducts={totalProducts}
        />
      </TabsContent>
    </Tabs>
  );
}
