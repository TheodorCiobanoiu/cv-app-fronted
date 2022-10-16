export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token }; // for Spring Boot back-end
<<<<<<< HEAD
        // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
=======
>>>>>>> ad489e44792736c346bb47c432143f543c6f5518
    } else {
        return {};
    }
}
