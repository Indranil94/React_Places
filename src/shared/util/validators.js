export const required = {type: "REQUIRED"};
export const email = {type: "EMAIL"};
export const maxLength=(length) => {
    return {type:"MAX_LENGTH", length: length }
};
export const minLength=(length) => {
    return {type:"MIN_LENGTH", length: length }
};

export const validate=(value, validators)=>{
    let isValid = true;
    let errMsg = null;
    validators.forEach(validator=>{
        if(isValid){
            switch(validator.type){
                case "REQUIRED":
                    isValid=isValid && value.trim().length>0;
                    errMsg = isValid?null:"Please enter some text or value";
                    break;
                case "MAX_LENGTH":
                    isValid = isValid && value.trim().length <= validator.length
                    errMsg = isValid?null:"Maximum characters is "+validator.length;
                    break;
                case "MIN_LENGTH":
                    isValid = isValid && value.trim().length >= validator.length;
                    errMsg = isValid?null:"Minimum characters required is "+validator.length;
                    break;
                case "EMAIL":
                    isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
                    errMsg = isValid?null:"Please enter valid email";
                    break;
                default:
                    isValid = false;
                    errMsg = isValid?null:"An unknown error occured";
                    break;
            }
        }
    });
    return {isValid, errMsg};

}