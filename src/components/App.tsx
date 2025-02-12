import { useState } from "react";
import Icon from "./Icon";

function App() {
	const [size, setSize] = useState(10);
	const [color, setColor] = useState("#5f6527");
	const [baseColor, setBaseColor] = useState("#000000");
	const [bgColor, setBgColor] = useState("#ffffff");

	return (
		<div
			className="min-h-dvh place-content-center"
			style={{ backgroundColor: bgColor }}
		>
			<div className="flex justify-center items-center h-1/2 mb-8 max-w-md mx-auto">
				<Icon size={size} color={color} baseColor={baseColor} />
			</div>
			<div className="flex justify-center items-center">
				<form>
					<fieldset className="flex flex-col mb-4">
						<label
							htmlFor="size"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Size
						</label>
						<input
							id="size"
							type="number"
							value={size}
							min={1}
							onChange={(e) => setSize(Number(e.target.value))}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</fieldset>
					<fieldset className="flex flex-col mb-4">
						<label
							htmlFor="color"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Accent color
						</label>
						<input
							id="color"
							type="color"
							value={color}
							onChange={(e) => setColor(e.target.value)}
						/>
					</fieldset>
					<fieldset className="flex flex-col mb-8">
						<label
							htmlFor="baseColor"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Base text color
						</label>
						<input
							id="baseColor"
							type="color"
							value={baseColor}
							onChange={(e) => setBaseColor(e.target.value)}
						/>
					</fieldset>
					<hr className="h-px my-8 bg-gray-200 border-0" />
					<fieldset className="flex flex-col mb-4">
						<label
							htmlFor="bgColor"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Page background color
						</label>
						<input
							id="bgColor"
							type="color"
							value={bgColor}
							onChange={(e) => setBgColor(e.target.value)}
						/>
					</fieldset>
				</form>
			</div>
		</div>
	);
}

export default App;
