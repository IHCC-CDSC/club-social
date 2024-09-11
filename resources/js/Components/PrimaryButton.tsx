import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-ihccRed border border-transparent rounded-lg font-semibold text-xs text-white uppercase tracking-widest hover:bg-ihccRedDark focus:bg-ihccRedDark active:bg-ihccRedDark focus:outline-none focus:ring-2 focus:ring-ihccYellow focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
