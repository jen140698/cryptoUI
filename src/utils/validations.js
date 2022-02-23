export const validate = (e) => {
    const type = e.name;
    const value = e.value;
    let error = '';
    switch (type) {
        case 'fname':
            if (!value) error = "First Name is required"
            break;
        case 'lname':
            if (!value) error = "Last Name is required"
            break;
        case 'email':
            if (!value) error = "Email is required";
            if(value && !value.toLowerCase().match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
            ) error = "Enter Valid Email" ;
            break;
        case 'password':
            if (!value) error = "Password is required"
            break;
        case 'mobile':
            if (!value) error = "Mobile is required"
            if(value && !value.match(/^\d{10}$/)) error = "Enter valid mobile number"
            break;
    }
    return {[type]:error}

}