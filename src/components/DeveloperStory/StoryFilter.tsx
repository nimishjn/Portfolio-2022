import React, { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { storyTypes } from 'utils/developerStory';
import {
	developerStoryData,
	DeveloperStoryDataProps,
} from 'utils/developerStoryData';

interface DeveloperStoryFilterProps {
	setFilteredStoryData: Function;
}

export const DeveloperStoryFilter = ({
	setFilteredStoryData,
}: DeveloperStoryFilterProps) => {
	const [chosenType, setChosenType] = useState('all');

	const filterData = () => {
		switch (chosenType) {
			case 'all':
				setFilteredStoryData(developerStoryData);
				break;
			default:
				setFilteredStoryData(
					developerStoryData.filter(
						(story) => story.storyType === chosenType
					)
				);
		}
	};

	useEffect(() => {
		filterData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chosenType]);

	return (
		<RadioGroup
			value={chosenType}
			onChange={setChosenType}
			className='flex flex-col md:flex-row gap-2 items-center mb-5'
		>
			<p>Filter: </p>
			<div className='flex items-center justify-center md:justify-start gap-1 flex-wrap'>
				<RadioGroup.Option value='all'>
					{({ checked }) => (
						<span
							className={
								(checked ? 'bg-white text-black' : 'bg-black') +
								' px-2 py-1 border-1 cursor-pointer box-border block'
							}
						>
							all
						</span>
					)}
				</RadioGroup.Option>
				{Object.keys(storyTypes).map((key, index) => {
					return (
						<RadioGroup.Option value={key} key={index}>
							{({ checked }) => (
								<span
									className={
										(checked ? 'bg-white text-black' : '') +
										' px-2 py-1 border-1 cursor-pointer box-border block'
									}
								>
									{key}
								</span>
							)}
						</RadioGroup.Option>
					);
				})}
			</div>
		</RadioGroup>
	);
};
