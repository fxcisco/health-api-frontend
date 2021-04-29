export function formatCurrency(data: any) {
  return (data.amount/ 100).toLocaleString(data.currency, {
    style: 'currency',
    currency: data.currency,
  });
}

export const localDate = (date: any) => {
  return new Date(date).toLocaleDateString('en-US', {
    // day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export const formatDate = (date: any) => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

export function daysDifference(from: any, to: any){
  const day = 24 * 60 * 60 * 1000;
  const start: any = new Date(from);
  const end: any = new Date(to);
  const difference = Math.round(
    Math.abs(( start - end) / day)
  );
  return difference;
}

export const shortenText = (text: string, max: number = 150) => {
  const shorter = text.slice(0,max);
  return shorter.length === max ? shorter + '...' : shorter;
}

export function timeDifference(oldDate: string) {
  const current = new Date();
  const previous = new Date(oldDate);
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;
  var elapsed = +current - +previous;

  if (elapsed < msPerMinute) {
    if (elapsed / 1000 < 30) return 'Just now';
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + ' days ago';
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + ' months ago';
  } else {
    return Math.round(elapsed / msPerYear) + ' years ago';
  }
}
