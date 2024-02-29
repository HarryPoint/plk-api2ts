import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/员工工序相关/setProductionPersonUsingPOST
*/
export default function fetchMethod(options: { data: ISetExecutorDTO[] }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/userProcess/{id}/productionPerson/set",
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
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring1_data;
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

export enum EJSONResultstring1_data {
    Y = "Y",
    N = "N"
}
