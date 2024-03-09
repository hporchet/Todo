import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import { Alert, AlertDescription, AlertTitle } from "@ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { NavBar } from "@/components/NavBar";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <NavBar />
            <Alert>
                <ExclamationTriangleIcon />
                <AlertTitle><i>{isRouteErrorResponse(error) && `${error.status} ${error.statusText}`}</i></AlertTitle>
                <AlertDescription>
                    An error has been encountered sorry.
                </AlertDescription>
            </Alert>
        </>
    )
}