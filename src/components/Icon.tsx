import { useEffect, useRef, useState } from "react";

interface IconProps {
	color?: string;
	size?: number;
	baseColor?: string;
}

const Icon = ({
	color = "#ff0000",
	size = 1,
	baseColor = "#000000",
}: IconProps) => {
	const [image, setImage] = useState<string | null>(null);
	const [fileName, setFileName] = useState("icon");
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	// 描画データの定義
	const baseRects = [
		[0, 9, 2, 7],
		[0, 7, 16, 2],
		[6, 2, 2, 3],
		[6, 9, 2, 7],
		[8, 2, 1, 2],
		[8, 14, 1, 2],
		[9, 2, 2, 14],
		[12, 0, 2, 16],
		[14, 0, 2, 2],
	];

	const accentRects = [
		[3, 4, 2, 2],
		[3, 10, 2, 6],
	];

	useEffect(() => {
		const canvasEl = document.createElement("canvas");
		canvasEl.width = 16 * size;
		canvasEl.height = 16 * size;
		canvasRef.current = canvasEl;

		const ctx = canvasEl.getContext("2d");

		if (ctx) {
			ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

			// ベース色で描画
			ctx.fillStyle = baseColor;
			for (const rect of baseRects) {
				const [x, y, w, h] = rect.map((i) => i * size);
				ctx.fillRect(x, y, w, h);
			}

			// アクセント色で描画
			ctx.fillStyle = color;
			for (const rect of accentRects) {
				const [x, y, w, h] = rect.map((i) => i * size);
				ctx.fillRect(x, y, w, h);
			}

			setImage(canvasEl.toDataURL());
		}
	}, [color, size, baseColor]);

	// PNG ダウンロード関数
	const downloadPNG = () => {
		if (canvasRef.current) {
			const link = document.createElement("a");
			link.download = `${fileName}-${size}x.png`;
			link.href = canvasRef.current.toDataURL();
			link.click();
		}
	};

	// SVG ダウンロード関数
	const downloadSVG = () => {
		const svgContent = generateSVG();
		const blob = new Blob([svgContent], { type: "image/svg+xml" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.download = `${fileName}-${size}x.svg`;
		link.href = url;
		link.click();
		URL.revokeObjectURL(url);
	};

	// SVG生成関数
	const generateSVG = () => {
		const width = 16 * size;
		const height = 16 * size;

		let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;

		// ベース色の矩形
		for (const rect of baseRects) {
			const [x, y, w, h] = rect.map((i) => i * size);
			svgContent += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${baseColor}"/>`;
		}

		// アクセント色の矩形
		for (const rect of accentRects) {
			const [x, y, w, h] = rect.map((i) => i * size);
			svgContent += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${color}"/>`;
		}

		svgContent += "</svg>";
		return svgContent;
	};

	return (
		<div className="flex flex-col items-center gap-4">
			{image && (
				<img src={image} width={16 * size} height={16 * size} alt="Icon" />
			)}

			<div className="flex flex-col gap-4 w-full max-w-sm">
				<div className="flex flex-col gap-2">
					<label
						htmlFor="fileName"
						className="text-sm font-semibold text-gray-800"
					>
						ファイル名
					</label>
					<input
						id="fileName"
						type="text"
						value={fileName}
						onChange={(e) =>
							setFileName(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ""))
						}
						placeholder="icon"
						className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/70 text-gray-800"
					/>
				</div>

				<div className="flex gap-3">
					<button
						onClick={downloadPNG}
						className="flex-1 px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium shadow-sm whitespace-nowrap"
						type="button"
						disabled={!fileName.trim()}
					>
						PNG ダウンロード
					</button>
					<button
						onClick={downloadSVG}
						className="flex-1 px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium shadow-sm whitespace-nowrap"
						type="button"
						disabled={!fileName.trim()}
					>
						SVG ダウンロード
					</button>
				</div>
			</div>
		</div>
	);
};

export default Icon;
