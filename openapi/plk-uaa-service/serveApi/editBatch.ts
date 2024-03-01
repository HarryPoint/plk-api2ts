import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/服务Api相关/editBatchUsingPOST
*/
export default function fetchMethod(options: { data: IServeauthrequestdto }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/serveApi/editBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ServeAuthRequestDTO */
export interface IServeauthrequestdto {
    /** undefined */
    serveApis?: IRequestdto[];
    /** undefined */
    serveCode?: string;
}
/** ServeApiRequestDTO */
export interface IRequestdto {
    /** undefined */
    api?: string;
    /** undefined */
    checkMode?: ERequestdto_checkMode;
    /** undefined */
    isLogin?: ERequestdto_isLogin;
    /** undefined */
    permissionCode?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum ERequestdto_checkMode {
    AND = "AND",
    OR = "OR"
}

export enum ERequestdto_isLogin {
    Y = "Y",
    N = "N"
}
