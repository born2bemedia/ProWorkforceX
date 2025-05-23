import Cookies from 'js-cookie';

export { Cookies as cookies };

export const downloadFile = ({ url, name }: { url: string; name: string }) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
