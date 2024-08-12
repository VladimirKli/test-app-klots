import { toast } from 'react-toastify'

export const successAction = () => {
	toast.success('You win!', {
		position: 'top-center',
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
	})
}

export const errorAction = ({
	generatedValue,
	sliderValue,
}: {
	generatedValue: number
	sliderValue: number
}) => {
	const comparison = generatedValue > sliderValue ? 'higher' : 'lower'

	toast.error(`You lose. The number was ${comparison}`, {
		position: 'top-center',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
	})
}
