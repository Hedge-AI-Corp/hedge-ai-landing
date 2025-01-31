import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

export default function Banner() {
  return (
    <Alert variant="default" className="relative border-none bg-[#0038FF] rounded-none py-3 font-inter">
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full relative">
          <AlertDescription className="flex items-center justify-center flex-wrap gap-4 text-white">
            <p className="text-sm">
              We&apos;ve just agreed to receive $1.5M from Deepseek and OpenAI.
            </p>
            
            <Button
              variant="secondary"
              size="sm"
              className="bg-white hover:bg-white/90 text-blue-600"
            >
              Learn More
              <span className="ml-2" aria-hidden="true">→</span>
            </Button>
          </AlertDescription>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 hover:bg-blue-500/20 text-white"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Alert>
  )
}