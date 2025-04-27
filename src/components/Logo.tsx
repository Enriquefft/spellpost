import { Zap } from "lucide-react";
import React from "react";

interface LogoProps {
	variant?: "dark" | "light";
	withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ variant = "light", withText = true }) => {
	const textColor = variant === "dark" ? "text-spellpost-dark" : "text-white";

	return (
		<div className="flex items-center gap-2">
			<div className="relative">
				<div className="w-8 h-8 rounded-md bg-spellpost-orange flex items-center justify-center animate-pulse-glow">
					<Zap size={20} className="text-white" />
				</div>
			</div>
			{withText && (
				<span className={`font-poppins font-semibold text-xl ${textColor}`}>
					SpellPost
				</span>
			)}
		</div>
	);
};

export default Logo;
