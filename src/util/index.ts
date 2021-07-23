function calculateDays(start: Date, end: Date) {
  const diff = Math.abs(end.getTime() - start.getTime());        

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); 

  return days;
}

const utils = { calculateDays };

export default utils;