import React, { useState, useEffect, useRef } from "react";

interface CommandOutputProps {
    output: string;
    time: string;
}

export default function CommandOutput({ output, time }: CommandOutputProps) {
    <div className="flex justify-between items-center translate-y-2 -translate-x-3 w-full">
        <h1>{output}</h1>
        <h1 className="text-sm">{time}</h1>
    </div>;
}
