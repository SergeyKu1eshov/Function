// BEGIN
export default function groupBy (users, obj) {
    return users.reduce((acc, user) => {
        const key = user[obj];
        if (acc[key]) {
            acc[key].push(user);
        } else {
            acc[key] = [user];
        }
        return acc;
    }, {});
}
// END