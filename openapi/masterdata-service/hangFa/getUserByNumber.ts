import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/航发相关/getUserByNumberUsingGET
export default function fetchMethod(params: { number?: string }) {
    return http<IJSONResultThirdApiResponseDTO>({
        url: "/masterdata-service/hangFa/getUserByNumber",
        method: "get",
        params,
    });
}
// JSONResult«ThirdApiResponseDTO»
export interface IJSONResultThirdApiResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThirdApiResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ThirdApiResponseDTO
export interface IThirdApiResponseDTO {
    // undefined
    requestInfo: IThirdApiRequestInfoResponseDTO;
    // undefined
    responseInfo: IThirdApiResponseInfoResponseDTO;
}
// ThirdApiRequestInfoResponseDTO
export interface IThirdApiRequestInfoResponseDTO {
    // undefined
    url: string;
    // undefined
    headers: Record<string, string>;
    // undefined
    params: Record<string, string>;
    // undefined
    body: string;
}
// ThirdApiResponseInfoResponseDTO
export interface IThirdApiResponseInfoResponseDTO {
    // undefined
    success: string;
    // undefined
    errorInfo: string;
    // undefined
    status: number;
    // undefined
    responseCode: string;
    // undefined
    responseMsg: string;
    // undefined
    responseBody: string;
    // undefined
    responseDataObj: Record<string, Record<string, any>>;
    // undefined
    responseDataArray: Record<string, any>[];
}
