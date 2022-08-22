import React from "react";
import Container from "react-bootstrap/Container";
import DrawingOptions from "../DrawingOptions";

const CANVAS_SIZE = 0.8;

const DRAW_MODES = ["Select", "Draw"] as const;
type DrawMode = typeof DRAW_MODES[number];

function Drawing(): JSX.Element {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const contextRef = React.useRef<CanvasRenderingContext2D | null>(null);

    const [isDrawing, setIsDrawing] = React.useState(false);

    const [drawMode, setDrawMode] = React.useState<DrawMode>("Draw");

    React.useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        const context = canvasRef.current.getContext("2d")!;

        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;

        contextRef.current = context;
    }, []);

    const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!contextRef.current) {
            return;
        }

        const { offsetX, offsetY } = nativeEvent;

        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);

        setIsDrawing(true);
    };

    const finishDrawing = () => {
        if (!contextRef.current) {
            return;
        }

        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!contextRef.current || !isDrawing || drawMode === "Select") {
            return;
        }

        const { offsetX, offsetY } = nativeEvent;

        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };

    return (
        <>
            <Container
                fluid
                className="d-flex flex-column justify-content-center align-items-center h-100"
            >
                <canvas
                    ref={canvasRef}
                    width={window.innerWidth * CANVAS_SIZE}
                    height={window.innerHeight * CANVAS_SIZE}
                    style={{
                        height: `${window.innerHeight * CANVAS_SIZE}px`,
                        width: `${window.innerWidth * CANVAS_SIZE}px`,
                        border: "2px solid black",
                    }}
                    onMouseDown={startDrawing}
                    onMouseUp={finishDrawing}
                    onMouseMove={draw}
                ></canvas>
            </Container>

            <footer
                style={{
                    height: "min(7vh, 100px)",
                }}
                className="bg-dark d-flex align-items-center"
            >
                <DrawingOptions<DrawMode>
                    options={DRAW_MODES}
                    currentOption={drawMode}
                    onOptionChange={newOption => setDrawMode(newOption)}
                />
            </footer>
        </>
    );
}

export default Drawing;
