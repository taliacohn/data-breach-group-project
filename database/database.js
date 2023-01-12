// const mysql = require('mysql2');
const mysql = require('mysql2/promise');
const con = async () => {
    return mysql.createConnection(
        {
            user: 'root',
            host: 'localhost',
            password: 'password',
            database: 'group_project_store'
        }
    );
    // return connection
}

exports.accountExistence = async (email) => {
    const connection = await con();
    const [rows, fields] = await connection.execute('SELECT * FROM users WHERE email=?;', [email])
    return await rows[0]

};

exports.usernameExistence = async (name) => {
    const connection = await con();
    const [rows, fields] = await connection.execute(`SELECT * FROM users WHERE username=?;`, [name])
    return await rows

}

exports.changeUserData = async (name, password, email) => {
    const connection = await con();
    const [rows, fields] = await connection.execute(`UPDATE users SET password=? username=? WHERE email=?;`
        , [password, name, email])
    return await rows[0];

}

exports.loginUser = async (email, password) => {
    const connection = await con();
    const [rows, fields] = await connection.execute(`SELECT * FROM users WHERE email=? AND password=?;`, [email, password])
    return await rows[0];
};

exports.userOrders = async (userId) => {
        const connection = await con();
        const [rows, fields] = await connection.execute(`SELECT * FROM orders WHERE user_id=?;`, [userId])
        return await rows[0];
};


exports.searchUserOrderByString = async (userId, productName) => {
    const connection = await con();
    const [rows, fields] = await connection.execute(`SELECT * FROM orders WHERE user_id=? AND product_name LIKE '%${product_name}%';`, [userId])
    return await rows[0];
};


exports.newOrder = async (userId, productName, quantity) => {
    const total_price = quantity * 2.78;
    const connection = await con();
    const [rows, fields] = await connection.execute(`insert into orders values (default, ?, ?, curdate(), ${total_price}, ?, 2.78);`
        , [userId, productName, quantity])
}


/*
function foo() {
    //try {
        useSomePromiseTask()
            .then(result1 => {
                //..
                //..
                doSomeOtherPromiseTask(result1)
            }, error => {})
            .then(result2 => console.log(result2))
            .catch(error => )
   // }catch(error){
        //..
    //}
}

async function foo2(){
    try {
        try {
            const result1 = await useSomePromiseTask()
        }catch(error) {

        }
        const result2 = await doSomeOtherPromiseTask(result1)
        console.log(result2)
    }catch(error){
        //..
    }
}

const result = foo()
console.log('end')





*/