import React, { createContext, useContext, useState, useEffect } from "react";
import { cn } from "../../lib/utils";

const DialogContext = createContext();

export function Dialog({ children, open, onOpenChange }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open !== undefined ? open : internalOpen;
  const setIsOpen = onOpenChange !== undefined ? onOpenChange : setInternalOpen;

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ children, asChild }) {
  const { setIsOpen } = useContext(DialogContext);
  return React.cloneElement(children, {
    onClick: (e) => {
      setIsOpen(true);
      if (children.props.onClick) children.props.onClick(e);
    }
  });
}

export function DialogContent({ className, children }) {
  const { isOpen, setIsOpen } = useContext(DialogContext);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-all" 
        onClick={() => setIsOpen(false)}
      />
      <div className={cn(
        "relative z-50 grid w-full max-w-lg gap-4 bg-white dark:bg-[#1e222d] p-6 shadow-2xl duration-200 sm:rounded-xl border border-gray-200 dark:border-[#2c3242]",
        className
      )}>
        {children}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-500 dark:text-[#8a8d96]"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
}

export function DialogHeader({ className, children }) {
  return (
    <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}>
      {children}
    </div>
  );
}

export function DialogTitle({ className, children }) {
  return (
    <h2 className={cn("text-xl font-semibold leading-none tracking-tight text-gray-900 dark:text-[#f2e9de]", className)}>
      {children}
    </h2>
  );
}

export function DialogDescription({ className, children }) {
  return (
    <p className={cn("text-sm text-gray-500 dark:text-[#8a8d96]", className)}>
      {children}
    </p>
  );
}

export function DialogFooter({ className, children }) {
  return (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4", className)}>
      {children}
    </div>
  );
}
