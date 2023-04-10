// BEGIN
export default function getGirlFriends (users) {
    return users.flatMap((user) => { 
        return user.friends.filter((friend) => friend.gender === 'female');
    });
}
// END