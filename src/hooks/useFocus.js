import React, { useState, useEffect, useRef } from 'react';


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
        
        ref.current.addEventListener('focus', onMouseEnter);
        ref.current.addEventListener('blur', onMouseLeave);
        return () => {
            ref.current.removeEventListener('focus', onMouseEnter);
            ref.current.removeEventListener('blur', onMouseLeave);
        }

    }, [ref]);
    return focused;
}

export default useFocus;