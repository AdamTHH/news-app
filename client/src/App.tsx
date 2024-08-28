import { useEffect, useState } from 'react'
import { Button } from "./components/ui/button"
import Navbar from './components/Navbar'
import { FaComment } from "react-icons/fa";
import NewsBlock from './components/NewsBlock';
import ImageSlider from './components/ImageSlider';
import { Promotion } from './components/Promotion';
import { News } from '../Interfaces';
import axios from 'axios';
import { LuRefreshCw } from "react-icons/lu";


function App() {
  const [popularNews, setPopularNews] = useState<News[]>([]);

  function logNews () {
    console.log(popularNews)
  }

  useEffect(() => {
    axios.get('/api/get_news')
      .then((response) => {
        const news: News[] = response.data;
        //dátum formázás
        news.forEach((item) => {
          const date = new Date(item.date)
          item.date = date.toISOString().split('T')[0]
        })
        setPopularNews([...news])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className='bg-white'>
      <Navbar popularNews={popularNews} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div id="big-news" className="background-pattern text-white pt-32 grid grid-cols-1 sm:grid-cols-2 gap-20">
          {popularNews.slice(0, 4).map((news, index) => (
            <NewsBlock key={index} section={news.section} date={news.date} likes={news.likes} comments={news.comments}>
              {news.title}
            </NewsBlock>
          ))}
        </div>

        <div id="midsection" className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/*ha pl a popularNews népszerűségi sorrendben van, akkor lehet a splice 5-7 ig (mert ide kevésbé fontos hírek jönnek) */}
          {popularNews.slice(4, 6).map((news, index) => (
            <NewsBlock key={index} section={news.section} date={news.date} likes={news.likes} comments={news.comments} dark>
              {news.title}
            </NewsBlock>
          ))}
        </div>


        <button
          className="bg-red-500 p-5 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={logNews}
        >
          <LuRefreshCw />
        </button>


        <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen mt-12">
          <div id="image-slider" className="w-full bg-neutral-900 text-white py-10">
            <ImageSlider />
          </div>
        </div>

        <div className="bg-slate-800 text-white my-12">
          <Promotion />
        </div>

        <div id="end-section" className="text-black mx-auto grid grid-cols-1 sm:grid-cols-2">
          <div className=' background-pattern block m-4'>
          </div>
          <p className='m-4 subhead nofont saira'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac ex id lorem auctor sodales vel ut urna. Nam iaculis, urna eget lacinia viverra, nulla nibh laoreet sapien, vitae congue magna lacus a metus. Praesent imperdiet sem ac dui laoreet pharetra. Maecenas at maximus neque. Nulla facilisi. Fusce fringilla quis leo interdum eleifend. Aliquam pulvinar urna aliquam arcu gravida vestibulum. Etiam venenatis sed ipsum eget viverra. Morbi venenatis lorem quis congue mattis. Nam eu nibh odio. Donec dui leo, vulputate vel urna eu, ullamcorper eleifend mi. Nunc purus leo, pulvinar ac enim et, suscipit volutpat ante. Vestibulum at luctus lacus, non vehicula lacus.<br /><br />
            Nullam egestas hendrerit facilisis. Nulla eu arcu rutrum, pretium risus non, semper ligula. Aenean mattis, ipsum at tempus feugiat, eros erat congue libero, sed lobortis tortor urna aliquet risus. In ac est pretium, pretium sem eu, sollicitudin libero. Nulla auctor placerat feugiat. Mauris non elit et risus rutrum faucibus nec vel lorem. Sed convallis justo enim, non dictum velit congue sit amet. Nulla vulputate, sem sed eleifend euismod, mi odio euismod arcu, quis sagittis lorem erat nec diam. Phasellus tempus sem magna, id varius metus vulputate sit amet. Integer vel justo ac massa aliquet suscipit laoreet nec tortor. Nam nisi tellus, ultrices non convallis in, vehicula sit amet magna. Pellentesque vestibulum justo in dolor suscipit ullamcorper. Nullam fringilla in arcu vel pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>


      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac ex id lorem auctor sodales vel ut urna.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li className="mb-2"><a href="#" className="hover:text-gray-300">Home</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-300">News</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-300">Sports</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <FaComment className="w-6 h-6" />
                </a>
                {/* Add more social icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>2015 © Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>


    </div>
  )
}


export default App
