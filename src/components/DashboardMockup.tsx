import React from "react";

const DashboardMockup: React.FC = () => {
	return (
		<div className="relative w-full max-w-xl mx-auto mt-8 rounded-xl overflow-hidden shadow-2xl border border-white/10">
			<div className="bg-spellpost-dark border-b border-white/10 p-3 flex items-center gap-3">
				<div className="flex gap-1.5">
					<div className="w-3 h-3 rounded-full bg-red-500"></div>
					<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
					<div className="w-3 h-3 rounded-full bg-green-500"></div>
				</div>
				<div className="text-xs text-center w-full text-gray-400">
					SpellPost Dashboard
				</div>
			</div>

			<div className="p-4 bg-linear-to-b from-spellpost-dark to-[#151920]">
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-12 md:col-span-8">
						<div className="bg-black/30 p-4 rounded-lg border border-white/5 mb-4">
							<h3 className="text-sm font-medium text-gray-300 mb-2">
								Latest Performance
							</h3>
							<div className="h-32 flex items-end gap-1">
								{[25, 38, 20, 45, 60, 75, 92].map((h, i) => (
									<div
										key={i.toString()}
										className="flex-1 flex flex-col items-center h-full" /* ← add h-full */
									>
										{/*fill*/}
										<div
											className="w-full "
											style={{ height: `${100 - h}%` }}
										/>

										<div
											className={`w-full rounded-t-sm ${
												i === 6 ? "bg-spellpost-orange" : "bg-spellpost-teal/60"
											}`}
											style={{ height: `${h}%` }}
										/>
										<div className="text-[10px] text-gray-400 mt-1">
											{i + 1}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="col-span-12 md:col-span-4">
						<div className="bg-black/30 p-4 rounded-lg border border-white/5">
							<h3 className="text-sm font-medium text-gray-300 mb-2">
								Viral Score
							</h3>
							<div className="relative h-24 flex items-center justify-center">
								{/* Contenedor fijo de 96×96px (w-24 h-24) */}
								<div className="relative w-24 h-24">
									<svg viewBox="0 0 96 96" className="-rotate-90 w-full h-full">
										<title>Viral Score</title>
										{/* Círculo de fondo */}
										<circle
											cx="48"
											cy="48"
											r="44"
											strokeWidth="8"
											className="stroke-gray-700 fill-transparent"
										/>
										{/* Círculo de progreso */}
										<circle
											cx="48"
											cy="48"
											r="44"
											strokeWidth="8"
											strokeLinecap="round"
											className="stroke-spellpost-orange fill-transparent"
											strokeDasharray="276.46" /* 2π·44 */
											strokeDashoffset="69.11" /* 0.25·276.46 */
										/>
									</svg>

									{/* Número centrado */}
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="text-2xl font-bold text-spellpost-orange">
											92
										</div>
									</div>
									<div className="absolute -right-6 -top-2 w-8 h-8 bg-spellpost-orange rounded-full flex items-center justify-center text-white text-xs font-bold">
										+8
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-span-12">
						<div className="bg-black/30 p-4 rounded-lg border border-white/5">
							<h3 className="text-sm font-medium text-gray-300 mb-2">
								Trending Hashtags
							</h3>
							<div className="flex flex-wrap gap-2">
								{[
									"#viralmarketing",
									"#growthhacking",
									"#contentcreators",
									"#socialmediagrowth",
									"#engagement",
								].map((tag) => (
									<span
										key={tag}
										className="bg-spellpost-orange/20 text-spellpost-orange text-xs rounded-full px-3 py-1"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardMockup;
