import API from './Api';


export const fetchCountriesData = async () => {

    try {
        let data = await API.get('https://api.ooni.io/api/_/countries');
        console.log(data);
        if (data) {
            return data.data;
        }
        else {
            alert("Couldn't be gotten! Fetch Countries Data ")
        }
    }
    catch (e) {
        throw (e);
    }
};