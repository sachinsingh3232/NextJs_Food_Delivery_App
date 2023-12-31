import cookie from 'cookie'


const handler = (req, res) => {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            res.setHeader("Set-Cookie", cookie.serialize("token", process.env.TOKEN, {
                httpOnly:true,
                secure:true,
                sameSite: "none",
                maxAge: 60 * 60,
                path: '/'
            }))
            res.status(200).json("Successfull");
        }
        res.status(400).json("wrong Credentials!")
    }
}

export default handler
