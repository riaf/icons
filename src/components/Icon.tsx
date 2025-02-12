import { useEffect, useState } from "react";

const Icon = ({ color = "#ff0000", size = 1, baseColor = "#000000" }) => {
	const [image, setImage] = useState<string | null>(null);

	useEffect(() => {
		const canvasEl = document.createElement("canvas");
		canvasEl.width = 16 * size;
		canvasEl.height = 16 * size;

		const ctx = canvasEl.getContext("2d");

		if (ctx) {
			ctx.clearRect(0, 0, 16, 16);

			ctx.fillStyle = baseColor;
			for (const rect of [
				[0, 9, 2, 7],
				[0, 7, 16, 2],
				[6, 2, 2, 3],
				[6, 9, 2, 7],
				[8, 2, 1, 2],
				[8, 14, 1, 2],
				[9, 2, 2, 14],
				[12, 0, 2, 16],
				[14, 0, 2, 2],
			]) {
				const [x, y, w, h] = rect.map((i) => i * size);
				ctx.fillRect(x, y, w, h);
			}

			ctx.fillStyle = color;
			for (const rect of [
				[3, 4, 2, 2],
				[3, 10, 2, 6],
			]) {
				const [x, y, w, h] = rect.map((i) => i * size);
				ctx.fillRect(x, y, w, h);
			}

			setImage(canvasEl.toDataURL());
		}
	}, [color, size, baseColor]);

	return (
		<>
			{image && (
				<img src={image} width={16 * size} height={16 * size} alt="Icon" />
			)}
		</>
	);
};

export default Icon;
