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
            
          </AlertDescription>
        </div>
      </div>
    </Alert>
  )
}