const ChipRed = ({color=null, disabled=false, children}) => {
  let colorClass = null
  if(color) colorClass = {from: `from-${color}/50`, to: `to-${color}/50`}
    return (
      <div className={`relative rounded p-px group`}>
        <div className={`${disabled?'':`
          absolute inset-0 rounded bg-gradient-to-bl to-60% to-transparent 
          transition-opacity duration-500 opacity-100 group-hover:opacity-0
          ${colorClass? colorClass.from:'from-prime/50 '}`}`} />
        <div className={`${disabled?``:`
          absolute inset-0 rounded bg-gradient-to-bl from-transparent
          transition-opacity duration-500 opacity-0 group-hover:opacity-100
          ${colorClass? colorClass.to:'to-prime/50  '}`}`} />
          {children}
      </div>
    );
  };
  
  export default ChipRed;
  