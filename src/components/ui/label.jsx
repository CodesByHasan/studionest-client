"use client";

import * as React from "react";

function Label({ className = "", ...props }) {
  return (
    <label
      data-slot="label"
      className={`text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}

export { Label };
