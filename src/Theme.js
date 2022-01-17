import { useEffect } from "react"


export const Theme = ({ theme }) => {
    useEffect(() => {
        switch (theme) {
            case 1:
                import("./theme-1.css");

                break;
            case 2:
                import("./theme-2.css");

                break;
            default:
                throw new Error("invalid theme");
        }
    }, []);


    return <div />;
}
