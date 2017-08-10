/**
 * Created by 96004 on 2017/7/27.
 */
const USER_KEY='users'
module.exports={
    saveUser(user) {
        user.id=Date.now();
        let usersStr=localStorage.getItem(USER_KEY);
        let users=usersStr?JSON.parse(usersStr):[];
        users.push(user)
        localStorage.setItem(USER_KEY,JSON.stringify(users))
    },
    getUser() {
        let userStr=localStorage.getItem(USER_KEY)
        return userStr?JSON.parse(userStr):[];
    },
    deleteUser(id) {
        let userStr=localStorage.getItem(USER_KEY);
        let users=userStr?JSON.parse(userStr):[];
        users=users.filter((item)=>item.id!=id);
        localStorage.setItem(USER_KEY,JSON.stringify(users))
    }
}