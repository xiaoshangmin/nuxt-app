export const getBase64Image = (url: string, proxy: boolean): Promise<string> => {
  const img = new Image()
  // img.setAttribute("crossOrigin", 'anonymous');
  img.crossOrigin = 'anonymous';
  if (proxy) {
    img.src = `https://images.weserv.nl/?url=${url}`;
  } else {
    img.src = url
  }
  return new Promise((resolve, reject) => {
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL())
    }
    img.onerror = (error) => {
      reject(error)
    }
  })
}


export const insertTextAtCursor = (text: string) => {
  const selection = window.getSelection()
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0)
    range.deleteContents()
    const textNode = document.createTextNode(text)
    range.insertNode(textNode)
    range.setStartAfter(textNode)
    range.setEndAfter(textNode)
    selection.removeAllRanges()
    selection.addRange(range)
  }
}


// export const fetchImageAsBase64 = (url, target) {
//   try {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       target = reader.result;
//     };
//     reader.readAsDataURL(blob);
//   } catch (error) {
//     console.error('Error fetching and converting image:', error);
//   }
// }
