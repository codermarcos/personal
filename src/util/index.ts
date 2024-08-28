
type TupleDate = [year: number, month: number];

const ONE_DAY_IN_MILIS = 1_000 * 60 * 60 * 24;

function calculateDays(startDate: TupleDate, endDate: TupleDate): number {
	const end = new Date(...endDate);
	const start = new Date(...startDate);
	const diff = Math.abs(end.getTime() - start.getTime());

	const days = Math.ceil(diff / ONE_DAY_IN_MILIS);

	return days;
}

const pieChart = {
	getCoordinatesForPercent,
	center: 1.5,
};

function getCoordinatesForPercent(percent: number): [X: string, Y: string] {
	const x = Math.cos(2 * Math.PI * percent) + pieChart.center;
	const y = Math.sin(2 * Math.PI * percent) + pieChart.center;
	return [x.toFixed(3), y.toFixed(3)];
}


const utils = { calculateDays, pieChart };

export default utils;
