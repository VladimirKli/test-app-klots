import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'

export const RadioButtonGroup = ({
	value,
	setValue,
}: {
	value: boolean
	setValue: (newVal: boolean) => void
}) => {
	return (
		<FormControl>
			<RadioGroup
				aria-labelledby='demo-controlled-radio-buttons-group'
				name='controlled-radio-buttons-group'
				value={value}
				onChange={() => setValue(!value)}
				className='flex flex-row'
			>
				<FormControlLabel value={false} control={<Radio />} label='Under' />
				<FormControlLabel value={true} control={<Radio />} label='Over' />
			</RadioGroup>
		</FormControl>
	)
}
