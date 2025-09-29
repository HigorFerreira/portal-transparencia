'use client';

import { PropsWithChildren } from "react";

export default function Content({ children }: PropsWithChildren){
    return <div className="CONTENT">
        <div>

        </div>
        <div>
            { children }
        </div>
    </div>
}