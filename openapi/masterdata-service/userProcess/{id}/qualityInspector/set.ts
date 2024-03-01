import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/员工工序相关/setQualityInspectorUsingPOST
*/
export default function fetchMethod(options: { data: ISetExecutorDTO[] }, extraOptions?: any) {
    return http<IJSONResultString1>(
        {
            url: "/masterdata-service/userProcess/{id}/qualityInspector/set",
            method: "POST",
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
/** JSONResult«string»_1 */
export interface IJSONResultString1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: EJSONResultString1_data;
    /** 返回消息说明 */
    msg?: string;
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

export enum EJSONResultString1_data {
    Y = "Y",
    N = "N"
}
