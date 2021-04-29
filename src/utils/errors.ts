interface AppError {
  code: "APP_ERROR";
  message: string;
}
interface ErrorType {
  response?: { data: AppError[] }
  message: string;
  code?: string; 
}

interface ParsedErrors {
  raw: string;
  message: string;
  list: any[];
}

export function parseErrors<E extends ErrorType>(error: E){
  const messages = error.response?.data;
  const parsed: ParsedErrors = {
    raw: error.message,
    message: 'An error occured',
    list: []
  }

  if(error.message.includes('Network Error') || error.code === 'ECONNREFUSED') {
    parsed.message = 'Service is temporarily offline'
    return parsed;
  }

  if(Array.isArray(messages)){
    const appError = messages[0];
    if(!appError?.message) {
      parsed.list.push({ message: parsed.message });
      return parsed;
    } 

    parsed.message = appError.message;
    messages.forEach(obj => {
      if(!obj?.message) return;
      parsed.list.push({  message: `${obj.message}`});
    });
  }
  return parsed;
}