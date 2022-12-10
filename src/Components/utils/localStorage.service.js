export const getFavFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
};

export const setFavInStorage = (usuarios) => {
    const storageFavs = getFavFromStorage();
    const isFavOnList = storageFavs.filter(fav => {
        return fav.id === usuarios.id
    });
    if (isFavOnList.length === 0) {
        storageFavs.push(usuarios)
        localStorage.setItem("favs", JSON.stringify(storageFavs));
        alert("¡Has agregado este odontologo a tu lista de favoritos!");
        return true;
    }
    else {
        alert("¡Este odontologo ya está en tu lista de favoritos!");
        return false;
    }
}

export const removeFavInStorage = (id) => {
    let storageFavs = getFavFromStorage();
    const index = storageFavs.findIndex(fav => fav.id === id);
    if (index !== -1) {
        storageFavs.splice(index, 1);
        localStorage.setItem("favs", JSON.stringify(storageFavs));
        alert("Este odontologo ya no hace parte de tus favoritos.");
    }
    else {
        alert("Hay un error, pronto lo solucionaremos por ti");
    }
}

export const isFavorited = (id) => {
    const localData = getFavFromStorage();
    const isFavOnList = localData.filter(fav => {
        return fav.id === id
    });
    return isFavOnList.length === 1;
};


export const getTokenFromStorage = () => {
    const localData = localStorage.getItem("token");
    return localData ? localData : null;
}

export const setTokenInStorage = (token) => {
    localStorage.setItem("token", token);
}

export const removeTokenFromStorage = () => {
    localStorage.removeItem("token");
}