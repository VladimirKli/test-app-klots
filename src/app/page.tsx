'use client'

import { RadioButtonGroup } from '@/components/RadiuButtonGroup/RadioButtonGroup'
import NumberSlider from '@/components/Slider/Slider'
import TableValues from '@/components/Table/Table'
import { Button } from '@mui/material'
import moment from 'moment'
import { useState } from 'react'
import { errorAction, successAction } from './game-actions'
import { IStoryItem } from './types'

export default function Home() {
	const [underOver, setUnderOver] = useState(true)
	const [sliderValue, setSliderValue] = useState<number>(50)
	const [lastGeneratedNumber, setLastGeneratedNumber] = useState<null | number>(
		null
	)
	const [story, setStory] = useState<IStoryItem[]>([])
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)

	const addActionToStory = (newStoryItem: IStoryItem) => {
		setStory(prevStory => {
			const updatedStory = [newStoryItem, ...prevStory]

			if (updatedStory.length > 10) {
				updatedStory.pop()
			}

			return updatedStory
		})
	}

	const getRandomNumber = () => {
		setIsButtonDisabled(true)

		const generatedValue = Math.floor(Math.random() * 101)
		const isWin =
			(underOver && generatedValue > sliderValue) ||
			(!underOver && generatedValue < sliderValue)

		const newStoryItem: IStoryItem = {
			time: moment().format('HH:mm:ss'),
			result: generatedValue,
			over: underOver,
			selectedNumber: sliderValue,
			win: isWin,
		}
		isWin ? successAction() : errorAction({ generatedValue, sliderValue })

		setLastGeneratedNumber(generatedValue)
		addActionToStory(newStoryItem)

		setTimeout(() => setIsButtonDisabled(false), 500)
	}

	return (
		<main className='flex min-h-screen items-center flex-col gap-10 md:p-24 p-10'>
			<div className='w-[320px] h-[200px] flex justify-center items-center text-[96px] rounded-sm bg-[#0000000A]'>
				{lastGeneratedNumber}
			</div>
			<RadioButtonGroup value={underOver} setValue={setUnderOver} />
			<NumberSlider value={sliderValue} setValue={setSliderValue} />
			<Button
				variant='contained'
				className='w-full max-w-[320px]'
				onClick={getRandomNumber}
				disabled={isButtonDisabled}
			>
				Play
			</Button>
			<TableValues rows={story} />
		</main>
	)
}
