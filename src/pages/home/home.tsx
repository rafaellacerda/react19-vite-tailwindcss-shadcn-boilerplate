import { toast } from "sonner"
import { Button, buttonVariants } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome!
            <strong className="font-extrabold text-red-700 sm:block"> React 19 Boilerplate. </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Modern boilerplate created with ViteJS, featuring Tailwind CSS, Shadcn for visual components, and Sonner for toasts. Includes a lazy loading example for pages.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant='destructive' onClick={() => toast.success('Boilerplate toast!')}>
              Toast Example
            </Button>
            <Link className={buttonVariants({ variant: "link" })} to="/404">Redirect 404</Link>
          </div>
        </div>
      </div>
    </section>

  )
}
