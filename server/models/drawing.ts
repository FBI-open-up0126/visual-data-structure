import mongoose, { Schema } from "mongoose";

interface _Drawing {
    dataStructures: {
        type: string;
        x: number;
        y: number;
        name: string;
        properties: {
            [key: string]: string;
        };
    }[];
    drawingImage?: {
        url: string;
        filename: string;
    };
}

const drawingSchema = new Schema<_Drawing>({
    dataStructures: [
        {
            type: {
                type: String,
            },
            x: Number,
            y: Number,
            properties: {
                type: Map,
                of: String,
            },
            name: String,
        },
    ],
    drawingImage: {
        url: String,
        filename: String,
    },
});

const Drawing = mongoose.model<_Drawing>("Drawing", drawingSchema);

export default Drawing;
