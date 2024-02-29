import { ThemeProvider } from "@/components/ThemeProvider"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "@/view/ErrorPage"
import { Icons } from "@ui/icons"
import { HomePage } from "@/view/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage />
  },
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}
        fallbackElement={<div className="flex items-center text-sm text-muted-foreground">
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </div>} />
    </ThemeProvider>
  )
}

export default App
