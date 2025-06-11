import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'logo';
}

export function Button({ children, className, variant = 'default', ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex items-center justify-center rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 active:bg-green-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        variant === 'default' && 'h-10 bg-green-500 px-4 text-sm font-medium text-white hover:bg-green-400',
        variant === 'logo' && 'h-[200px] w-[200px] bg-white shadow-md hover:shadow-lg',
        className,
      )}
    >
      {children}
    </button>
  );
}
