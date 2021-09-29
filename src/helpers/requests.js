import Axios from "axios";

const uri = `${process.env.REACT_APP_URI}`;

export const login = (username, password) => {
    const usrnm = "test"
    const psw = "test1234"

    if (username === usrnm && password === psw) {
        return { status: 200 }
    } else {
        return { status: 400 }
    }
};

export const getBands = async () => {
    try {
        const res = await Axios(
            {
                method: "GET",
                url: `${uri}/bands`,
            },
        )

        return res;
    } catch (error) {
        return error.response;
    }
}

export const getBandAlbums = async (id) => {
    try {
        const res = await Axios(
            {
                method: "GET",
                url: `${uri}/albums?bandId=${id}`,
            },
        )

        return res;
    } catch (error) {
        return error.response;
    }
}