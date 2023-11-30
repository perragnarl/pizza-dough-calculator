type ButtonProps = {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
            className="bg-amber-400 text-stone-950 font-semibold text-xl py-4 px-8 rounded-md mt-12 focus-visible:outline-4 focus-visible:outline-dashed focus-visible:outline-white"
            {...props}
        >
            {children}
        </button>
    );
}
