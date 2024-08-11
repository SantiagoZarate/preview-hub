import { PhotoMiniIcon } from "@/components/icons/PhotoMiniIcon";
import { Button } from "@/components/ui/button";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import Link from "next/link";

export default function PreviewsPage() {
  return (
    <section className="flex flex-col gap-8">
      <header className="flex flex-col gap-2 p-4 bg-secondary border-dotted border-border border rounded-lg">
        <Text intent={"title"}>
          Previews
        </Text>
        <Text>
          Share your work in progress with customer to get feedback from them
        </Text>
        <Link className="w-fit" href={"/previews/create"}>
          <Button className="">
            Add new preview
          </Button>
        </Link>
      </header>
      <section className="flex flex-col gap-4">
        <header className="flex items-center divide-x">
          <span className="pr-2">
            <PhotoMiniIcon />
          </span>
          <Text className="pl-2">Your previews</Text>
        </header>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              [1, 2, 3, 4, 5].map(n => (
                <TableRow key={n}>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>

      </section>
    </section>
  )
}