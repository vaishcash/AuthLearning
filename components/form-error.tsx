import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
    message: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) {
        return null;
    }

    return (
        <div className="flex items-center rounded-md p-2 text-sm text-red-800 bg-red-200 gap-x-2 ">
            <ExclamationTriangleIcon className="h-4 w-4" />
          <p>{message}</p>  
        </div>
    )
}