/** biome-ignore-all lint/complexity/useLiteralKeys: <explanation> */

import { ArrowRight, X } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { submitLeadFormData } from "@/actions/submit";

interface FormModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose }) => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		challenge: "",
		email: "",
		name: "",
		phone: "",
		platform: "",
		timeline: "",
	});
	const [formErrors, setFormErrors] = useState<Record<string, string>>({});

	if (!isOpen) return null;

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		if (formErrors[name]) {
			setFormErrors({
				...formErrors,
				[name]: "",
			});
		}
	};

	const validateStep = (currentStep: number) => {
		const errors: Record<string, string> = {};

		if (currentStep === 1 && !formData.challenge.trim()) {
			errors["challenge"] = "Please tell us your challenge";
		}

		if (currentStep === 1 && !formData.platform) {
			errors["platform"] = "Please select a platform";
		}

		if (currentStep === 1 && !formData.timeline) {
			errors["timeline"] = "Please select a timeline";
		}

		if (currentStep === 2) {
			if (!formData.name.trim()) {
				errors["name"] = "Name is required";
			}

			if (!formData.email.trim()) {
				errors["email"] = "Email is required";
			} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
				errors["email"] = "Please enter a valid email";
			}

			if (!formData.phone.trim()) {
				errors["phone"] = "Phone number is required";
			}
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleNext = () => {
		if (validateStep(step)) {
			setStep(step + 1);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateStep(step)) {
			setStep(3);
			submitLeadFormData(formData);
			toast("Form submitted successfully!");
		}
	};

	const renderStepContent = () => {
		switch (step) {
			case 1:
				return (
					<div className="animate-slide-in">
						<h2 className="text-xl font-poppins font-semibold mb-6">
							Let's Make Sure We Get This Right
						</h2>

						<div className="space-y-6">
							<div>
								<label className="form-label" htmlFor="challenge">
									What's your #1 challenge with social media today?
								</label>
								<textarea
									id="challenge"
									name="challenge"
									value={formData.challenge}
									onChange={handleChange}
									placeholder="Tell us about your biggest challenge..."
									className="input-field resize-none h-24"
								/>
								{formErrors["challenge"] && (
									<p className="mt-1 text-xs text-red-400">
										{formErrors["challenge"]}
									</p>
								)}
							</div>

							<div>
								<label className="form-label" htmlFor="platform">
									Which platform drives your business most?
								</label>
								<select
									id="platform"
									name="platform"
									value={formData.platform}
									onChange={handleChange}
									className="input-field"
								>
									<option value="" disabled>
										Select a platform
									</option>
									<option value="Instagram">Instagram</option>
									<option value="LinkedIn">LinkedIn</option>
									<option value="Facebook">Facebook</option>
									<option value="Twitter">Twitter</option>
									<option value="Other">Other</option>
								</select>
								{formErrors["platform"] && (
									<p className="mt-1 text-xs text-red-400">
										{formErrors["platform"]}
									</p>
								)}
							</div>

							<div>
								<p className="form-label">
									How soon do you need to see viral results?
								</p>
								<div className="space-y-2">
									{[
										"Immediately",
										"1–2 weeks",
										"1 month",
										"Just researching",
									].map((option) => (
										<div key={option} className="flex items-center">
											<input
												type="radio"
												id={option}
												name="timeline"
												value={option}
												checked={formData.timeline === option}
												onChange={handleChange}
												className="w-4 h-4 text-spellpost-orange focus:ring-spellpost-orange"
											/>
											<label
												htmlFor={option}
												className="ml-2 text-sm text-gray-200"
											>
												{option}
											</label>
										</div>
									))}
								</div>
								{formErrors["timeline"] && (
									<p className="mt-1 text-xs text-red-400">
										{formErrors["timeline"]}
									</p>
								)}
							</div>

							<div className="flex justify-end mt-6">
								<button
									type="button"
									onClick={handleNext}
									className="btn-primary flex items-center gap-2"
								>
									Continue <ArrowRight size={18} />
								</button>
							</div>
						</div>
					</div>
				);

			case 2:
				return (
					<div className="animate-slide-in">
						<h2 className="text-xl font-poppins font-semibold mb-6">
							Almost There!
						</h2>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label className="form-label" htmlFor="name">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Enter your full name"
									className="input-field"
								/>
								{formErrors["name"] && (
									<p className="mt-1 text-xs text-red-400">
										{formErrors["name"]}
									</p>
								)}
							</div>

							<div>
								<label className="form-label" htmlFor="email">
									Business Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="youremail@company.com"
									className="input-field"
								/>
								{formErrors["email"] && (
									<p className="mt-1 text-xs text-red-400">
										{formErrors["email"]}
									</p>
								)}
							</div>

							<div>
								<label className="form-label" htmlFor="phone">
									WhatsApp or Phone Number
								</label>
								<input
									type="text"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									placeholder="+1 (555) 123-4567"
									className="input-field"
								/>
								{formErrors["phone"] && (
									<p className="mt-1 text-xs text-red-400">
										{formErrors["phone"]}
									</p>
								)}
							</div>

							<p className="text-xs text-gray-400">
								We'll use this info to craft your first viral strategy—no bots,
								a real human will reach out.
							</p>

							<div className="flex justify-end mt-6">
								<button
									type="submit"
									className="btn-primary flex items-center gap-2"
								>
									Submit & Talk to a Specialist
								</button>
							</div>
						</form>
					</div>
				);

			case 3:
				return (
					<div className="animate-slide-in text-center py-8">
						<div className="text-4xl mb-4">🚀</div>
						<h2 className="text-2xl font-poppins font-semibold mb-3">
							You're In!
						</h2>
						<p className="text-gray-300 mb-8">
							One of our Viral Strategists will reach out within 24 hours.
						</p>
						<button type="button" onClick={onClose} className="btn-primary">
							Explore Viral Kit Features
						</button>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<div className="modal-backdrop animate-fade-in">
			<div className="modal-content">
				<button
					type="button"
					onClick={onClose}
					className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10"
					aria-label="Close"
				>
					<X size={20} className="text-gray-400" />
				</button>

				{step < 3 && (
					<div className="mb-6 flex gap-2">
						<div
							className={`h-1 flex-1 rounded-full ${step >= 1 ? "bg-spellpost-orange" : "bg-gray-600"}`}
						></div>
						<div
							className={`h-1 flex-1 rounded-full ${step >= 2 ? "bg-spellpost-orange" : "bg-gray-600"}`}
						></div>
					</div>
				)}

				{renderStepContent()}
			</div>
		</div>
	);
};

export default FormModal;
