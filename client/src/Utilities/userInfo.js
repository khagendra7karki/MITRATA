class userInfo{
    constructor( wsObject ){
        this.email = ''
        this.password = ''
        this.firstName = ''
        this.lastName= ''
        this.gender = ''
        this.age = ''
        this.addresss = ''
        this.hobbies = []
        this.wsObject = wsObject
    }

    createJSON(){
        const JSONInfo = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            gender:this.gender,
            age: this.age,
            address: this.address,
            hobies: this.hobies, 
        }
        return JSONInfo
    }
    createUser(object){
        this.email = object.email
        this.password = object.firstName
        this.firstName = object.firstName
        this.lastName = object.lastName
        this.gender = object.gender
        this.age = object.age
        this.address = object.address
        this.hobbies = object.hobbies
        let requestObject = JSON.stringify({task: 'write', ...this.createJSON()})
        this.wsObject.send( requestObject)
    }
}

export default userInfo