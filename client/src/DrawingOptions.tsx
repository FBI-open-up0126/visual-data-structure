import Button from "react-bootstrap/Button";

type Props<T extends string> = {
    currentOption?: T;
    options: readonly T[];
    onOptionChange?: (newOption: T) => void;
};

function DrawingOptions<T extends string>({
    currentOption,
    options,
    onOptionChange = () => {},
}: Props<T>): JSX.Element {
    return (
        <>
            {options.map(value => {
                return (
                    <Button
                        onClick={() => onOptionChange(value)}
                        variant={value === currentOption ? "success" : "primary"}
                        className="ms-3"
                    >
                        {value}
                    </Button>
                );
            })}
        </>
    );
}

export default DrawingOptions;
