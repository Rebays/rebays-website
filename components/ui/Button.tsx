import { ReactNode } from "react";


// Button component
export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "default",
  fullWidth = false,
  ...props
}: {
  children: ReactNode
  className?: string
  variant?: "primary" | "outline"
  size?: "default" | "sm" | "lg"
  fullWidth?: boolean
  // [key: string]: any
}) {
  const baseClasses = "relative overflow-hidden transition-all duration-300 font-medium"

  const sizeClasses = {
    sm: "h-8 px-3 py-1 text-xs rounded-full",
    default: "h-10 px-4 py-2 text-sm rounded-full",
    lg: "h-12 px-6 py-3 text-base rounded-full",
  }

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 shadow-lg shadow-teal-900/20",
    outline: "border border-white/10 bg-white/5 text-teal-400 hover:bg-white/10 hover:text-teal-300 backdrop-blur-sm",
  }

  const widthClass = fullWidth ? "w-full" : ""

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`

  return (
    <button className={classes} {...props}>
      <span className="absolute inset-0 flex items-center justify-center">{children}</span>
    </button>
  )
}