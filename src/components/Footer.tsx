import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
	return (
		<footer className="border-t border-white/10 mt-20 py-10">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<Logo />

					<div className="mt-6 md:mt-0 flex flex-col md:flex-row items-center gap-4 md:gap-8">
						<Link
							href="/about"
							className="text-sm text-gray-400 hover:text-white transition-colors"
						>
							About us{" "}
						</Link>

						<Link
							href="/privacy"
							className="text-sm text-gray-400 hover:text-white transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="/tos"
							className="text-sm text-gray-400 hover:text-white transition-colors"
						>
							Terms
						</Link>
					</div>
				</div>

				<div className="mt-8 text-center text-sm text-gray-500">
					&copy; 2025 SpellPost. Fully automated. Fully viral.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
