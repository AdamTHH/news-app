import { useState } from 'react'
import { Button } from "./components/ui/button"
import Navbar from './components/Navbar'
import { FaComment } from "react-icons/fa";
import NewsBlock from './components/NewsBlock';
import ImageSlider from './components/ImageSlider';
import { Promotion } from './components/Promotion';


function App() {
  return (
    <div className='bg-white'>
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="background-pattern text-white pt-32 grid grid-cols-1 sm:grid-cols-2 gap-20">
          <NewsBlock section="sport" date="August 6, 2023" comments={20} likes={2000}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </NewsBlock>
          <NewsBlock section="politics" date="October 6, 2123" comments={22} likes={3123}>
            et quasi architectso beatae vitae dicta sunt explicabo. Nemo e
          </NewsBlock>
          <NewsBlock section="money" date="July 12, 2013" comments={3} likes={212}>
            ipsam voluptatem quia voluptas sit aspernatur aut odi
          </NewsBlock>
        </div>

        <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen mt-32">
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

    </div>
  )
}



export default App
