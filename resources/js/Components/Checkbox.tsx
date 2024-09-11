import { InputHTMLAttributes } from 'react';

export default function Checkbox({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-500 text-ihccRed shadow-sm focus:ring-ihccRedDark ' +
                className
            }
        />
    );
}
