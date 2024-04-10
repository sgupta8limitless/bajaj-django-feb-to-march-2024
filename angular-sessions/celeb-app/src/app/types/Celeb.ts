export default interface Celeb 
{

        name?: string;
        net_worth?: number;
        gender?: "male" | "female" | "other";
        nationality?: string;
        occupation?: string[];
        height?: number;
        birthday?: string; // You might want to consider using a Date object instead of a string for better type safety
        age?: number;
        is_alive?: boolean;

    
}