import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

const SelectContext = createContext();

export function Select({ children, value, onValueChange, defaultValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || "");

  const handleSelect = (val) => {
    setSelectedValue(val);
    if (onValueChange) onValueChange(val);
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider value={{ isOpen, setIsOpen, selectedValue, handleSelect }}>
      <div className="relative w-full text-left">{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ className, children }) {
  const { isOpen, setIsOpen } = useContext(SelectContext);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // We check if the click is outside the parent container (which holds the trigger and content)
      if (ref.current && !ref.current.closest('.relative.w-full.text-left').contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 dark:border-[#3a3d45] bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:ring-2 focus:ring-[#c1552c]",
        className
      )}
    >
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 opacity-50 ml-2"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
  );
}

export function SelectValue({ placeholder }) {
  const { selectedValue } = useContext(SelectContext);
  return <span className="block truncate">{selectedValue || placeholder}</span>;
}

export function SelectContent({ className, children }) {
  const { isOpen } = useContext(SelectContext);
  
  if (!isOpen) return null;

  return (
    <div className={cn(
      "absolute z-[100] mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 dark:border-[#3a3d45] bg-white dark:bg-[#1e222d] py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none",
      className
    )}>
      {children}
    </div>
  );
}

export function SelectItem({ className, value, children }) {
  const { selectedValue, handleSelect } = useContext(SelectContext);
  const isSelected = selectedValue === value;

  return (
    <div
      onClick={() => handleSelect(value)}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-[#2c3242] text-gray-900 dark:text-[#f2e9de] transition-colors",
        isSelected && "bg-gray-50 dark:bg-[#232734] font-medium",
        className
      )}
    >
      {isSelected && (
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center text-[#c1552c]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
      )}
      <span className="block truncate">{children}</span>
    </div>
  );
}
