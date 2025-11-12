import AsyncStorage from "@react-native-async-storage/async-storage";

class BaseMethods {
    ////////////////// Internal usage //////////////////////
    static readonly getHeaders = async (isFile?: boolean) => {
        const headers: HeadersInit = {
            'Content-Type': isFile ? 'multipart/form-data' : 'application/json',
            // 'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Origin': '*'
        }
        return headers;
    };

    static readonly getHeadersAuth = async (isFile?: boolean) => {
        const headers: HeadersInit = await BaseMethods.getHeaders(isFile as boolean);
        const token = await AsyncStorage.getItem('token')
        // headers.Authorization = `Bearer ${token}`
        console.log({ headers })
         const copyHeaders: HeadersInit = {
      Authorization: `Bearer ${token}`,
      ...headers,
    }
        return copyHeaders;
    };

    ///////////////////// External usage ////////////////////
    static readonly postRequest = async<T =any> (url: string, body: unknown, required_auth:boolean) => {
        console.log({url})
        console.log({body})
        console.log({required_auth})
        const head: HeadersInit = required_auth
            ? await BaseMethods.getHeadersAuth()
            : await BaseMethods.getHeaders();

        const options: RequestInit = {
            method: 'POST',
            headers: head,
            mode: 'cors' as RequestMode,
            cache: 'default' as RequestCache,
            body: JSON.stringify(body),
        };
        console.log('the sended header:::', options)
         
        return handleFetchDatasAndError<T>(() =>
            fetch(url, options)
        );
    };

    static readonly postFileRequest = async ( url:string, body:unknown, required_auth:boolean) => {
        const head: HeadersInit = required_auth
            ? await BaseMethods.getHeadersAuth(true)
            : await BaseMethods.getHeaders(true);
        console.log('the bodyyyyyyy::::', body)
        const options: RequestInit = {
            method: 'POST',
            headers: { ...head },
            mode: 'cors' as RequestMode,
            cache: 'default' as RequestCache,
            body: JSON.stringify(body),
        };
        console.log('the orption sendeddd::::', options)
        const response = await fetch(url, options)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                return err;
            });
        return response;
    };

    static readonly getRequest = async<T=any>(url:string, required_auth:boolean, params?: Record<string, any>,) => {
        const head = required_auth
            ? await BaseMethods.getHeadersAuth()
            : await BaseMethods.getHeaders();

                    let finalUrl = url;
        if (params && Object.keys(params).length > 0) {
            const queryString = new URLSearchParams(params).toString();
            finalUrl = `${url}?${queryString}`;
        }

        const options: RequestInit = {
            method: 'GET',
            headers: { ...head },
            mode: 'cors',
            cache: 'default',
        };
        
        return handleFetchDatasAndError<T>(() =>
            fetch(finalUrl, options)
        );
    };

    static readonly putFileRequest = async ( url:string, body:unknown, required_auth:boolean) => {
        const head = required_auth
            ? await BaseMethods.getHeadersAuth(true)
            : await BaseMethods.getHeaders(true);

        const headers: RequestInit = {
            method: 'PUT',
            headers: head,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body),
        };
        const response = await fetch(url, headers)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                return err;
            });
        return response;
    };

    static readonly putRequest = async ( url:string, body:unknown, required_auth:boolean) => {
        const head = required_auth
            ? await BaseMethods.getHeadersAuth()
            : await BaseMethods.getHeaders();

        const headers: RequestInit = {
            method: 'PUT',
            headers: head,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body),
        };
        return fetch(url, headers);
    };

    static readonly patchRequest = async ( url:string, body:unknown, required_auth:boolean) => {
        const head = required_auth
            ? await BaseMethods.getHeadersAuth()
            : await BaseMethods.getHeaders();

        const options: RequestInit = {
            method: 'PATCH',
            headers: head,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body),
        };
        return fetch(url, options);
    };

    static readonly deleteRequest = async ( url:string, body:unknown, required_auth:boolean) => {
        let head = required_auth
            ? await BaseMethods.getHeadersAuth()
            : await BaseMethods.getHeaders();

        let options: RequestInit = {
            method: 'DELETE',
            headers: head,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body),
        };
        return fetch(url, options);
    };
}

export default BaseMethods;



// Utilitaire générique pour gérer les erreurs
async function handleFetchDatasAndError<T>(fetchFn: () => Promise<Response>): Promise<{ data: T | null; error: string | null }> {
  try {
    const response = await fetchFn();

    if (!response.ok) {
      const errorText = await response.text();
      return { data: null, error: `HTTP error ${response.status}: ${errorText}` };
    }

    const data: T = await response.json().catch(() => {
      throw new Error('Failed to parse JSON response');
    });

    return { data, error: null };
  } catch (err: any) {
    return { data: null, error: err.message || 'Unknown error' };
  }
}
