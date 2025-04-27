import type { LucideIcon } from "lucide-react";
import React from "react";

interface FeatureCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	icon: Icon,
	title,
	description,
}) => {
	return (
		<div className="feature-card">
			<div className="w-12 h-12 bg-spellpost-orange/20 rounded-full flex items-center justify-center mb-4">
				<Icon size={24} className="text-spellpost-orange" />
			</div>
			<h3 className="text-lg font-poppins font-semibold mb-2">{title}</h3>
			<p className="text-gray-400 text-sm">{description}</p>
		</div>
	);
};

export default FeatureCard;
