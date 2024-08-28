import { ImageSliderItem } from "../../Interfaces";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

const ImageSlider = () => {
  const images: ImageSliderItem[] = Array.from({ length: 18 }, (_, index) => ({
    src: "https://picsum.photos/200",
    title: `Image ${index + 1}`,
    description: `desc`,
  }))

  return (
    <Carousel className="w-[70vw] mx-auto">
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem key={index} className=" lg:basis-1/3">
            <div className="p-1 select-none">
              <div className="flex flex-col items-center">
                <span className="text-xl mb-2">{image.title}</span>
                <img src={image.src} className="mx-auto" alt={image.description || ""} />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-black rounded-none h-12" />
      <CarouselNext className="text-black rounded-none h-12"/>
    </Carousel>
  )
}
export default ImageSlider;