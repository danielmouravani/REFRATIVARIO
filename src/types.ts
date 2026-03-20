export interface Speaker {
  name: string;
}

export interface EventItem {
  id: string;
  type: 'Wet Lab' | 'Dry Lab' | 'Palestra';
  title: string;
  date: string; // ISO format or simple string for display
  day: string; // e.g., "25"
  month: string; // e.g., "MAR"
  weekday: string; // e.g., "Qua"
  time: string; // e.g., "16:30-20:30"
  speakers: string[];
  location: string;
  times?: string[];
}
