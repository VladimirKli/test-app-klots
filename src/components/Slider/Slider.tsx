import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const marks = [
	{
		value: 0,
		label: '0',
	},
	{
		value: 100,
		label: '100',
	},
]

function valuetext(value: number) {
	return `${value}`
}

export default function NumberSlider({
	value,
	setValue,
}: {
	value: number
	setValue: (newVal: number) => void
}) {
	const handleChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number)
	}

	return (
		<Box sx={{ width: 300 }}>
			<Slider
				aria-label='Always visible'
				value={value}
				onChange={handleChange}
				getAriaValueText={valuetext}
				step={1}
				marks={marks}
				valueLabelDisplay='on'
			/>
		</Box>
	)
}
