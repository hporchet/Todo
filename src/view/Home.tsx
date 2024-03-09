import { NavBar } from "@/components/NavBar"
import { Checkbox } from "@/components/ui/checkbox"

export const HomePage = () => {
    return (
        <>
            <NavBar />
            <main className="grid grid-cols-2">
                <article className="space-x-3 space-y-0 rounded-md border p-4 m-4 shadow">
                    <h3>Bonjour</h3>
                    <main className="flex flex-row items-start space-x-3 space-y-0 p-4 m-4">
                        <Checkbox id="terms1" />
                        <div className="grid gap-1.5 leading-none">
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                        <Checkbox id="terms2" />
                        <div className="grid gap-1.5 leading-none">
                            <label
                                htmlFor="terms2"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </main>
                </article>
                <article className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 m-4 shadow">

                </article>
            </main>
        </>
    )
}