class MyString {

    constructor(str) {
        this.str = str
    }

    reverse(){
        return this.str.split('').reverse().join('')
    }

    ucFirst(){
        return this.str.charAt(0).toUpperCase() + this.str.slice(1)
    }

    ucWords(){
        return this.str.split(' ').map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')
    }
}


let str1 = new MyString('abcde')
let str2 = new MyString('abcde')
let str3 = new MyString('abcde abcde abcde')

console.log(str1.reverse())
console.log(str2.ucFirst())
console.log(str3.ucWords())