import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-electric/25",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-electric/30 bg-transparent text-electric hover:bg-electric/10 hover:border-electric",
        secondary:
          "bg-surface-elevated text-foreground hover:bg-surface-elevated/80",
        ghost: "hover:bg-surface-elevated hover:text-foreground",
        link: "text-electric underline-offset-4 hover:underline hover:text-electric-bright",
        hero: "bg-gradient-to-r from-electric to-accent text-foreground font-semibold hover:shadow-xl hover:shadow-electric/30 hover:scale-105",
        neural: "bg-surface-glass backdrop-blur-lg border border-electric/20 text-foreground hover:border-electric/40 hover:bg-electric/10 glow-pulse",
        waitlist: "bg-electric text-background hover:bg-electric-bright hover:shadow-lg hover:shadow-electric/40 font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
