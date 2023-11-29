function forgotpassword(e) {
    e.preventDefault();
    console.log(e.target.name);

    const form = new FormData(e.target);
    const email = form.get("email");

    if (email) {
        const userDetails = {
            email: email,
        };

        console.log(userDetails);

        axios.post('http://localhost:3000/password/forgotpassword', userDetails)
            .then(response => {
                if (response.status === 202) {
                    document.body.innerHTML += '<div style="color:green;">Mail Successfully sent</div>';
                } else {
                    throw new Error('Something went wrong!!!');
                }
            })
            .catch(err => {
                document.body.innerHTML += `<div style="color:red;">${err}</div>`;
            });
    } else {
        document.body.innerHTML += '<div style="color:red;">Email is undefined or empty</div>';
    }
}
