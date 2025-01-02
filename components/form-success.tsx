import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
    message: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) {
        return null;
    }

    return (
      <div className="flex items-center rounded-md p-2 text-sm text-green-800 bg-green-200 gap-x-2">
        <CheckCircledIcon className="h-4 w-4" />
        <p>{message}</p>
      </div>
    );
}