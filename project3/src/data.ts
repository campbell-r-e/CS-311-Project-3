export interface ColourOption {
    readonly value: string;
    readonly label: string;
   
  }
  
  export const colourOptions: readonly ColourOption[] = [
    { value: 'ocean', label: 'Ocean'},
    { value: 'blue', label: 'Blue'},
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red'},
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green'},
    { value: 'forest', label: 'Forest' },
    { value: 'slate', label: 'Slate'},
    { value: 'silver', label: 'Silver'},
  ];
  

  // modified from https://codesandbox.io/p/sandbox/2tnw6w?file=%2Fdocs%2Fdata.ts%3A15%2C31