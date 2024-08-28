import axios from "axios";
import { News } from "../../Interfaces";

export async function getNews(): Promise<News[]> {
  try {
    const response = await axios.get('/api/get_news');
    const news: News[] = response.data;
    
    // Date formatting
    news.forEach((item) => {
      const date = new Date(item.date);
      item.date = date.toISOString().split('T')[0];
    });
    
    return news;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
