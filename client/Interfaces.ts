export interface News {
  section: string;
  date: string;
  title: string;
  comments: number;
  likes: number;
}

export interface ImageSliderItem {
  src: string;
  title: string;
  description: string | null;
}
