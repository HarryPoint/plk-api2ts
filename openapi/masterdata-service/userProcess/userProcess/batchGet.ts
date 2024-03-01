import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/员工工序相关/batchGetUserProcessUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListUserProcessVo>(
        {
            url: "/masterdata-service/userProcess/userProcess/batchGet",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«UserProcessVo»» */
export interface IJSONResultListUserProcessVo {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IUserProcessVo[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** UserProcessVo */
export interface IUserProcessVo {
    /** undefined */
    executorType?: EUserProcessVo_executorType;
    /** undefined */
    id?: string;
    /** undefined */
    processId?: string;
    /** undefined */
    refId?: string;
    /** undefined */
    refName?: string;
    /** undefined */
    type?: EUserProcessVo_type;
}

export enum EUserProcessVo_executorType {
    USER = "USER",
    ROLE = "ROLE",
    DEPARTMENT = "DEPARTMENT",
    CLASS_GROUP = "CLASS_GROUP",
    SYS_CONTROL = "SYS_CONTROL"
}

export enum EUserProcessVo_type {
    PRODUCE = "PRODUCE",
    QUALITY = "QUALITY"
}
