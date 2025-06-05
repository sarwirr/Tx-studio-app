"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

const tableData = {
  euribor1w: [
    { tenor: "7 DAYS", marketPlace: "0.0000", mrfDate: "0", mrfPremium: "0.0000", change: "0.0000", variation: "1" },
    { tenor: "30 DAYS", marketPlace: "0.0000", mrfDate: "0", mrfPremium: "0.0000", change: "0.0000", variation: "9" },
    {
      tenor: "90 DAYS",
      marketPlace: "0.0300",
      mrfDate: "0.02345",
      mrfPremium: "0.0300",
      change: "0.0300",
      variation: "0.02345",
    },
    {
      tenor: "180 DAYS",
      marketPlace: "0.03500",
      mrfDate: "0.03500",
      mrfPremium: "0.03500",
      change: "0.03500",
      variation: "0.03500",
    },
    {
      tenor: "360 DAYS",
      marketPlace: "0.004400",
      mrfDate: "0.004400",
      mrfPremium: "0.004400",
      change: "0.004400",
      variation: "0.004400",
    },
  ],
  euribor2w: [
    // Sample data, repeat structure for other tabs
    { tenor: "7 DAYS", marketPlace: "0.0010", mrfDate: "0", mrfPremium: "0.0010", change: "0.0010", variation: "2" },
  ],
  euribor3w: [
    { tenor: "7 DAYS", marketPlace: "0.0020", mrfDate: "0", mrfPremium: "0.0020", change: "0.0020", variation: "3" },
  ],
  averageSectorSpread: [
    { tenor: "7 DAYS", marketPlace: "0.0030", mrfDate: "0", mrfPremium: "0.0030", change: "0.0030", variation: "4" },
  ],
}

const tabConfigs = [
  { value: "euribor1w", label: "Euribor1w", data: tableData.euribor1w },
  { value: "euribor2w", label: "Euribor2w", data: tableData.euribor2w },
  { value: "euribor3w", label: "Euribor3w", data: tableData.euribor3w },
  { value: "averageSectorSpread", label: "Average Sector Spread", data: tableData.averageSectorSpread },
]

export function FinancialDataTable() {
  return (
    <Card className="shadow-sm">
      <CardContent className="pt-0">
        {" "}
        {/* Removed CardHeader to place Tabs directly */}
        <Tabs defaultValue="euribor1w" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1 h-auto rounded-md mb-4">
            {tabConfigs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-brand-light data-[state=active]:text-brand-DEFAULT data-[state=active]:shadow-none text-xs px-2 py-1.5"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabConfigs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="text-brand-DEFAULT font-semibold text-xs">Tenor</TableHead>
                    <TableHead className="text-brand-DEFAULT font-semibold text-xs">Market Place</TableHead>
                    <TableHead className="text-brand-DEFAULT font-semibold text-xs">Market Risk Free Date</TableHead>
                    <TableHead className="text-brand-DEFAULT font-semibold text-xs">Market Risk Free Premium</TableHead>
                    <TableHead className="text-brand-DEFAULT font-semibold text-xs">Change %</TableHead>
                    <TableHead className="text-brand-DEFAULT font-semibold text-xs text-right">Variation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tab.data.map((row, index) => (
                    <TableRow key={index} className="text-xs text-gray-700">
                      <TableCell className="font-medium py-2.5">{row.tenor}</TableCell>
                      <TableCell className="py-2.5">{row.marketPlace}</TableCell>
                      <TableCell className="py-2.5">{row.mrfDate}</TableCell>
                      <TableCell className="py-2.5">{row.mrfPremium}</TableCell>
                      <TableCell className="py-2.5">{row.change}</TableCell>
                      <TableCell className="text-right py-2.5">{row.variation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
