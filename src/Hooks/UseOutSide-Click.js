import {useEffect} from 'react' ; 

const useOutSideClick = (ref, hanlder) => {
    useEffect(() => {
        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)){
                return ; 
            }
            hanlder(event) ; 
        }

        document.addEventListener("mousedown" , listener) ; 

        return () => {
            document.removeEventListener('mousedown', listener) ; 
        }
    }, [ref, hanlder]) ; 
}

export default useOutSideClick ; 