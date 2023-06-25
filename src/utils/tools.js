export const subStrFn = (str, preLen, sufLen) => {
  if (
    typeof str !== 'string' ||
    typeof preLen !== 'number' ||
    typeof sufLen !== 'number' ||
    preLen < 1 ||
    sufLen < 1
  )
    return str;
  if (str.length <= preLen + sufLen) return str;
  let text = '';
  text = str.substr(0, preLen) + '...' + str.substr(-sufLen);
  return text;
}

export const formatStrFn = (num) => {
  return num;
}

export const downLoadJsonDataFn = (json, fileName) => {
  // plan a
  // const href = `data:text/json;charset=utf-8,${encodeURIComponent(
  //   JSON.stringify(json)
  // )}`;
  // const link = document.createElement('a');
  // link.href = href;
  // link.download = `${fileName}.json`;
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);

  // plan b
  const jsonData = JSON.stringify(json, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const href = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = href;
  link.download = `${fileName}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(href);
}

const tools = {
  subStrFn,
  formatStrFn,
  downLoadJsonDataFn
}

export default tools;