export interface customerInterface {

    custid: number,
    firstname: string,
    lastname: string,
    phonenumber: string,
    email: string,
    housenumber: string,
    streetname: string,
    city: string,
    state: string,
    country: String,
    postalcode: string,
    dateofbirth: string,
    username: string,
    password: string,
    onlineaccountstatus: string
    custaccounttab: [
        {
            accounttype: string,
            accountnumber: string,
            pinnumber: string
            chequerequesttab: [
                {
                    accountnumber: string,
                    chequetype: string,
                    chequerequeststatus: string
                }
            ]
        }
    ]
    

}
