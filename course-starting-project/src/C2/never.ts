let userInput: unknown;

userInput = 10;
userInput = "ola";
userInput = [8.2, "Teste"];

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("Page not found", 404);
