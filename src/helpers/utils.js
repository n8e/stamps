export const getDateFromPreviewString = (previewString) => {
  const arrStr = previewString.split('photo/');
  const datePart = arrStr[1].split('/');
  const year = datePart[0];
  const month = datePart[1];
  const day = datePart[2];

  const dt = new Date(`${year}-${month}-${day}`);

  return dt.toDateString();
}
