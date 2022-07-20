
type TupleDate = [year: number, month: number];

function calculateDays(startDate: TupleDate, endDate: TupleDate) {
  const end = new Date(...endDate);
  const start = new Date(...startDate);
  const diff = Math.abs(end.getTime() - start.getTime());

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return days;
}

const utils = { calculateDays };

export default utils;
