import type React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import Image from "next/image"

interface StatsCardProps {
  title: string
  description?: string | React.ReactNode
  value?: string | React.ReactNode
  icon?: React.ReactNode
  footer?: string | React.ReactNode
  variant?: "default" | "risk" | "score" | "transaction" | "profile"
  riskLevel?: "low" | "medium" | "high"
  riskGrade?: string
  scoreValue?: number // 0-100 for progress
}

export function StatsCard({
  title,
  description,
  value,
  icon,
  footer,
  variant = "default",
  riskLevel,
  riskGrade,
  scoreValue,
}: StatsCardProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        {variant === "profile" ? (
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-base font-semibold">{title}</CardTitle>
              {description && <CardDescription className="text-xs">{description}</CardDescription>}
            </div>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-500">
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <>
            <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
            {description && typeof description === "string" && (
              <CardDescription className="text-xs">{description}</CardDescription>
            )}
            {description && typeof description !== "string" && <div>{description}</div>}
          </>
        )}
      </CardHeader>
      <CardContent>
        {variant === "risk" && riskGrade && <div className="text-5xl font-bold text-green-500">{riskGrade}</div>}
        {variant === "score" && typeof scoreValue === "number" && (
          <div className="mt-1">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>A</span>
              <span>C</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
              <div
                className="bg-gradient-to-r from-green-400 to-yellow-400 h-2.5 rounded-full"
                style={{ width: `${scoreValue}%` }}
              />
              <div
                className="absolute top-1/2 bg-white border-2 border-gray-400 rounded-full w-3.5 h-3.5 -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${scoreValue}%` }}
              />
            </div>
          </div>
        )}
        {variant === "transaction" && value && (
          <div className="flex items-end justify-between">
            <div className="text-4xl font-bold text-gray-800">{value}</div>
            <Image src="/assets/coin.png" alt="Euro coins" width={48} height={48} />
          </div>
        )}
        {variant !== "risk" && variant !== "score" && variant !== "transaction" && variant !== "profile" && value && (
          <div className="text-4xl font-bold text-brand-DEFAULT">{value}</div>
        )}
        {footer && <p className="text-xs text-gray-500 mt-2">{footer}</p>}
      </CardContent>
    </Card>
  )
}
