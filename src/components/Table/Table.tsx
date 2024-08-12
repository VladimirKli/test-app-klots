import { IStoryItem } from '@/app/types'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export default function TableValues({ rows = [] }: { rows: IStoryItem[] }) {
	return (
		<TableContainer component={Paper} className='w-full max-w-[700px]'>
			<Table className='w-full max-w-[700px]' aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell align='left'>Time</TableCell>
						<TableCell align='left'>Guess</TableCell>
						<TableCell align='left'>Result</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.time}>
							<TableCell align='left'>{row.time}</TableCell>
							<TableCell align='left'>
								{`${row.over ? 'Over' : 'Under'} ${row.selectedNumber}`}
							</TableCell>
							<TableCell
								align='left'
								style={{
									color: row.win ? '#2f855a' : '#e53e3e',
								}}
							>
								{row.result}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
