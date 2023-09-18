import {forwardRef, useRef, useImperativeHandle} from 'react'

const SomeComponent = forwardRef((props, ref) => {
    
        const localInputRef = useRef()

        useImperativeHandle(ref, () => {
            return {
                validate: () => {
                    if(localInputRef.current.value.length > 3) {
                        localInputRef.current.value = ""
                    }
                }
            }
        })
    
      return (
        <p>
            Insira no máximo 3 caracteres
            <input type="text" ref={localInputRef} />
        </p>
      )
    
})

export default SomeComponent