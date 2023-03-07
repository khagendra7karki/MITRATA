class userInfo{
    constructor( wsObject ){
        this.email = ''
        this.password = ''
        this.firstName = ''
        this.lastName= ''
        this.gender = ''
        this.age = ''
        this.motto = ''
        this.birthday = ''
        this.addresss = ''
        this.hobbies = []
        this.image = []
        this.wsObject = wsObject
    }

    createJSON(){
        const JSONInfo = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            gender:this.gender,
            motto: this.motto,
            birthday: this.birthday,
            age: this.age,
            address: this.address,
            hobbies: this.hobbies, 
            image : this.image
        }
        return JSONInfo
    }
    createUser(object){
        this.email = object.email
        this.password = object.password
        this.firstName = object.firstName
        this.lastName = object.lastName
        this.gender = object.gender
        this.age = object.age
        this.motto = object.motto
        this.birthday = object.birthday
        this.address = object.address
        this.hobbies = object.hobbies
        this.image =object.image
        let requestObject = JSON.stringify({task: 'create', key : this.email, value: {...this.createJSON()}})
        this.wsObject.send( requestObject )
    }

    verifyUser( credential ){
        this.wsObject.sendMessage( credential )
    }
}

export default userInfo