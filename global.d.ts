declare global {
    interface Global {
      ErrorUtils: {
        setGlobalHandler: (callback: (error: Error, isFatal: boolean) => void) => void;
      };
    }
  }
  
  export {};