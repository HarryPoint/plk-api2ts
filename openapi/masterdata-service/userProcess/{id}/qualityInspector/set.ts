import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/员工工序相关/setQualityInspectorUsingPOST
*/
export default function fetchMethod(options: { data: ISetExecutorDTO[] }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/userProcess/{id}/qualityInspector/set",
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
    refIdList?: number[];
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
    ts?: number;
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
