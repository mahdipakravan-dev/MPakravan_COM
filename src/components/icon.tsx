import React from 'react'
import { ChevronRightSquare, MenuIcon, PlayIcon, Shrub, Target, type LucideIcon } from 'lucide-react'

export const Icons = {
    developmentService: ChevronRightSquare,
    productGrowthAdvisoryService: Shrub,
    ctoService: Target,
    menu : MenuIcon,
    play : PlayIcon
}

export const Icon = React.forwardRef<
    React.ElementRef<LucideIcon>,
    React.ComponentPropsWithoutRef<LucideIcon> & {
        name: keyof typeof Icons
    }
>(({ name, className, ...props }, ref) => {
    // Assuming the icon name is valid
    const IconComponent = Icons[name]

    if (!IconComponent) {
        console.error(`Icon '${name}' not found.`)
        return null
    }

    return <IconComponent ref={ref} className={className} {...props} />
})

Icon.displayName = 'Icon'
