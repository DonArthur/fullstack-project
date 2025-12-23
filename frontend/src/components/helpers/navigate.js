let navigateFunction = null

export const setNavigateFunction = (navigate) => {
    navigateFunction = navigate
}

export const navigate = (path) => {
    if (navigateFunction) {
        navigateFunction(path)
    } else {
        window.location.href = path
    }
}