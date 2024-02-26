import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/工序相关/batchGetUserProcessUsingPOST
*/
export default function fetchMethod(options: { data: number[] }, extraOptions?: any) {
    return http<IJSONResultListUserProcessVo>(
        {
            url: "/app-enterprise-web/api/app/enterprise/process/userProcess/batchGet",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«UserProcessVo»» */
export interface IJSONResultListUserProcessVo {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IUserProcessVo[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** UserProcessVo */
export interface IUserProcessVo {
    /** undefined */
    id?: number;
    /** undefined */
    processId?: number;
    /** undefined */
    executorType?: EUserProcessVo_executorType;
    /** undefined */
    refId?: number;
    /** undefined */
    type?: EUserProcessVo_type;
    /** undefined */
    refName?: string;
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
