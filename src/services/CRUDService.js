import bcrypt from 'bcryptjs'
import db from '../models/index'
var salt = bcrypt.genSaltSync(10)

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.role
            }) // cùng tên với model User
            resolve('ok')
        } catch (e) {
            reject(e)
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt)
            resolve(hash)
        } catch (e) {
            reject(e)
        }
    })
}

let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll(
                {
                    raw: true
                }
            )
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}

let getUserInfobyID = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne(
                {
                    where: { id: userId },
                    raw: true
                })
            if (user) {
                delete user.password
                resolve(user)
            }
            else {
                resolve({})
            }
        } catch (e) {
            reject(e)
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.firstName = data.firstName
                user.lastName = data.lastName
                user.address = data.address
                await user.save()
                let allUsers = await db.User.findAll()
                resolve(allUsers)
            } else {
                resolve()
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deleteUserData = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.destroy({ where: { id: userId } })
            let allUsers = await db.User.findAll()
            resolve(allUsers)
        } catch (e) { reject(e) }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllUsers: getAllUsers,
    getUserInfobyID: getUserInfobyID,
    updateUserData: updateUserData,
    deleteUserData: deleteUserData
}
