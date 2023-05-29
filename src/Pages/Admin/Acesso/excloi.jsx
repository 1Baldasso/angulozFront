import React, { useState, useEffect, useRef } from 'react';

function ImageUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const inputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const newSelectedFiles = Array.from(files).map((file) => ({
      file,
      id: Date.now() + Math.random(),
    }));
    setSelectedFiles([...selectedFiles, ...newSelectedFiles]);
  };

  const handleRemoveImage = (id) => {
    const updatedFiles = selectedFiles.filter((file) => file.id !== id);
    setSelectedFiles(updatedFiles);
  };

  const handleClearInput = () => {
    setSelectedFiles([]);
    inputRef.current.value = null; // Resetar o campo de entrada de arquivo
  };

  return (
    <div>
      <label htmlFor="file-input">
        {selectedFiles.length === 0 ? (
          <span>Nenhum arquivo selecionado</span>
        ) : (
          <span>{selectedFiles.length} arquivo(s) selecionado(s)</span>
        )}
      </label>
      <input
        id="file-input"
        type="file"
        multiple
        onChange={handleFileInputChange}
        ref={inputRef}
      />
      <div className="image-previews">
        {selectedFiles.map(({ file, id }, index) => (
          <ImagePreview
            key={id}
            file={file}
            index={index}
            id={id}
            onRemove={handleRemoveImage}
          />
        ))}
      </div>
      {selectedFiles.length > 0 && (
        <button onClick={handleClearInput}>Limpar</button>
      )}
    </div>
  );
}

function ImagePreview({ file, index, id, onRemove }) {
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setImagePreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleImageLoad = (event) => {
    setImagePreview(event.target.src);
  };

  const imageUrl = imagePreview + `?timestamp=${Date.now()}`;
  return (
    <div className="image-preview">
      <img
        className="w-50"
        src={imagePreview}
        alt={`Preview ${index}`}
        onLoad={handleImageLoad}
      />
      <button onClick={() => onRemove(id)}>Remover</button>
    </div>
  );
}

export default ImageUpload;
