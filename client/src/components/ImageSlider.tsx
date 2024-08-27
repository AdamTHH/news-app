import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

const ImageSlider = () => {
  return (
    <Carousel className="w-[70vw] mx-auto">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className=" lg:basis-1/3">
            <div className="p-1 select-none">
              <div className="flex flex-col items-center">
                <span className="text-xl mb-2">Image title</span>
                <img src="https://picsum.photos/200" className="mx-auto" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-black rounded-none" />
      <CarouselNext className="text-black rounded-none"/>
    </Carousel>
  )
}

export default ImageSlider;