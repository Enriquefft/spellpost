import React from "react";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import HomeContent from "@/components/landing/modal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const mockOpinions = [
	{
		id: 1,
		username: "jane_doe",
		avatar: "/avatars/jane_doe.png",
		date: "Apr 22, 2025",
		content: "SpellPost's AI-driven posts doubled our reach in 48 hours!",
		shares: 12.3,
		growth: 92,
	},
	{
		id: 2,
		username: "mark_twain",
		avatar: "/avatars/mark_twain.png",
		date: "Apr 20, 2025",
		content: "I saved 5 hours/week on content creation—game changer.",
		shares: 7.1,
		growth: 75,
	},
	{
		id: 3,
		username: "lisa_smith",
		avatar: "/avatars/lisa_smith.png",
		date: "Apr 18, 2025",
		content: "Our engagement went from 1% to 4% thanks to SpellPost!",
		shares: 5.4,
		growth: 130,
	},
	{
		id: 4,
		username: "carlos_m",
		avatar: "/avatars/carlos_m.png",
		date: "Apr 15, 2025",
		content: "Best ROI on marketing spend I've seen all year.",
		shares: 9.8,
		growth: 88,
	},
	{
		id: 5,
		username: "emma_j",
		avatar: "/avatars/emma_j.png",
		date: "Apr 10, 2025",
		content: "From zero to viral in days—SpellPost delivers!",
		shares: 15.6,
		growth: 150,
	},
];

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
							Top Opinions This Week
						</h3>

						<Carousel
							opts={{ align: "start", loop: true }}
							className="relative"
						>
							<CarouselContent className="-ml-6">
								{mockOpinions.map((opinion) => (
									<CarouselItem
										key={opinion.id}
										className="pl-4 md:basis-1/3 basis-1/2 shrink-0"
									>
										<div className="flex items-center gap-3 mb-4">
											<Avatar>
												<AvatarImage src={opinion.avatar} />
												<AvatarFallback>
													{opinion.username.charAt(0).toUpperCase()}
												</AvatarFallback>
											</Avatar>
											<div>
												<p className="font-medium">@{opinion.username}</p>
												<p className="text-xs text-gray-400">{opinion.date}</p>
											</div>
										</div>

										<p className="text-sm text-gray-300 mb-4">
											"{opinion.content}"
										</p>

										<div className="flex items-center justify-between text-xs text-gray-400">
											<span>{opinion.shares.toFixed(1)}K shares</span>
											<div className="flex items-center">
												<span className="text-spellpost-orange font-semibold">
													+{opinion.growth}%
												</span>
												<span className="ml-1">vs avg</span>
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>

							<CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
							<CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
						</Carousel>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}
