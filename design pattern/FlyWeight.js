// we will upload  three hundred same type files
const files = Array.from(Array(300).keys()).map(item => `file-${item+1}.png`)

// use this way will create three hundred object instance it very slow
files.forEach(item => {
  const fileObject = uploadFile(item.fileName, item.fileSize)
  fileObject.save()
})

function uploadFile (fileName, fileSize) {
  return {
    fileName: fileName,
    fileSize: fileSize,
    fileType: 'png',
    save: function () {
      console.log('upload the file to server')
    }
  }
}



// rewrite in flyweight pattern
flyWeightUploadFile(files)

function flyWeightUploadFile (files) {
  // Intrinsic State => save some shareable attributes
  const currentFile = {
    fileType: 'png',
    save: function () {
      console.log('upload the file to server')
    }
  }

  files.forEach(item => {
    uploadToServer(item)
  })

  function uploadToServer (file) {
    // Extrinsic State
    currentFile.fileName = file.fileName
    currentFile.fileSize = file.fileSize
    currentFile.save()
  }
  
}
