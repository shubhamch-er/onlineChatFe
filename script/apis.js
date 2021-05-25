




const fnGetAllUser = async() => {
    const res = await fetch(baseURL + "users");
    console.log(res.json());
    return res.json();
}
