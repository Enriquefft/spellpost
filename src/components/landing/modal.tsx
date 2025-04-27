"use client";

import { Anchor, TrendingUp, Zap } from "lucide-react";
import React, { useRef, useState } from "react";
import DashboardMockup from "@/components/DashboardMockup";
import FeatureCard from "@/components/FeatureCard";
import FormModal from "@/components/FormModal";

export default function HomeContent() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const featuresRef = useRef<HTMLDivElement>(null);

	const handleModalClose = () => {
		setIsModalOpen(false);
		if (featuresRef.current) {
			featuresRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			{/* Hero Section */}
			<section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16">
				<div className="container mx-auto text-center max-w-3xl">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
						Ready to Make Your Next Post{" "}
						<span className="gradient-text">Go Viral</span>?
					</h1>

					<p className="text-lg md:text-xl text-gray-300 mb-8">
						With SpellPost's fully automated viral-engine, you never lift a
						finger.
					</p>

					<button
						type="button"
						onClick={() => setIsModalOpen(true)}
						className="btn-primary relative overflow-hidden group"
					>
						<div className="flex items-center gap-2">
							<span>Buy Now</span>
							<span className="px-2 py-0.5 bg-white/20 rounded text-sm">
								$49/mo
							</span>
						</div>
						<div className="absolute inset-0 bg-spellpost-orange/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
					</button>

					<DashboardMockup />
				</div>

				{/* Animated scroll indicator */}
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
					<div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section ref={featuresRef} className="py-20 px-6">
				<div className="container mx-auto">
					<h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-12 text-center">
						<span className="gradient-text">Viral</span> Features
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<FeatureCard
							icon={Zap}
							title="Hashtag Hacker™"
							description="AI-powered trending tags for maximum reach."
						/>
						<FeatureCard
							icon={Anchor}
							title="Hook Builder"
							description="Headlines proven to drive shares."
						/>
						<FeatureCard
							icon={TrendingUp}
							title="Viral Score Meter"
							description="Predict share potential before you post."
						/>
					</div>
				</div>
			</section>

			{/* Modal */}
			<FormModal isOpen={isModalOpen} onClose={handleModalClose} />
		</>
	);
}
