import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils";

const BecImageButtonVariants = cva(
  "flex border-none rounded-sm text-sm justify-around items-center box-border text-white outline-none h-6 enabled:active:scale-95 disabled:opacity-50 w-7 h-7",
  {
    variants: {
      variant: {
        default:
          "bg-becblue-500 hover:bg-becblue-200 enabled:active:bg-becblue-200 ",
        secondary:
          "text-blue-500 bg-white border-1 border-becblue-500 enabled:hover:text-white enabled:hover:bg-becblue-500 enabled:active:text-white enabled:active:bg-becblue-500",
        orange: "bg-becorange-500 enabled:hover:bg-becorange-200",
      },
      size: {
        default: "min-w-[120px]",
        small: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface BecImageButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof BecImageButtonVariants> {
  altText?: string;
  imgSrc: string;
  keyboardKey?: string;
}

const BecImageButton = forwardRef<HTMLButtonElement, BecImageButtonProps>(
  ({ className, size, variant, onClick, altText, imgSrc, ...props }, ref) => {
    const buttonClickedHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        ev.preventDefault();
        ev.stopPropagation();
        onClick(ev);
      }
    };

    return (
      <button
        ref={ref}
        className={cn(BecImageButtonVariants({ variant, size, className }))}
        {...props}
        onClick={buttonClickedHandler}
      >
        <img
          src={imgSrc}
          alt={altText && "Image"}
        />
      </button>
    );
  },
);

export { BecImageButton };
