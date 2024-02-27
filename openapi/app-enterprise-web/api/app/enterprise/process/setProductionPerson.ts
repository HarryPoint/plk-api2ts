import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/工序相关/setProductionPersonUsingPOST
*/
export default function fetchMethod(options: { data: ISetExecutorDTO[], params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/process/setProductionPerson",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** SetExecutorDTO */
export interface ISetExecutorDTO {
    /** undefined */
    executorType?: ESetExecutorDTO_executorType;
    /** undefined */
    refIdList?: string[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum ESetExecutorDTO_executorType {
    USER = "USER",
    ROLE = "ROLE",
    DEPARTMENT = "DEPARTMENT",
    CLASS_GROUP = "CLASS_GROUP",
    SYS_CONTROL = "SYS_CONTROL"
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
