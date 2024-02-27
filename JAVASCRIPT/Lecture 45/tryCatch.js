function searchFood(item) {
    return new Promise(function fun1(res, rej) {
        console.log("searching start for", item, ".....");
        setTimeout(function timer1() {
            let data = `list of ${item}`;
            res({ item, data });
        }, 3000);
    });
}

function orderFood(item) {
    return new Promise(function fun2(res, rej) {
        console.log("Select ", item);
        setTimeout(function timer2() {
            let id = Math.floor(Math.random() * 999999);
            console.log("order created successfully with id no.", id);
            res({ id, item });
        }, 4000);
    });
}

function payment(item, id) {
    return new Promise(function fun3(res, rej) {
        console.log(`payment starting for ${item} with id no.`, id);
        setTimeout(function timer3() {
            let status = true;
            if (status) {
                res(status);
            } else {
                rej(
                    new Error(
                        `Payment Rejected due to some technical Error with status ${status}`
                    )
                );
            }
            // console.log("Payment successfull with status", status);
        }, 6000);
    });
}

async function foodOrder(item) {
    try {
        let res1 = await searchFood(item);
        let res2 = await orderFood(res1.item);
        let res3 = await payment(res2.item, res2.id);
        console.log("Payment successfull with status", res3);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("always execute");
    }
}

foodOrder("kadai panner");


