import { Response } from "express";

type setCookieProps = {
    res: Response;
    key: string;
    value: string;
}

export const setCookie = ({ key, value, res }: setCookieProps) => {
    res.cookie(key, value)
} 