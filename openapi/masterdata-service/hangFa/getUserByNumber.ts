import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/航发相关/getUserByNumberUsingGET
*/
export default function fetchMethod(options: { params: { Number?: string } }, extraOptions?: any) {
    return http<IJSONResultThirdApiResponseDTO>(
        {
            url: "/masterdata-service/hangFa/getUserByNumber",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ThirdApiResponseDTO» */
export interface IJSONResultThirdApiResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IThirdApiResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ThirdApiResponseDTO */
export interface IThirdApiResponseDTO {
    /** undefined */
    requestInfo?: IThirdApiRequestInfoResponseDTO;
    /** undefined */
    responseInfo?: IThirdApiResponseInfoResponseDTO;
}
/** ThirdApiRequestInfoResponseDTO */
export interface IThirdApiRequestInfoResponseDTO {
    /** undefined */
    body?: string;
    /** undefined */
    headers?: Record<string, string>;
    /** undefined */
    params?: Record<string, string>;
    /** undefined */
    url?: string;
}
/** ThirdApiResponseInfoResponseDTO */
export interface IThirdApiResponseInfoResponseDTO {
    /** undefined */
    errorInfo?: string;
    /** undefined */
    responseBody?: string;
    /** undefined */
    responseCode?: string;
    /** undefined */
    responseDataArray?: Record<string, any>[];
    /** undefined */
    responseDataObj?: Record<string, Record<string, any>>;
    /** undefined */
    responseMsg?: string;
    /** undefined */
    status?: number;
    /** undefined */
    success?: EThirdApiResponseInfoResponseDTO_success;
}

export enum EThirdApiResponseInfoResponseDTO_success {
    Y = "Y",
    N = "N"
}
