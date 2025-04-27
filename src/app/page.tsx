import React from "react";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import HomeContent from "@/components/landing/modal";

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-deep-space text-white overflow-x-hidden">
			{/* Header */}
			<header className="py-6 px-6 md:px-10 absolute top-0 left-0 right-0 z-10">
				<div className="container mx-auto flex justify-between items-center">
					<Logo />
				</div>
			</header>

			{/* Hero + Features (client-only) */}
			<HomeContent />

			{/* Social Proof (static) */}
			<section className="py-16 bg-black/30">
				<div className="container mx-auto px-6">
					<div className="text-center mb-12">
						<h2 className="text-2xl font-poppins font-semibold mb-4">
							Performance Pulse
						</h2>
						<p className="text-2xl md:text-3xl font-light">
							SpellPost users average{" "}
							<span className="font-semibold text-spellpost-orange">
								+45% share rate
							</span>{" "}
							in week one.
						</p>
					</div>
					<div className="mt-12">
						<h3 className="text-xl font-poppins font-semibold mb-6 text-center">
							Top posts this week
						</h3>
						<div className="flex overflow-x-auto pb-6 space-x-4 scrollbar-hide">
							{[1, 2, 3, 4, 5].map((item) => (
								<div key={item} className="viral-card min-w-[280px] shrink-0">
									<div className="flex items-center gap-3 mb-4">
										<div className="w-10 h-10 rounded-full bg-linear-to-r from-spellpost-orange to-spellpost-teal" />
										<div>
											<p className="font-medium">@viral_creator_{item}</p>
											<p className="text-xs text-gray-400">4d ago</p>
										</div>
									</div>
									<p className="text-sm text-gray-300 mb-4">
										"Using SpellPost's Hook Builder, our engagement jumped by 3x
										overnight! #GameChanger"
									</p>
									<div className="flex items-center justify-between text-xs text-gray-400">
										<span>15.{item}K shares</span>
										<div className="flex items-center">
											<span className="text-spellpost-orange font-semibold">
												+89%
											</span>
											<span className="ml-1">vs avg</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}
