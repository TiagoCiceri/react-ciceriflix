import { useState } from 'react';

function useForm(valuesData){
    const [dados, setDados] = useState(valuesData);

    function setValue(chave, valor){
        setDados({
            ...dados,
            [chave]: valor,
        })
    }

    function handleChange(e){
        setValue(e.target.getAttribute('name'), 
                 e.target.value);        
    }

    function clearForm(){
        setValue(valuesData);
    }

    return {
        dados,
        handleChange,
        clearForm,
    }

}

export default useForm;