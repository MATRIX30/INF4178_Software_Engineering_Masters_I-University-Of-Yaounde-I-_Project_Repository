export const capitalizeFirstLetter = (text: string | undefined): string => {
    if(!text) {
        return "";
    }
    const firstLetter = text[0].toUpperCase();
    const newText = text.substring(1);
    return firstLetter+newText;
}

export const generateHospitalId = (length = 8) =>  {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export const getCookie = (name: string) => {
    const cookies = document.cookie.split(';');

    console.log(cookies);

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      console.log(cookie);
      
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return undefined;
}