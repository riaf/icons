import { useState } from "react";
import Icon from "./Icon";

function App() {
	const [size, setSize] = useState(10);
	const [color, setColor] = useState("#5f6527");
	const [baseColor, setBaseColor] = useState("#000000");
	const [bgColor, setBgColor] = useState("#ffffff");

	return (
		<div
			className="min-h-dvh flex flex-col justify-center items-center p-6"
			style={{ backgroundColor: bgColor }}
		>
			<div className="flex flex-col items-center mb-8 max-w-lg mx-auto">
				<Icon size={size} color={color} baseColor={baseColor} />
			</div>
			<div className="flex justify-center items-center max-w-md w-full">
				<form className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
					<fieldset className="flex flex-col mb-5">
						<label
							htmlFor="size"
							className="block text-gray-800 text-sm font-semibold mb-2"
						>
							Size
						</label>
						<input
							id="size"
							type="number"
							value={size}
							min={1}
							max={50}
							onChange={(e) => setSize(Number(e.target.value))}
							className="px-4 py-3 border border-gray-200 rounded-lg text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/70"
						/>
					</fieldset>

					<fieldset className="flex flex-col mb-5">
						<label
							htmlFor="color"
							className="block text-gray-800 text-sm font-semibold mb-2"
						>
							Accent color
						</label>
						<div className="relative">
							<input
								id="color"
								type="color"
								value={color}
								onChange={(e) => setColor(e.target.value)}
								className="w-full h-12 rounded-lg cursor-pointer bg-transparent"
								style={{
									WebkitAppearance: "none",
									appearance: "none",
									border: "none",
									outline: "none",
								}}
							/>
							<div
								className="absolute inset-0 rounded-lg ring-2 ring-gray-200 pointer-events-none"
								style={{ backgroundColor: color }}
							/>
						</div>
					</fieldset>

					<fieldset className="flex flex-col mb-6">
						<label
							htmlFor="baseColor"
							className="block text-gray-800 text-sm font-semibold mb-2"
						>
							Base text color
						</label>
						<div className="relative">
							<input
								id="baseColor"
								type="color"
								value={baseColor}
								onChange={(e) => setBaseColor(e.target.value)}
								className="w-full h-12 rounded-lg cursor-pointer bg-transparent"
								style={{
									WebkitAppearance: "none",
									appearance: "none",
									border: "none",
									outline: "none",
								}}
							/>
							<div
								className="absolute inset-0 rounded-lg ring-2 ring-gray-200 pointer-events-none"
								style={{ backgroundColor: baseColor }}
							/>
						</div>
					</fieldset>

					<hr className="h-px my-6 bg-gray-200 border-0" />

					<fieldset className="flex flex-col">
						<label
							htmlFor="bgColor"
							className="block text-gray-800 text-sm font-semibold mb-2"
						>
							Page background color
						</label>
						<div className="relative">
							<input
								id="bgColor"
								type="color"
								value={bgColor}
								onChange={(e) => setBgColor(e.target.value)}
								className="w-full h-12 rounded-lg cursor-pointer bg-transparent"
								style={{
									WebkitAppearance: "none",
									appearance: "none",
									border: "none",
									outline: "none",
								}}
							/>
							<div
								className="absolute inset-0 rounded-lg ring-2 ring-gray-200 pointer-events-none"
								style={{ backgroundColor: bgColor }}
							/>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	);
}

export default App;
