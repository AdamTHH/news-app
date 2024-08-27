import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../components/ui/alert"

import image from "../assets/company-logo.jpg"

export function Promotion() {
  return (
    <Alert className="flex items-center rounded-none text-white bg-red-600">
      <img src={image} className="w-20 h-20 mr-4" />
      <div>
        <AlertTitle className="text-3xl">try our mobile app on android and ios</AlertTitle>
        <AlertDescription>
        Maecenas ultrices efficitur mauris quis accumsan. Maecenas sit amet vulputate ex, ac dapibus arcu. Pellentesque efficitur a est at ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse lacinia nulla enim. Proin gravida pellentesque nisi eget feugiat. Nulla eros elit, efficitur id pulvinar ac, ullamcorper eget felis. Nam posuere tempor ultrices.
        </AlertDescription>
      </div>
    </Alert>
  )
}
