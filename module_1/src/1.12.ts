// Never,unknown and nullable type


// Never
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

// Unknown
let userInput: unknown;
let userName: string;

userInput = 5;
userName = userInput;

// Nullable
let userInput2: string | null = null;
let userName2: string = userInput2!;