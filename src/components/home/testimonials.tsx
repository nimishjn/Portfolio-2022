import React, { useState } from 'react';
import Lottie from 'lottie-react';
import ResearchAnimation from '../../assets/lottie/recommendation.json';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { MdFormatQuote } from 'react-icons/md';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { AiFillLinkedin, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Wave from 'react-wavify';

function Testimonials({
	recommendations,
}: {
	recommendations: {
		name: string;
		designation: string;
		linkedin?: string;
		company?: string;
		companyURL?: string;
		relation: string;
		testimonialURL?: string;
		message: string;
		date: string;
	}[];
}) {
	const [showIndex, setShowIndex] = useState(0);

	const handlePreviousRecommendation = () => {
		setShowIndex(showIndex - 1 >= 0 ? showIndex - 1 : 0);
	};

	const handleNextRecommendation = () => {
		setShowIndex(
			showIndex + 1 <= recommendations?.length - 1
				? showIndex + 1
				: showIndex
		);
	};

	const handleIndexRecommendation = (index: number) => {
		setShowIndex(index);
	};

	return (
		<section className='home-section relative' id='testimonials'>
			<div className='max-section-width h-full flex gap-4 items-center justify-center'>
				<div className='mr-10 hidden md:block px-6'>
					<Lottie
						animationData={ResearchAnimation}
						className='max-w-xl -mx-20'
					/>
				</div>
				<div className='lg:w-1/2 text-left'>
					<div className='w-full text-center lg:text-left'>
						<h1 className='h1 leading-normal animate-text-bg before:bg-white hover:text-dark-gray'>
							Recommendations
						</h1>
					</div>
					<p className='text-gray-500 text-2xs md:text-sm -mt-4 mb-5 md:-mt-7 text-center lg:text-left'>
						Success stories from satisfied clients and colleagues
					</p>
					{recommendations.map((recommendation, index) => (
						<Transition
							show={showIndex === index}
							enter='block'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='hidden'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
							className='transition-opacity duration-200 delay-[190ms]'
							key={index}
						>
							<div className='relative'>
								<ReactMarkdown
									allowedElements={[
										'p',
										'a',
										'b',
										'i',
										'strong',
										'em',
									]}
									skipHtml
									className='about-react-markdown flex flex-col items-start gap-2 max-h-60 overflow-y-auto pl-7'
								>
									{recommendation.message}
								</ReactMarkdown>
								{/* Top left quote */}
								<MdFormatQuote className='absolute -top-2 -left-1 rotate-180 text-3xl opacity-60' />
							</div>
							<div className='flex items-center justify-between mt-5 pl-7'>
								<div className='flex items-center gap-2'>
									<div className='flex flex-col'>
										<div className='flex gap-1 items-center'>
											<p className='text-sm font-semibold'>
												{recommendation.name}
											</p>
											{recommendation.linkedin && (
												<Link
													href={
														recommendation.linkedin
													}
													legacyBehavior
												>
													<a>
														<AiFillLinkedin />
													</a>
												</Link>
											)}
										</div>
										<p className='text-xs text-gray-400'>
											{recommendation.designation}
											{recommendation.company &&
												recommendation.companyURL && (
													<Link
														href={
															recommendation.companyURL
														}
														legacyBehavior
													>
														<a>
															{' - '}
															{
																recommendation.company
															}
														</a>
													</Link>
												)}
										</p>
										<p className='text-sm mt-1'>
											{recommendation.date} -{' '}
											{recommendation.relation}
										</p>
									</div>
								</div>
							</div>
						</Transition>
					))}
					<div className='w-full flex items-center justify-center gap-2 mt-5'>
						<button
							onClick={handlePreviousRecommendation}
							className='w-5 h-5 rounded-full flex items-center justify-center border border-white p-3 text-sm bg-white text-black'
						>
							<AiOutlineLeft className='flex-shrink-0' />
						</button>
						{recommendations.map((e, index) => (
							<button
								key={index}
								onClick={() => handleIndexRecommendation(index)}
								className={`w-5 h-5 rounded-full flex items-center justify-center border p-3 text-sm ${
									index === showIndex
										? 'bg-blue-800 border-blue-800'
										: 'bg-transparent border-transparent'
								}`}
							>
								{index + 1}
							</button>
						))}
						<button
							onClick={handleNextRecommendation}
							className='w-5 h-5 rounded-full flex items-center justify-center border border-white p-3 text-sm bg-white text-black'
						>
							<AiOutlineRight className='flex-shrink-0' />
						</button>
					</div>
				</div>
				<Wave
					fill='#101010'
					paused={false}
					options={{
						height: 20,
						amplitude: 20,
						speed: 0.2,
						points: 3,
					}}
					className='absolute bottom-0 -mb-6 h-12 left-0 right-0 w-screen bg-black'
				/>
			</div>
		</section>
	);
}

export default Testimonials;
