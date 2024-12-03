import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import {VariantProps, cva} from 'class-variance-authority';
import { cn } from '../../utils';

const BecButtonVariants = cva(
    "flex border-none rounded-sm text-sm justify-around items-center box-border text-white outline-none h-6 enabled:active:scale-95 disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-becblue-500 hover:bg-becblue-200 enabled:active:bg-becblue-200 ",
                secondary: "text-blue-500 bg-white border-1 border-becblue-500 enabled:hover:text-white enabled:hover:bg-becblue-500 enabled:active:text-white enabled:active:bg-becblue-500",
                orange: "bg-becorange-500 enabled:hover:bg-becorange-200"
            },
            size: {
                default: "min-w-[120px]",
                small: ""
            },
            isImageButton: {
                no: "",
                yes: "w-8"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            isImageButton: "no"
        }
    }
);

interface BecButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof BecButtonVariants> {}

const BecButton = forwardRef<HTMLButtonElement, BecButtonProps>(
    ({className, size, variant, isImageButton, onClick, ...props}, ref) => {

        const buttonClickedHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
            if(onClick) {
                ev.preventDefault();
                ev.stopPropagation();
                onClick(ev);
            }
        }

        return (
            <button ref={ref} className={cn(BecButtonVariants({variant, size, isImageButton, className}))} 
            {...props} 
            onClick={buttonClickedHandler}
            />
        );
    }
);

export { BecButton, BecButtonVariants };