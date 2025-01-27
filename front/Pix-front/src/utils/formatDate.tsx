import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

// format date from brazil
export function formatDate(dateStr: string) {
  const date = new Date(dateStr);

  const formattedDate = format(date, 'MMM dd, yyyy', { locale: pt });
  return formattedDate;
}

// get atual date
export function atualDate() {
  const atualDate = new Date();

  const formattedDate = format(atualDate, 'MMM dd, yyyy', { locale: pt });
  return formattedDate;
}
