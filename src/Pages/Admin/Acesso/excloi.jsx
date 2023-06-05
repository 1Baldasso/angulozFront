import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
function ImageUpload(props) {
  const { selectedFiles, setSelectedFiles } = props;
  const FormFiles = useRef(null);
  useEffect(() => {
    FormFiles.current.value = "";
  }, [selectedFiles]);
  return(
    <>
      <Form.Label>Insira sua imagem</Form.Label>
      <Form.Control type="file" accept='image/*' ref={FormFiles} onChange={e => setSelectedFiles([...selectedFiles, ...e.target.files])} multiple />
      {selectedFiles && Array.from(selectedFiles).map((file, index) => (
         <ImagemControl file={file} index={index} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
      ))}
    </>
  )
}

function ImagemControl(props)
{
  const { selectedFiles, setSelectedFiles } = props;
  return(
    <div className='d-flex flex-column align-items-center'>
      <img key={props.index} className='classificandoContainer tamanhoImagem pt-3' src={URL.createObjectURL(props.file)} alt="" /> 
      <Form.Control className='w-50 mt-1 mb-5' type="button" value={"Remover"} onClick={()=>{
        setSelectedFiles(Array.from(selectedFiles).filter((file, index) => index !== props.index))
      }}/>
    </div>
  )
}
export default ImageUpload;
