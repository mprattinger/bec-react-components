export class ApplicationError {
  code?: string;
  message: string = "";
}

export const ApplicationErrorFactory = (message: string, code?: string) => {
  const error = new ApplicationError();
  error.code = code;
  error.message = message;
  return error;
};
