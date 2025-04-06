import type { PricingInfo } from "../data/pricing"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface PricingSectionProps {
  pricingInfo: PricingInfo
}

export function PricingSection({ pricingInfo }: PricingSectionProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold mb-8">Priser 2025</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Apartment Prices */}
        <Card className="p-6">
          <h3 className="text-xl font-medium mb-4">Lägenhet</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Period</TableHead>
                  <TableHead>Vecka</TableHead>
                  <TableHead>Dygn</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingInfo.apartmentPrices.map((price, index) => (
                  <TableRow key={index}>
                    <TableCell>{price.period}</TableCell>
                    <TableCell>{price.weekPrice} /vecka</TableCell>
                    <TableCell>{price.dayPrice} /dygn</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Cottage Prices */}
        <Card className="p-6">
          <h3 className="text-xl font-medium mb-4">Stuga</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Period</TableHead>
                  <TableHead>Vecka</TableHead>
                  <TableHead>Dygn</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingInfo.cottagePrices.map((price, index) => (
                  <TableRow key={index}>
                    <TableCell>{price.period}</TableCell>
                    <TableCell>{price.weekPrice} /vecka</TableCell>
                    <TableCell>{price.dayPrice} /dygn</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>

      {/* Other Prices */}
      <Card className="p-6 mb-12">
        <h3 className="text-xl font-medium mb-4">Övrigt</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Pris</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingInfo.otherPrices.map((price, index) => (
                <TableRow key={index}>
                  <TableCell>{price.service}</TableCell>
                  <TableCell>{price.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Additional Information */}
      <Card className="p-6">
        <h3 className="text-xl font-medium mb-4">Övrig information</h3>
        <ul className="space-y-4">
          {pricingInfo.additionalInfo.map((info, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{info}</span>
            </li>
          ))}
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Har du frågor angående uthyrning kan du skicka e-post till{" "}
              <a 
                href="mailto:bokning@gotlandsbrook.com" 
                className="text-blue-600 hover:text-blue-800 font-medium underline hover:no-underline transition-colors"
              >
                bokning@gotlandsbrook.com
              </a>
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>För att boka fyll i formuläret{" "}
              <a
                href="https://www.gotlandsbrook.com/information/uthyrning/"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 font-medium underline hover:no-underline transition-colors"
              >
                här
              </a>
            </span>
          </li>
        </ul>
      </Card>
    </section>
  )
}

