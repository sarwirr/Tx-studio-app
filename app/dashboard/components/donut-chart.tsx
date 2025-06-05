"use client"

import type React from "react"

interface Segment {
  percentage: number
  color: string // Tailwind CSS class for stroke color e.g., "stroke-cyan-500"
}

interface DonutChartProps {
  segments: Segment[]
  size?: number
  strokeWidth?: number
  backgroundColor?: string // Tailwind CSS class for background track color
}

const DonutChart: React.FC<DonutChartProps> = ({
  segments,
  size = 100,
  strokeWidth = 20,
  backgroundColor = "stroke-slate-200",
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  let accumulatedPercentage = 0

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90 transform">
      {/* Background circle */}
      <circle
        className={backgroundColor}
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      {/* Segments */}
      {segments.map((segment, index) => {
        const segmentLength = (segment.percentage / 100) * circumference
        // Add a tiny gap between segments if desired, e.g., by reducing segmentLength slightly
        // const gapSize = 1; // In pixels
        // const effectiveSegmentLength = segmentLength - (segments.length > 1 ? gapSize : 0);
        const strokeDasharray = `${segmentLength} ${circumference - segmentLength}`
        const strokeDashoffset = -(accumulatedPercentage / 100) * circumference

        accumulatedPercentage += segment.percentage

        return (
          <circle
            key={index}
            className={segment.color}
            strokeWidth={strokeWidth}
            strokeLinecap="butt" // Use "butt" for sharp edges
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{
              strokeDasharray: strokeDasharray,
              strokeDashoffset: strokeDashoffset,
            }}
          />
        )
      })}
    </svg>
  )
}

export default DonutChart
