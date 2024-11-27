// Define the type for the option objects
export interface Option {
    id: string | number; // id can be string or number
    value: string;
    title: string;
}

// options1 definition with proper typing
export const options1: Option[] = [
    {
        id: 1,
        value: "main inventory",
        title: "Main Inventory",
    },
];

// options2 definition with proper typing
export const options2: Option[] = [
    {
        id: 1,
        value: "all items",
        title: "All Items (in and out of stock)",
    },
];
