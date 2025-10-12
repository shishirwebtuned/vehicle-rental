interface BtnPropType {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export const CustomButton = ({
    text,
    onClick,
    type = "button",
    disabled = false
}: BtnPropType) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`bg-primary font-nunito cursor-pointer text-white px-6 py-2 rounded-md font-medium transition lg:text-base md:text-sm text-xs 
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/90"}`}
        >
            {text}
        </button>
    );
};
