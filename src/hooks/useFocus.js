import { useState, useEffect, useRef } from 'react';


const useFocus = (ref, options) => {

    const [focused, setFocused] = useState(false);
    const { onFucus, onFocusLeave } = options || {};

    const onEnterRef = useRef(onFucus);
    const onLeaveRef = useRef(onFocusLeave);
    
    const onMouseEnter = () => {
        if(onEnterRef.current) onEnterRef.current();
        setFocused(true)
    }
    const onMouseLeave = () => {
        if(onLeaveRef.current) onLeaveRef.current();
        setFocused(false);
    }
    useEffect(() => {
        const reference = ref.current;
        
        reference.addEventListener('focus', onMouseEnter);
        reference.addEventListener('blur', onMouseLeave);
        return () => {
            reference.removeEventListener('focus', onMouseEnter);
            reference.removeEventListener('blur', onMouseLeave);
        }

    }, [ref]);
    return focused;
}

export default useFocus;